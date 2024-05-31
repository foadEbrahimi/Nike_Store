import React from 'react';
import ProductsCard from './ProductsCard';
import { products } from '../../contants/index';
export default function Products() {
  return (
    <div className="md:h-screen md:flex md:flex-col md:justify-center space-y-16">
      <div className="space-y-5">
        <h1 className="text-5xl font-PalanquinBold">
          Our <span className="text-Primary">Popular</span> Products
        </h1>
        <p className="text-SubTitle text-lg font-Montserrat max-w-[31rem] 2xl:max-w-[30rem]">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="flex gap-y-[3rem] gap-x-[3rem] flex-wrap items-center justify-center">
        {products &&
          products.map((item, i) => <ProductsCard item={item} key={i} />)}
      </div>
    </div>
  );
}
