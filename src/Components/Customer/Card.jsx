import React from 'react';

import { star } from '../../assets/images/Icons';

export default function Card({ img, feedback, name, rating }) {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <img src={img} className="rounded-full w-[7rem] 2xl:w-[10rem]" alt="user img" />
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="font-Montserrat text-SubTitle max-w-[30rem] text-center">{feedback}</p>
        <div className="flex items-center gap-2">
          <img src={star} alt="Star" />
          <span className="text-xl text-SubTitle">{rating}</span>
        </div>
        <h1 className="font-PalanquinBold text-2xl">{name}</h1>
      </div>
    </div>
  );
}
