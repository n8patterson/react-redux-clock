import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTime, selectTime } from './clockSlice.js';
import { AnalogDisplay } from '../../components/AnalogDisplay';


export function Clock() {
  const time = useSelector(selectTime);
  const dispatch = useDispatch();

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(updateTime());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [dispatch]);

  return (
    <div>
      <AnalogDisplay time={time} />
    </div>
  );
}
