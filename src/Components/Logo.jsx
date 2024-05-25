import React from 'react';

export default function Logo({ colorText }) {
  return (
    <div className="flex items-center gap-2">
      <img src="./images/logo.svg" className="w-10" alt="nike logo" />
      <span className={`text-3xl ${colorText} font-ArialRounded`}>Nike</span>
    </div>
  );
}
