import React from 'react';

export default function NavBtn({ className, children }) {
  return <button className={`${className}`}>{children}</button>;
}
