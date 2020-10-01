import { useEffect, useRef, useState } from 'react';

export const useCounter = () => {
  const [count, setCount] = useState(0);
  const incrRef = useRef<1 | -1>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + incrRef.current);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return {
    count,
    goUp() {
      incrRef.current = 1;
    },
    goDown() {
      incrRef.current = -1;
    },
  };
};
