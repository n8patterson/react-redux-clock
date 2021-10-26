import React, { useEffect, useState } from 'react';
import { AnalogDisplay } from '../analogDisplay/AnalogDisplay';

export function Clock() {
  const [time, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <AnalogDisplay time={time} />
    </div>
  );
}
