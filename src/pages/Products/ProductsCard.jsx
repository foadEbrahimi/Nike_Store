import React from 'react';
import { star } from '../../assets/images/Icons';
export default function ProductsCard({ item }) {
  return (
    <div className="space-y-4">
      <img src={item.imgURL} className="" alt="Products Img" />
      <div className="space-y-2 px-3">
        <div className="flex items-center gap-2">
          <img src={star} alt="Star" />
          <span className="text-xl text-SubTitle">4.2</span>
        </div>
        <h1 className="text-2xl font-PalanquinBold">{item.name}</h1>
        <h1 className="text-Primary text-xl font-ArialRounded">{item.price}</h1>
      </div>
    </div>
  );
}
