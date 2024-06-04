import React from 'react';

import Card from '../../Components/Cards/Card';
import { services } from '../../constants';

export default function Services() {
  return (
    <div className="flex flex-col gap-10">
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
