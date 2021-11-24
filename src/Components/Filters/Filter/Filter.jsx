import styles from './Filter.module.css'

const Filter = (props) => {
    return (
        <div className={styles.filter}>
            <input type="checkbox" />
            <label htmlFor="">{props.title}</label>
        </div>
    )
}

export default Filter;