import React from 'react';
import  styles  from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/feauture/counter/counterSlice';
import Heading from '../../Components/heading/Heading';

const Counter = () => {
    const dispatch = useDispatch();

    const count = useSelector(state =>  state.counter.value)
  return (
    <>
    <Heading>Counter</Heading>
    <div className={styles.counterArea} >
      <div className={styles.count}>
        <span>{count}</span>
      </div>
      <div className={styles.buttons}>
            <button onClick={() => dispatch(increment())} >+</button>
            <button onClick={() => dispatch(decrement())} >-</button>
      </div>
    </div>
    </>
  )
}

export default Counter;