import DisplayBody from '../../components/DisplayBody/DisplayBody';
import DisplayHeader from '../../components/DisplayHeader/DisplayHeader';
import styles from './Display.module.css';

function Display(): JSX.Element {
    return <div className={styles.Display}>
        <DisplayHeader />
        <DisplayBody />
    </div>;
}

export default Display;