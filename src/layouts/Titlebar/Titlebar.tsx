import styles from './Titlebar.module.css';

function Titlebar(): JSX.Element {
    return <div className={styles.Titlebar}>
        <div className={styles['icon-and-title-div']}>
            <img src="calc.png" className={styles['calc-icon']} alt='calculator icon' />
            <label className={styles.title}>Calculator</label>
        </div>
        <div className={styles.buttons}>
            <div className={styles['minimize-button-div']}>
                <input type='image' alt='minimize' src='icons8-subtract-64.png' className={styles['minimize-button']} />
            </div>
            <div className={styles['maximize-button-div']}>
                <input type='image' alt='maximize' src='maximize.png' className={styles['maximize-button']} />
            </div>
            <div className={styles['close-button-div']}>
                <input type='image' alt='close' src='Close-134.png' className={styles['close-button']} />
            </div>
        </div>
    </div>;
}

export default Titlebar;