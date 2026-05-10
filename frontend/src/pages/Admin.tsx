import { useState, useEffect } from 'react';
import axios from 'axios';
import { Package, Plus, Trash2, ShoppingCart } from 'lucide-react';
import type { Product } from '../store/useStore';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

export default function Admin() {
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState('products');
  const [newProduct, setNewProduct] = useState({
    name: '', description: '', price: '', image: '', category: 'Burger', spicyLevel: '0'
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const prods = await axios.get(`${API_URL}/products`);
      setProducts(prods.data);
      const ords = await axios.get(`${API_URL}/orders`);
      setOrders(ords.data);
    } catch (e) {
      console.error("API error", e);
    }
  };

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/products`, {
        ...newProduct,
        price: parseFloat(newProduct.price),
        spicyLevel: parseInt(newProduct.spicyLevel),
      });
      fetchData();
      setNewProduct({ name: '', description: '', price: '', image: '', category: 'Burger', spicyLevel: '0' });
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${API_URL}/products/${id}`);
      fetchData();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen bg-dark-900 text-white p-6 pb-32 z-50 relative">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gradient">Admin Panel</h1>
      </div>

      <div className="flex gap-4 mb-6 border-b border-white/10 pb-4">
        <button onClick={() => setActiveTab('products')} className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors ${activeTab === 'products' ? 'bg-primary text-white' : 'bg-white/5 text-gray-400'}`}>
          <Package size={18} /> Mahsulotlar ({products.length})
        </button>
        <button onClick={() => setActiveTab('orders')} className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors ${activeTab === 'orders' ? 'bg-primary text-white' : 'bg-white/5 text-gray-400'}`}>
          <ShoppingCart size={18} /> Buyurtmalar ({orders.length})
        </button>
      </div>

      {activeTab === 'products' && (
        <div className="space-y-8">
          <div className="glass-card p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Plus className="text-primary"/> Yangi qo'shish</h2>
            <form onSubmit={handleAddProduct} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input type="text" placeholder="Nomi" required value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})} className="bg-white/5 border border-white/10 rounded-xl p-3 w-full outline-none" />
              <input type="number" placeholder="Narxi" required value={newProduct.price} onChange={e => setNewProduct({...newProduct, price: e.target.value})} className="bg-white/5 border border-white/10 rounded-xl p-3 w-full outline-none" />
              <input type="text" placeholder="Rasm URL" required value={newProduct.image} onChange={e => setNewProduct({...newProduct, image: e.target.value})} className="bg-white/5 border border-white/10 rounded-xl p-3 w-full outline-none" />
              <select value={newProduct.category} onChange={e => setNewProduct({...newProduct, category: e.target.value})} className="bg-dark-800 border border-white/10 rounded-xl p-3 w-full outline-none text-white">
                <option value="Burger">Burger</option>
                <option value="Lavash">Lavash</option>
                <option value="Pizza">Pizza</option>
                <option value="Combo setlar">Combo setlar</option>
                <option value="Ichimliklar">Ichimliklar</option>
              </select>
              <input type="text" placeholder="Ta'rifi" required value={newProduct.description} onChange={e => setNewProduct({...newProduct, description: e.target.value})} className="bg-white/5 border border-white/10 rounded-xl p-3 w-full outline-none sm:col-span-2" />
              <button type="submit" className="neon-button py-3 rounded-xl sm:col-span-2 font-bold mt-2">Qo'shish</button>
            </form>
          </div>

          <div className="space-y-3">
            {products.map((p: any) => (
              <div key={p.id} className="glass p-3 rounded-xl flex items-center gap-4">
                <img src={p.image} className="w-16 h-16 rounded-lg object-cover" />
                <div className="flex-1">
                  <h3 className="font-bold">{p.name}</h3>
                  <p className="text-primary font-bold text-sm">{p.price} so'm</p>
                </div>
                <button onClick={() => handleDelete(p.id)} className="p-3 text-red-500 hover:bg-white/5 rounded-full transition-colors">
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'orders' && (
        <div className="space-y-4">
          {orders.map((o: any) => (
            <div key={o.id} className="glass-card p-4 space-y-2">
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="font-bold">Buyurtma #{o.id}</span>
                <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">{o.status}</span>
              </div>
              <p className="text-sm text-gray-400">User ID: {o.user_id}</p>
              <p className="text-sm text-gray-400">Manzil: {o.address}</p>
              <p className="text-sm text-gray-400">Telefon: {o.phone}</p>
              <div className="pt-2 font-bold text-primary">Jami: {o.total_price} so'm</div>
            </div>
          ))}
          {orders.length === 0 && <p className="text-gray-500 text-center py-10">Buyurtmalar yo'q</p>}
        </div>
      )}
    </div>
  );
}
