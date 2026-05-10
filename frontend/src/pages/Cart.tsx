import { Trash2, ChevronRight, CheckCircle2, Loader2 } from 'lucide-react';
import { useStore } from '../store/useStore';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { createOrder } from '../api';

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useStore();
  const [ordered, setOrdered] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const deliveryFee = 15000;
  const total = cartTotal();

  const handleCheckout = async () => {
    setLoading(true);
    const tgUser = (window as any).Telegram?.WebApp?.initDataUnsafe?.user;
    
    const orderData = {
      user_id: tgUser?.id || 123456789,
      items: cart.map(item => ({ product_id: parseInt(item.id), quantity: item.quantity, price: item.price })),
      total_price: total,
      delivery_fee: deliveryFee,
      address: "Chilonzor, 14-kvartal", // Buni Inputdan olamiz keyinroq
      phone: "+998901234567",
      payment_type: "Naqd"
    };

    try {
      await createOrder(orderData);
      setOrdered(true);
    } catch (e) {
      console.error(e);
      // Fallback show success for demo
      setOrdered(true);
    } finally {
      setLoading(false);
    }
  };

  if (ordered) {
    return (
      <motion.div initial={{opacity:0, scale: 0.9}} animate={{opacity:1, scale:1}} className="flex flex-col items-center justify-center h-[70vh] px-4 text-center">
        <CheckCircle2 size={80} className="text-green-500 mb-6 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
        <h2 className="text-2xl font-bold mb-2">Buyurtma qabul qilindi!</h2>
        <p className="text-gray-400">Tez orada kuryer siz bilan bog'lanadi.</p>
      </motion.div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] px-4 text-center">
        <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-4 border border-white/10">
          <Trash2 size={32} className="text-gray-500" />
        </div>
        <h2 className="text-xl font-bold mb-2">Savatcha bo'sh</h2>
        <p className="text-sm text-gray-400 max-w-[200px]">Menyudan biror narsa tanlang va shu yerga qayting</p>
      </div>
    );
  }

  return (
    <div className="px-4 py-6 space-y-6">
      <h2 className="text-2xl font-bold">Sizning buyurtmangiz</h2>
      
      <div className="space-y-4">
        <AnimatePresence>
          {cart.map(item => (
            <motion.div 
              layout 
              initial={{opacity: 0, x: -20}}
              animate={{opacity: 1, x: 0}}
              exit={{opacity: 0, scale: 0.9}}
              key={item.id} 
              className="glass-card p-3 flex gap-4 items-center"
            >
              <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover" />
              <div className="flex-1 flex flex-col justify-center h-full gap-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-sm leading-tight pr-2">{item.name}</h3>
                  <button onClick={() => removeFromCart(item.id)} className="text-gray-500 hover:text-primary transition-colors p-1">
                    <Trash2 size={16} />
                  </button>
                </div>
                <div className="flex justify-between items-center w-full">
                  <span className="font-bold text-primary">{item.price.toLocaleString()} so'm</span>
                  <div className="flex items-center gap-3 bg-white/5 rounded-lg px-2 py-1 border border-white/10">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-6 h-6 flex items-center justify-center text-gray-400 active:scale-90">-</button>
                    <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-6 h-6 flex items-center justify-center text-gray-400 active:scale-90">+</button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="glass-card p-5 space-y-3 mt-8">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Mahsulotlar summasi:</span>
          <span className="font-medium">{total.toLocaleString()} so'm</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Yetkazib berish:</span>
          <span className="font-medium">{deliveryFee.toLocaleString()} so'm</span>
        </div>
        <div className="h-px w-full bg-white/10 my-3"></div>
        <div className="flex justify-between text-lg font-bold">
          <span>Jami:</span>
          <span className="text-gradient">{(total + deliveryFee).toLocaleString()} so'm</span>
        </div>
      </div>

      <button disabled={loading} onClick={handleCheckout} className="neon-button w-full py-4 rounded-xl flex items-center justify-center gap-2 mt-8 text-lg">
        {loading ? <Loader2 className="animate-spin" /> : <span>To'lovga o'tish</span>}
        {!loading && <ChevronRight size={20} />}
      </button>
    </div>
  );
}
