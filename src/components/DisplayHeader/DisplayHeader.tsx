import styles from './DisplayHeader.module.css';

function DisplayHeader(): JSX.Element {
    return <div className={styles.DisplayHeader}>
        <div className={styles['menu-and-title-container']}>
            <div className={styles['menu-div']}>
                <input type='image' alt='menu' src='main-menu.png' className={styles.menu} />
            </div>
            <label className={styles['menu-label']}>Standard</label>
            <div className={styles['keep-on-top-div']}>
                <input type='image' alt='keep-on-top' src='keep-on-top.png' className={styles['keep-on-top']} />
            </div>
        </div>
        <div className={styles['memory-div']}>
            <input type='image' alt='keep-on-top' src='memory.png' className={styles['memory']} />
        </div>
    </div>;
}

export default DisplayHeader;