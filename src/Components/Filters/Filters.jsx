import styles from './Filters.module.css'
import Filter from './Filter/Filter';

const Filters = (props) => {
    return (
        <div className={styles.card}>
        <h4>{props.title}</h4>
            <Filter title={'Все'} />
            <Filter title={'Без пересадок'} />
            <Filter title={'1 пересадка'} />
            <Filter title={'2 пересадки'} />
            <Filter title={'3 пересадки'} />
        </div>
    )
}

export default Filters; 