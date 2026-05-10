import { MapPin, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 glass border-b-0 pb-4 pt-6 px-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-xs text-gray-400 mb-1">Yetkazib berish manzili</p>
          <div className="flex items-center gap-1">
            <MapPin size={16} className="text-primary" />
            <span className="font-semibold text-sm">Chilonzor, 14-kvartal</span>
          </div>
        </div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#ff2d55] to-orange-500 p-[2px]">
          <img src="https://ui-avatars.com/api/?name=User&background=141414&color=fff" alt="User" className="rounded-full w-full h-full object-cover" />
        </div>
      </div>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input 
          type="text" 
          placeholder="Nima yeysiz?" 
          className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 outline-none focus:border-primary transition-colors text-sm placeholder:text-gray-500"
        />
      </div>
    </header>
  );
}
