import styles from './Ticket.module.css';

const Ticket = () => {
    return (
        <div className={styles.card}>
            <div className={styles.price_logo}>
                <p>13 400 Р</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/S7_new_logo.svg/345px-S7_new_logo.svg.png" alt="" />
            </div>
            <div className={styles.way_there}>
                <div className="destination_time">
                    <h6 className={styles.title}>MOW - HMB</h6>
                    <p>12:00 - 15:00</p>
                </div>
                <div className="onTheWay">
                    <h6 className={styles.title}>В ПУТИ</h6>
                    <p>21ч 15м</p>
                </div>
                <div className="transfers">
                    <h6 className={styles.title}>1 ПЕРЕСАДКА</h6>
                    <p>HKG</p>
                </div>
            </div>
            <div className={styles.way_back}>
                <div className="destination_time">
                    <h6 className={styles.title}>MOW-HMB</h6>
                    <p>12:00 - 15:00</p>
                </div>
                <div className="onTheWay">
                    <h6 className={styles.title}>В ПУТИ</h6>
                    <p>21ч 15м</p>
                </div>
                <div className="transfers">
                    <h6 className={styles.title}>1 ПЕРЕСАДКА</h6>
                    <p>HKG</p>
                </div>
            </div>
        </div>
    )
}

export default Ticket;