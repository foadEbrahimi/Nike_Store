import React from 'react';

export default function Signup() {
  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-center">
      <h1 className="text-5xl font-PalanquinBold md:max-w-lg 2xl:max-w-md leading-[4rem]">
        Sign Up for <span className="text-Primary">Updates</span> & Newsletter
      </h1>
      <div className="join lg:w-6/12 justify-center">
        <input className="input input-bordered join-item w-[60%]" placeholder="Example@gmail.com" />
        <button className="btn join-item rounded-r-full bg-Primary text-white">Subscribe</button>
      </div>
    </div>
  );
}
