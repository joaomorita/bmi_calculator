import { useState } from "react";
import styles from './Formulario.module.css';

const Formulario = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    const renderImc = () => {
            // Converta altura de centímetros para metros
            let alturaEmMetros = height / 100;
            let imc = weight / (alturaEmMetros * alturaEmMetros);
            imc = imc.toFixed(2)
            
            switch (true) {
                case (imc < 18.5):
                    return `Your BMI: ${imc}. You're Underweight`;
                case (imc < 24.9):
                    return `Your BMI: ${imc}. You're considered on normal weight`;
                case (imc < 29.9):
                    return `Your BMI: ${imc}. You're considered Overweight`;
                case (imc < 34.9):
                    return `Your BMI: ${imc}. You're considered Obese`;
                case (imc < 39.9):
                    return `Your BMI: ${imc}. You're considered Obese class II`;
                case (imc > 40):
                    return `Your BMI: ${imc}. You're considered severely Obese`;
                default:
                    return `Put your weight and height`;
            }

    };

    return (
        <div className='container'>
            <h1 className={styles.title}>Find your BMI and health risks</h1>
            <form className={styles.formSection}>
                <div>
                    <label htmlFor={height}>Height</label>
                    <input
                        type="number"
                        placeholder="Your height (cm)"
                        value={height}
                        onChange={evento => setHeight(parseFloat(evento.target.value) || '')} // Altura em centímetros
                    />
                </div>
                <div>
                    <label htmlFor={weight}>Weight</label>
                    <input
                        type="number"
                        placeholder="Your weight (kg)"
                        value={weight}
                        onChange={evento => setWeight(parseFloat(evento.target.value) || '')} // Peso em quilogramas
                    />
                </div>
            </form>
            <p className={styles.result}>{renderImc()}</p>
            
        </div>
    );
};

export default Formulario;