import { useState, useEffect } from 'react';
import { categories as mockCategories, products as mockProducts } from '../data';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../api';
import type { Product } from '../store/useStore';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(mockCategories[0]);
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [categories, setCategories] = useState(mockCategories);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchProducts();
        if (data.length > 0) {
          setProducts(data);
          const uniqueCats = Array.from(new Set(data.map((p: Product) => p.category)));
          setCategories(uniqueCats as string[]);
          setActiveCategory(uniqueCats[0] as string);
        }
      } catch (e) {
        // Fallback to mock is already set
      }
    };
    loadData();
  }, []);

  const filteredProducts = products.filter(p => p.category === activeCategory);

  return (
    <div className="px-4 py-4 space-y-6">
      <div className="w-full h-36 rounded-2xl bg-gradient-to-r from-[#ff2d55] to-[#ff5b24] overflow-hidden relative shadow-glow">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 p-6 flex flex-col justify-center z-10">
          <span className="bg-white text-[#ff2d55] text-[10px] font-bold px-2 py-1 rounded-full w-max mb-2">20% CHEGIRMA</span>
          <h2 className="text-2xl font-bold italic text-white leading-tight">Yangi Combo!</h2>
          <p className="text-sm text-white/90 font-medium mt-1">Faqat shu hafta oxirigacha</p>
        </div>
        <img src="https://images.unsplash.com/photo-1594212889851-4091669a8b13?q=80&w=600&auto=format&fit=crop" className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-60 mix-blend-overlay" />
      </div>

      <div>
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-primary text-white shadow-glow' 
                  : 'bg-white/5 text-gray-400 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
