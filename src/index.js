import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import Navbar from './Components/Navbar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="!container !mx-auto lg:px-10 xl:px-16 2xl:px-22">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
