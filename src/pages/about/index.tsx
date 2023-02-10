import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '@/store/features/counterSlice';
const About = memo(() => {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h2>{count} hello</h2>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>+2</button>
    </>
  );
});

export default About;
