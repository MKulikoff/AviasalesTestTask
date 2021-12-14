import styles from './Filters.module.css'
import Filter from './Filter/Filter';

const Filters = ({setFilter, title}) => { 
    return (
        <div className={styles.card}>
        <h4>{title}</h4>
            <Filter title={'Все'} />
            <Filter title={'Без пересадок'} setFilter={setFilter} />
            <Filter title={'1 пересадка'} />
            <Filter title={'2 пересадки'} />
            <Filter title={'3 пересадки'} />
        </div>
    )
}

export default Filters; 