import sytles from '../styles/components/ExperienceBar.module.css'
export function ExperiencieBar() {
    return (
        <header className={sytles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: '58%' }} />
                <span className={sytles.currenceExperience} style={{ left : '58%' }}>
                    300 xp
                </span>
            </div>
            <span>600 xp</span>
        </header>
    );
}