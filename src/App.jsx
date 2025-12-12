import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProjectDetail from './pages/ProjectDetail';
import Team from './pages/Team';
import Education from './pages/Education';
import Login from './pages/Login';
import Register from './pages/Register';

// Placeholder content for simple pages
const PlaceholderPage = ({ title }) => (
  <div className="pt-32 pb-20 min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
    <h1 className="text-4xl font-display font-bold text-white mb-4">{title}</h1>
    <p className="text-gray-400">Content coming soon.</p>
  </div>
);

const App = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Hide navbar/footer on login page
  const hideNavFooter = pathname === '/login' || pathname === '/register';

  return (
    <div className="min-h-screen bg-colestia-bg text-white selection:bg-colestia-gold selection:text-black">
      {!hideNavFooter && <Navbar />}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/education" element={<Education />} />
          <Route path="/team" element={<Team />} />
          <Route path="/login" element={<Login />} />

          {/* Placeholders for secondary links */}
          <Route path="/service" element={<PlaceholderPage title="Services" />} />
          <Route path="/news" element={<PlaceholderPage title="News & Updates" />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
          <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
          <Route path="/terms" element={<PlaceholderPage title="Terms of Service" />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      {!hideNavFooter && <Footer />}
    </div>
  );
};

export default App;
