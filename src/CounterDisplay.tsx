import React from 'react';
import { useCount } from './contexts/count.context';

export const CounterDisplay: React.FC = () => {
  const count = useCount();

  return <div>count: {count}</div>;
};
