import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '@/store/features/counterSlice';
import { getUserDetail } from '@/api/user';
const About = memo(() => {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  const getData = async () => {
    const data = await getUserDetail({});
    console.log(data, 'hahha');
  };
  return (
    <>
      <h2>{count} hello</h2>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>+2</button>
      <button onClick={() => getData()}>获取数据</button>
    </>
  );
});

export default About;
