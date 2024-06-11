import React from 'react';
import Card from '../../Components/Customer/Card';

import { reviews } from '../../constants';

export default function Customer() {
  return (
    <div className="bg-bgcustomer md:h-screen flex flex-col justify-center gap-10 rounded-[100px]">
      <div className="px-5 py-10">
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-5xl font-PalanquinBold text-center">
            What Our <span className="text-Primary">Customers</span> Say?
          </h1>
          <p className="text-lg font-Montserrat text-center max-w-[28rem]">
            Hear genuine stories from our satisfied customers about their
            exceptional experiences with us.
          </p>
        </div>
        <div className="grid items-center justify-center md:grid-cols-2 gap-10">
          {reviews.map(review => (
            <Card key={review.id} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
}
