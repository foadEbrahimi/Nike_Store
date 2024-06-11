import React from 'react';

import Card from '../../Components/Cards/Card';
import { services } from '../../constants';

export default function Services() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-14">
      {services.map(item => (
        <Card
          key={item.id}
          title={item.title}
          subTitle={item.subTitle}
          icon={item.icon}
        />
      ))}
    </div>
  );
}
