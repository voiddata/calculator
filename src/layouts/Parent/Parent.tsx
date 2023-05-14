import { MouseEventHandler, MouseEvent, useState, CSSProperties } from 'react';
import Buttons from '../Buttons/Buttons';
import Display from '../Display/Display';
import Titlebar from '../Titlebar/Titlebar';
import styles from './style';

const style: CSSProperties = { ...styles };

function Parent(): JSX.Element {
    const [minimize, setMinimize]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(true);

    console.log('again');
    const minimizeClickHandler: MouseEventHandler<HTMLDivElement> = (event: MouseEvent): void => {
        setMinimize((prev) => {
            return !prev
        });
    };

    return (
        <div style={minimize === true ? { ...style, width: '27rem', height: '45rem' } : { ...style, width: '100%', height: '100%' }}>
            <Titlebar
                minimizeClickHandler={minimizeClickHandler}
            />
            <Display />
            <Buttons />
        </div>
    );
}

export default Parent;