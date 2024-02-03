import styles from "./BmiClculator.module.css";
import Input from '../../Components/Input/Input';
import Button from '../../Components/button/Button';
import { useSelector, useDispatch } from 'react-redux';

import { setWeight, setHeight, setIsShow, setBmi } from '../../redux/feauture/bmiCalculator/bmiCalculatorSlice';
import Heading from "../../Components/heading/Heading";

const BmiCalculator = () => {
    const dispatch = useDispatch();

    const weight = useSelector((state) => state.bmiCalculator.weight);
    const height = useSelector((state) => state.bmiCalculator.height);
    const bmi = useSelector((state) => state.bmiCalculator.bmi);
    const isShow = useSelector((state) => state.bmiCalculator.isShow);

    const calculateHandle = (e) => {
        e.preventDefault();
        const calculatedBmi = (weight / (height * height)).toFixed(2);
        dispatch(setBmi(calculatedBmi));
        dispatch(setIsShow(true));
    }

    const handleReset = () => {
        dispatch(setHeight(''));
        dispatch(setWeight(''));
        dispatch(setBmi(''));
    }


     if(bmi <= 18.5) {
        dispatch(setBmi(`${bmi} Bu zəif nəticədir`))
    } else if (bmi > 18.5 && bmi < 24.9) {
        dispatch(setBmi(`${bmi} bu normal nəticədir`))
    } else if ( bmi > 25.0 && bmi < 29.99) {
        dispatch(setBmi(`${bmi} bu çox kilolu nəticədir`))
    } else if (bmi > 30.0 && bmi < 34.9) {
        dispatch(setBmi(`${bmi} bu hafif obez neticedir`))
    } else if ( bmi > 35.0 && bmi < 39.99) {
        dispatch(setBmi(`${bmi} bu orta dərəcə obez nəticədir`))
    } else if ( bmi >= 40) {
        dispatch(setBmi(`${bmi} bu yüksək  dərəcədə obez nəticədir`))
    }

    return (
        <>
        <Heading>BMI Calculator</Heading>
        <form className={styles.calculator}>
            <div className={styles.inputs}>
                <Input
                    input={{ type: "number", min: '100', max: '220' }}
                    label={'Height'}
                    onChange={(e) => dispatch(setHeight(e.target.value))}
                    value={height}
                />
                <Input
                    input={{ type: "number", min: '6', max: '150' }}
                    label={'Weight'}
                    onChange={(e) => dispatch(setWeight(e.target.value))}
                    value={weight}
                />
            </div>
            <Button className={styles.button} onClick={calculateHandle}>CALCULATE</Button>
            <Button className={styles.button} onClick={handleReset}>RESET</Button>
        </form>

        {isShow &&
         <p style={{ textAlign: 'center', fontSize: '60px', color: 'green' }}>BMI {bmi}</p>}
        </>
    )
}

export default BmiCalculator;
