import React, { useState } from 'react';
import './App.css';

export const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='container'>
      <div>count: {count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
      </div>
    </div>
  );
};
