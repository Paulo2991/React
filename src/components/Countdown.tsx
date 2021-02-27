import {useState} from 'react';
import styles from '../styles/components/Countdown.module.css';
export function Countdown(){
    const[time,setTime] = useState(25 *60);
    const minutes = time /60;
    return(
        <div className={styles.CountdownContainer}>
            <div>
                <span>2</span>
                <span>5</span>
            </div>
            <span>:</span>
            <div>
                <span>0</span>
                <span>0</span>
            </div>
        </div>
    );
}