import React, { useContext } from 'react';
import { CountContext } from './contexts/count.context';

export const CounterDisplay: React.FC = () => {
  const count = useContext(CountContext);

  return <div>count: {count}</div>;
};
