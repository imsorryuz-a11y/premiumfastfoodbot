import { Home, ShoppingBag, User, Heart } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { motion } from 'framer-motion';

export default function BottomNavigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = useStore(state => state.cart);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navs = [
    { path: '/', icon: Home, label: 'Menyu' },
    { path: '/favorites', icon: Heart, label: 'Saqlangan' },
    { path: '/cart', icon: ShoppingBag, label: 'Savatcha', badge: totalItems },
    { path: '/profile', icon: User, label: 'Profil' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 glass border-t border-white/5 px-6 py-4 flex justify-between items-center z-50">
      {navs.map((nav) => {
        const isActive = location.pathname === nav.path;
        const Icon = nav.icon;
        
        return (
          <button 
            key={nav.path} 
            onClick={() => navigate(nav.path)}
            className={`relative flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-primary' : 'text-gray-500'}`}
          >
            <div className="relative">
              <Icon size={24} />
              {nav.badge ? (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-2 bg-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-glow"
                >
                  {nav.badge}
                </motion.span>
              ) : null}
            </div>
            <span className="text-[10px] font-medium">{nav.label}</span>
          </button>
        );
      })}
    </div>
  );
}
