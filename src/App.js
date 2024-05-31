import React from 'react';
import Products from './Components/Products/Products';
import About from './Components/About/About';
import Signup from './Components/Signup/Signup';

export default function App() {
  return (
    <div className="px-5 space-y-12">
      <Products />
      <About />
      <Signup />
    </div>
  );
}
