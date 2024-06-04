import React from 'react';
import Circle from './Circle';

export default function Card({ icon, title, subTitle }) {
  return (
    <div className="py-8 w-fit px-4 shadow-lg bg-white rounded-xl space-y-4">
      <Circle icon={icon} />
      <div className="space-y-2">
        <h1 className="text-xl font-PalanquinMedium">{title}</h1>
        <p className="text-lg text-SubTitle font-Montserrat">{subTitle}</p>
      </div>
    </div>
  );
}
