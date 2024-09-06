import styles from './Info.module.css';

const Info = () => {
    return(
        <div className={styles.info}>
            <table>
                <thead>
                    <td>Classification</td>
                    <td>BMI</td>
                </thead>
                <tbody>
                    <tr>
                        <td>Underweight</td>
                        <td>Below 18.5</td>
                    </tr>
                    <tr>
                        <td>Normal</td>
                        <td>18.5-24.9</td>
                    </tr>
                    <tr>
                        <td>Overweight</td>
                        <td>25.0-29.9</td>
                    </tr>
                    <tr>
                        <td>Obesity</td>
                        <td>30 and above</td>
                    </tr>
                    <tr>
                        <td>Class I</td>
                        <td>30.0-34.9</td>
                    </tr>
                    <tr>
                        <td>Class II</td>
                        <td>35.0-39.9</td>
                    </tr>
                    <tr>
                        <td>Class III</td>
                        <td>40 and above</td>
                    </tr>
                </tbody>
            </table>
            <div className={styles.infoText}>
                <h1>Why is BMI important to know?</h1>
                <p>BMI is a good way to check your risk of diseases related to body fat. Living with overweight or obesity is associated with an increased risk of mortality and other diseases or conditions. Generally, the higher your BMI, the greater the risk of developing other chronic obesity-related diseases.</p>
            </div>
        </div>
    )
}

export default Info;