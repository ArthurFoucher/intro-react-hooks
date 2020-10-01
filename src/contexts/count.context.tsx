import React, { useContext } from 'react';
import { useCounter } from '../hooks/useCounter';

export const CountContext = React.createContext<number | null>(null);

export const useCount = () => {
  const count = useContext(CountContext);

  if (count == null) {
    throw new Error('useCount must be used inside a <CountProvider>');
  }

  return count;
};

export const CountProvider: React.FC = ({ children }) => {
  const { count, goUp, goDown } = useCounter();

  return (
    <>
      <CountContext.Provider value={count}>{children}</CountContext.Provider>
      <div>
        <button onClick={goUp}>Increment</button>
        <button onClick={goDown}>Decrement</button>
      </div>
    </>
  );
};
