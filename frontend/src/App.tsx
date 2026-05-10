import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Admin from './pages/Admin';
import BottomNavigation from './components/BottomNavigation';
import Header from './components/Header';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Initialize Telegram WebApp
    const tg = (window as any).Telegram?.WebApp;
    if (tg) {
      tg.expand();
      tg.ready();
      tg.setHeaderColor('#0a0a0a');
      tg.setBackgroundColor('#0a0a0a');
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-dark-900 text-white pb-24">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <BottomNavigation />
      </div>
    </Router>
  );
}

export default App;
