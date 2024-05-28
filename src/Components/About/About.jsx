import React from 'react';
import NavBtn from '../Buttons/NavBtn';
import { shoes5 } from '../../assets/images';
export default function About() {
  return (
    <div className="h-screen md:flex md:flex-col md:justify-center">
      <div className="space-y-10 md:flex md:items-center md:gap-2">
        <div className="space-y-5">
          <h1 className="text-5xl font-PalanquinBold">
            We Provide You <span className="text-Primary">Super Quality</span>{' '}
            Shoes
          </h1>
          <p className="text-SubTitle text-lg font-Montserrat max-w-[31rem] 2xl:max-w-[30rem]">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>
          <p className="text-SubTitle text-lg font-Montserrat">
            Our dedication to detail and excellence ensures your satisfaction
          </p>
          <NavBtn className="text-white bg-Primary rounded-full text-xl px-5 py-2 transition-all duration-300 hover:scale-110">
            View details
          </NavBtn>
        </div>
        <img
          src={shoes5}
          className="md:w-[20rem] xl:w-[25rem] 2xl:w-[30rem]"
          alt=""
        />
      </div>
    </div>
  );
}
