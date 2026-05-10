import type { Product } from './store/useStore';

export const categories = [
  "Combo setlar", "Lavash", "Burger", "Pizza", "Fri", "Ichimliklar", "Desertlar"
];

export const products: Product[] = [
  {
    id: "1", name: "Premium Beef Burger", description: "100% halol mol go'shti, maxsus sous, cheddar pishloq, aysberg karami, pomidor", price: 35000, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop", calories: 550, spicyLevel: 1, category: "Burger"
  },
  {
    id: "2", name: "Achchiq Lavash", description: "Katta razmer, jalapeño bilan, qarsildoq lavash xamiri", price: 30000, image: "https://images.unsplash.com/photo-1626804475297-41607ea0d4eb?q=80&w=600&auto=format&fit=crop", calories: 450, spicyLevel: 3, category: "Lavash"
  },
  {
    id: "3", name: "Family Combo", description: "4x Burger, 2x Katta Fri, 1L Cola", price: 150000, image: "https://images.unsplash.com/photo-1594212889851-4091669a8b13?q=80&w=600&auto=format&fit=crop", calories: 2200, spicyLevel: 0, category: "Combo setlar"
  },
  {
    id: "4", name: "Pepperoni Pizza", description: "Italiya uslubida yupqa xamir, mozzarella, haqiqiy pepperoni", price: 75000, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=600&auto=format&fit=crop", calories: 1200, spicyLevel: 2, category: "Pizza"
  },
  {
    id: "5", name: "Double Cheese Burger", description: "Ikki qavatli kotlet, ko'p miqdorda pishloq", price: 45000, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=600&auto=format&fit=crop", calories: 750, spicyLevel: 0, category: "Burger"
  },
  {
    id: "6", name: "Chicken Burger", description: "Qarsildoq tovuq filesi, oq sous", price: 28000, image: "https://images.unsplash.com/photo-1615719413546-198b25453f85?q=80&w=600&auto=format&fit=crop", calories: 450, spicyLevel: 0, category: "Burger"
  },
  {
    id: "7", name: "Pishloqli Lavash", description: "Ko'p miqdorda mozzarella pishlog'i bilan", price: 32000, image: "https://images.unsplash.com/photo-1626804475297-41607ea0d4eb?q=80&w=600&auto=format&fit=crop", calories: 500, spicyLevel: 0, category: "Lavash"
  },
  {
    id: "8", name: "Margarita Pizza", description: "Pomidor sousi, mozzarella va rayxon", price: 65000, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=600&auto=format&fit=crop", calories: 900, spicyLevel: 0, category: "Pizza"
  },
  {
    id: "9", name: "Katta Fri", description: "Qarsildoq va oltin rang qovurilgan kartoshka", price: 15000, image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?q=80&w=600&auto=format&fit=crop", calories: 350, spicyLevel: 0, category: "Fri"
  },
  {
    id: "10", name: "Cheese Fri", description: "Eritilgan pishloq sousi bilan fri", price: 22000, image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?q=80&w=600&auto=format&fit=crop", calories: 450, spicyLevel: 0, category: "Fri"
  },
  {
    id: "11", name: "Coca Cola 0.5L", description: "Muzdek Coca Cola", price: 8000, image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=600&auto=format&fit=crop", calories: 210, spicyLevel: 0, category: "Ichimliklar"
  },
  {
    id: "12", name: "Fanta 0.5L", description: "Apelsin ta'mli salqin ichimlik", price: 8000, image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=600&auto=format&fit=crop", calories: 220, spicyLevel: 0, category: "Ichimliklar"
  },
  {
    id: "13", name: "Mojito", description: "Yalpizli va laymli salqin ichimlik", price: 15000, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop", calories: 150, spicyLevel: 0, category: "Ichimliklar"
  },
  {
    id: "14", name: "Shokoladli Keks", description: "Eritilgan shokolad markazli qaynq desert", price: 25000, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&auto=format&fit=crop", calories: 400, spicyLevel: 0, category: "Desertlar"
  },
  {
    id: "15", name: "Muzqaymoq", description: "Vanilli va shokoladli muzqaymoq", price: 12000, image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=600&auto=format&fit=crop", calories: 250, spicyLevel: 0, category: "Desertlar"
  }
];
