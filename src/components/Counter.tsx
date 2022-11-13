import {
  CounterHeadline1,
  CounterMain,
  CounterValueDiv,
} from '@/components/CounterStyle';

function Counter() {
  const toggleCounterHandler = () => {};

  return (
    <CounterMain>
      <CounterHeadline1>Redux Counter</CounterHeadline1>
      <CounterValueDiv>--- COUNTER VALUE ---</CounterValueDiv>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </CounterMain>
  );
}

export default Counter;
