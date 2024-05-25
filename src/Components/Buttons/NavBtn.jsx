import React from 'react';

export default function NavBtn({ bg, color, className, children }) {
  return <button className={`${bg} ${color} ${className}`}>{children}</button>;
}
