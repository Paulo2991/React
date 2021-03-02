import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';
let countdownTimeout: NodeJS.Timeout;
export function Countdown() {
    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHashFinished] = useState(false);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minuteLeft, minuteRigth] = String(minutes).padStart(2, '0').split('');
    const [secondsLeft, secondsRigth] = String(seconds).padStart(2, '0').split('');
    function startCountdown() {
        setIsActive(true);
    }
    function resertCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(0.1 * 60);
    }
    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (isActive && time === 0) {
            setHashFinished(true);
            setIsActive(false);
        }
    }, [isActive, time]);
    return (
        <div>
            <div className={styles.CountdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRigth}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRigth}</span>
                </div>
            </div>
            {hasFinished ? (
                <button
                    disabled
                    type="button"
                    className={styles.Countdownbutton}
                >
                    Ciclo Encerrado
                </button>
            ) : (
                    <div>
                        { isActive ? (
                            <button type="button"
                                className={`${styles.Countdownbutton} ${styles.CountdownbuttonAtive}`}
                                onClick={resertCountdown}
                            >           Abandonar Ciclo
                            </button>
                        ) : (
                                <button type="button"
                                    className={styles.Countdownbutton}
                                    onClick={startCountdown}
                                >           Iniciar Ciclo
                                </button>
                            )}
                    </div>
                )}
        </div>
    );
}