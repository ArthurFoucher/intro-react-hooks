import React from 'react';
import './App.css';
import { CountProvider } from './contexts/count.context';
import { CounterDisplay } from './CounterDisplay';

export const App: React.FC = () => {
  return (
    <div className='container'>
      <CountProvider>
        <CounterDisplay />
      </CountProvider>
    </div>
  );
};
