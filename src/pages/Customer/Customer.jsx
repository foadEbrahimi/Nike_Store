import React from 'react';

export default function Customer() {
  return (
    <div className='bg-bgcustomer py-5'>
      <div className='flex flex-col items-center justify-center gap-5'>
        <h1 className="text-5xl font-PalanquinBold text-center">
          What Our <span className="text-Primary">Customers</span> Say?
        </h1>
        <p className="text-lg font-Montserrat text-center max-w-[28rem]">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
    </div>
  );
}
