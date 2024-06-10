import React from 'react';

import Products from './pages/Products/Products';
import About from './pages/About/About';
import Signup from './pages/Signup/Signup';
import Footer from './pages/Footer/Footer';
import Services from './pages/Services/Services';
import Customer from './pages/Customer/Customer';

export default function App() {
  return (
    <div className="px-5 space-y-12">
      <Products />
      <About />
      <Services />
      <Customer />
      <Signup />
      <Footer />
    </div>
  );
}
