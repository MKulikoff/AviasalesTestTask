import styles from './Filter.module.css'

const Filter = ({title, setFilter}) => {
    return (
        <div className={styles.filter}>
            <input type="checkbox" onClick={() => {
                setFilter(title)
            }}/>
            <label htmlFor="">{title}</label>
        </div>
    )
}

export default Filter;