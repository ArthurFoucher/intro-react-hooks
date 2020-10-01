import React from 'react';
import './App.css';
import { useCounter } from './hooks/useCounter';
import { CountContext } from './contexts/count.context';
import { CounterDisplay } from './CounterDisplay';

export const App: React.FC = () => {
  const { count, goUp, goDown } = useCounter();

  return (
    <div className='container'>
      <CountContext.Provider value={count}>
        <CounterDisplay />
      </CountContext.Provider>
      <div>
        <button onClick={goUp}>Increment</button>
        <button onClick={goDown}>Decrement</button>
      </div>
    </div>
  );
};
