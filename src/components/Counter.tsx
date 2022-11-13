import {
  CounterHeadline1,
  CounterMain,
  CounterValueDiv,
} from '@/components/CounterStyle';
import { decrement, increment } from '@/store/slice';
import { useAppDispatch, useAppSelector } from '@/hooks/store-hooks';

function Counter() {
  const count = useAppSelector((state) => state.counters.counter);
  const dispatch = useAppDispatch();

  const toggleCounterHandler = () => {};

  const incrementHandler = () => {
    dispatch(increment());
    console.log('incremented');
  };

  const decrementHandler = () => {
    dispatch(decrement());
    console.log('decremented');
  };

  return (
    <CounterMain>
      <CounterHeadline1>Redux Counter</CounterHeadline1>
      <CounterValueDiv>--- COUNTER VALUE: {count} ---</CounterValueDiv>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </CounterMain>
  );
}

export default Counter;
