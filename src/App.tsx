import React, { useEffect, useRef, useState } from 'react';
import './App.css';

export const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const incrRef = useRef<1 | -1>(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + incrRef.current);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='container'>
      <div>count: {count}</div>
      <div>
        <button onClick={() => incrRef.current = 1}>Increment</button>
        <button onClick={() => incrRef.current = -1}>Decrement</button>
      </div>
    </div>
  );
};
