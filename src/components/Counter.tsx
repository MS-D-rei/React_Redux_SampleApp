import {
  CounterButton,
  CounterHeadline1,
  CounterMain,
  CounterValueDiv,
} from '@/components/CounterStyle';
import { decrement, increment, incrementByAmount, toggleCounter } from '@/store/CounterSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/store-hooks';

function Counter() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);
  const isShownCounter = useAppSelector((state) => state.counter.isShown);

  console.log(count);
  
  const incrementHandler = () => {
    dispatch(increment());
    console.log('incremented');
  };
  
  const decrementHandler = () => {
    dispatch(decrement());
    console.log('decremented');
  };
  
  const incrementByAmountHandler = () => {
    dispatch(incrementByAmount(5))
  }
  
  const toggleCounterHandler = () => {
    dispatch(toggleCounter())
  };
  
  return (
    <CounterMain>
      <CounterHeadline1>Redux Counter</CounterHeadline1>
      {isShownCounter && <CounterValueDiv>--- COUNTER VALUE: {count} ---</CounterValueDiv>}
      <div>
        <CounterButton onClick={incrementHandler}>Increment</CounterButton>
        <CounterButton onClick={incrementByAmountHandler}>Increment by 5</CounterButton>
        <CounterButton onClick={decrementHandler}>Decrement</CounterButton>
      </div>
      <CounterButton onClick={toggleCounterHandler}>
        Toggle Counter
      </CounterButton>
    </CounterMain>
  );
}

export default Counter;
