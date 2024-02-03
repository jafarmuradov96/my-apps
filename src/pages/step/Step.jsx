import React, { useState } from 'react';
import styles from './Step.module.css';
import Button from '../../Components/button/Button';
import Heading from '../../Components/heading/Heading';

const Step = () => {
    const [stepCount, setStepCount] = useState(0);
    const stepDescriptions = [
        '1Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        '2Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        '3Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        '4Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    ];

    const handlePrev = () => {
        if (stepCount > 0) {
            setStepCount(stepCount - 1);
        }
    };

    const handleNext = () => {
        if (stepCount < stepDescriptions.length - 1) {
            setStepCount(stepCount + 1);
        }
    };


    return (
        <>
            <Heading>Step</Heading>
            <div className={styles.step}>
                <div className={styles.steps}>
                    {stepDescriptions.map((description, index) => (
                        <span key={index} className={stepCount >= index ? styles.activeStep : ''}>{index + 1}</span>
                    ))}
                </div>

                <div className={styles.container}>
                    <div className={styles.content}>
                        <h3>Step {stepCount + 1}</h3>
                        <p>{stepDescriptions[stepCount]}</p>
                    </div>

                    <div className={styles.buttons}>
                        <Button className={styles.btn} onClick={handlePrev} disabled={stepCount === 0}>Prev</Button>
                        <Button className={styles.btn} onClick={handleNext} disabled={stepCount === stepDescriptions.length - 1}>Next</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Step;
