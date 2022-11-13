import {
  CounterButton,
  CounterHeadline1,
  CounterMain,
  CounterValueDiv,
} from '@/components/CounterStyle';
import { decrement, increment } from '@/store/slice';
import { useAppDispatch, useAppSelector } from '@/hooks/store-hooks';

function Counter() {
  const count = useAppSelector((state) => state.counters.counter);
  const dispatch = useAppDispatch();

  console.log(count);

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
      <div>
        <CounterButton onClick={incrementHandler}>Increment</CounterButton>
        <CounterButton onClick={decrementHandler}>Decrement</CounterButton>
      </div>
      <CounterButton onClick={toggleCounterHandler}>
        Toggle Counter
      </CounterButton>
    </CounterMain>
  );
}

export default Counter;
