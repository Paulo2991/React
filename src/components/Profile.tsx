import styles from '../styles/components/Profile.module.css';
export function Profile(){
    return (
        <div className={styles.profileContainer}>
            <img src="../img/Gostosa.png" alt="Gata Gostosa"/>
            <div>
                <strong>Gata Gostosa</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}