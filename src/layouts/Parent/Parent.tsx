import Buttons from '../Buttons/Buttons';
import Display from '../Display/Display';
import Titlebar from '../Titlebar/Titlebar';
import styles from './Parent.module.css';

function Parent(): JSX.Element {
    return <div className={styles.Parent}>
        <Titlebar />
        <Display />
        <Buttons />
    </div>;
}

export default Parent;