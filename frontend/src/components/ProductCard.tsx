import { Plus, Minus, Flame } from 'lucide-react';
import { useStore } from '../store/useStore';
import type { Product } from '../store/useStore';
import { motion } from 'framer-motion';

export default function ProductCard({ product }: { product: Product }) {
  const { cart, addToCart, updateQuantity } = useStore();
  
  const cartItem = cart.find(item => item.id === product.id);
  const quantity = cartItem?.quantity || 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card overflow-hidden flex flex-col"
    >
      <div className="relative h-40 w-full">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        {product.spicyLevel ? (
          <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md rounded-full px-2 py-1 flex items-center gap-1">
            <Flame size={14} className="text-orange-500" />
            <span className="text-[10px] font-bold text-white">{product.spicyLevel}/3</span>
          </div>
        ) : null}
      </div>
      <div className="p-3 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-sm mb-1 line-clamp-1">{product.name}</h3>
          <p className="text-xs text-gray-400 line-clamp-2 mb-2">{product.description}</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="font-bold text-primary">{product.price.toLocaleString()} so'm</span>
          
          {quantity === 0 ? (
            <button 
              onClick={() => addToCart(product)}
              className="bg-white/10 hover:bg-white/20 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
            >
              <Plus size={16} />
            </button>
          ) : (
            <div className="flex items-center gap-2 bg-primary rounded-full px-2 py-1 shadow-glow">
              <button onClick={() => updateQuantity(product.id, quantity - 1)} className="w-6 h-6 flex items-center justify-center active:scale-90 transition-transform">
                <Minus size={14} />
              </button>
              <span className="text-sm font-bold w-4 text-center">{quantity}</span>
              <button onClick={() => updateQuantity(product.id, quantity + 1)} className="w-6 h-6 flex items-center justify-center active:scale-90 transition-transform">
                <Plus size={14} />
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
