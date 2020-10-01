import React from 'react';
import './App.css';
import { useCounter } from './hooks/useCounter';

export const App: React.FC = () => {
  const { count, goUp, goDown } = useCounter();

  return (
    <div className='container'>
      <div>count: {count}</div>
      <div>
        <button onClick={goUp}>Increment</button>
        <button onClick={goDown}>Decrement</button>
      </div>
    </div>
  );
};
