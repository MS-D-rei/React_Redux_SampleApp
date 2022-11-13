import {
  CounterHeadline1,
  CounterMain,
  CounterValueDiv,
} from '@/components/CounterStyle';
import { decrement, increment } from '@/store/slice';
import { store } from '@/store/store'

function Counter() {
  const toggleCounterHandler = () => {};

  store.subscribe(() => console.log(store.getState()))

  const incrementHandler = () => {
    store.dispatch(increment());
  }

  const decrementHandler = () => {
    store.dispatch(decrement());
  }

  return (
    <CounterMain>
      <CounterHeadline1>Redux Counter</CounterHeadline1>
      <CounterValueDiv>--- COUNTER VALUE: {store.getState().counters.counter} ---</CounterValueDiv>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </CounterMain>
  );
}

export default Counter;
