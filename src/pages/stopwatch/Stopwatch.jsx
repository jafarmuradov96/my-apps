import React, { useEffect, useState } from 'react';
import styles from './Stopwatch.module.css';
import Heading from '../../Components/heading/Heading';

const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState(false);

    const [time, setTime] = useState(0)


    useEffect( () => {

        let intervalId;
        if(isRunning) {
            intervalId = setInterval( () => setTime(time + 1), 10 );
        }

        return () => clearInterval(intervalId)
    }, [isRunning, time])



    const hours = Math.floor(time / 360000);

    const minutes = Math.floor((time % 360000) / 6000);
  
    const seconds = Math.floor((time % 6000) / 100);
  
    const milliseconds = time % 100;


    const watchTime = `${hours < 10 ? '0' + hours : hours} : ${minutes < 10 ? '0' + minutes : minutes} : 
    ${seconds < 10 ? '0' + seconds : seconds} : ${milliseconds < 10 ? '0' + milliseconds : milliseconds}`

    const startWatch = () => {
        setIsRunning(true)
    }
    const stopWatch = () => {
        setIsRunning(false)
    }

    const resetWatch = () => {
        setTime(0)
    }


  return (
    <>
    <Heading>Stopwatch</Heading>
    <div className={styles.stopwatch}>
        <span>
            {watchTime}
        </span>
        <div className={styles.btns}>
            { 
            !isRunning ?
            <button onClick={startWatch} className={styles.btnStart}>START</button> 
            :
            <button onClick={stopWatch} className={styles.btnStop}>STOP</button> 
            }
            <button onClick={resetWatch} className={styles.btnReset}>RESET</button>
        </div>
    </div>
    </>
  )
}

export default Stopwatch