import { MouseEventHandler, MouseEvent, useState } from 'react';
import Buttons from '../Buttons/Buttons';
import Display from '../Display/Display';
import Titlebar from '../Titlebar/Titlebar';
import styles from './Parent.module.css';

function Parent(): JSX.Element {
    const [minimize, setMinimize]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(true);

    const minimizeClickHandler: MouseEventHandler<HTMLDivElement> = (event: MouseEvent): void => {
        setMinimize((prev) => {
            return !prev
        });
    };

    const parentStyleClass = styles.Parent + ` ${minimize === false ? styles['Parent-mazimize'] : styles['Parent-minimize']}`;

    return (
        <div className={parentStyleClass}>
            <Titlebar
                minimizeClickHandler={minimizeClickHandler}
            />
            <Display />
            <Buttons />
        </div>
    );
}

export default Parent;