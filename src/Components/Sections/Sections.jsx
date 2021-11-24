import styles from './Sections.module.css'

const Sections = ({firstSection, secondSection}) => {
    return (
        <div className={styles.sections_wrapper}>
            <div className={styles.cheapest_section}>
                <p>{firstSection}</p>
            </div>
            <div className={styles.fastest_section}>
                <p>{secondSection}</p>
            </div>
        </div>
    )
}

export default Sections; 