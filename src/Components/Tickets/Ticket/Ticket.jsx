import styles from './Ticket.module.css';

const Ticket = (props) => {

    //Set price 

    const getPrice = (price) => {
        let thousands = Math.floor(price / 1000); 
        let hundreds = (price - (thousands * 1000)); 
        if(hundreds < 100) {
            return `${thousands} 0${hundreds} Р`
        } else {
            return `${thousands} ${hundreds} Р`
        }
    }
    const price = getPrice(props.price)

    //Set transfers 

    const setTransfers = (transfer) => {
        if(transfer === 0) {
            return `${transfer} ПЕРЕСАДОК`
        } else if (transfer === 1) {
            return `${transfer} ПЕРЕСАДКА`
        } else {
            return `${transfer} ПЕРЕСАДКИ`
        }
    }

    const frwdTransfers = setTransfers(props.segments[0].stops.length); 
    const backTransfers = setTransfers(props.segments[1].stops.length);

    // Set stops 

    const setStops = (stops) => {
        if(stops.length === 0) {
            return `-`
        } else {
            let stopList = ''; 
            stops.forEach((stop, index) => {
                if(index !== stops.length - 1) {
                    stopList += `${stop}, `; 
                } else {
                    stopList += `${stop}`
                }
                
            })
            return stopList; 
        }
    }

    const frwdStops = setStops(props.segments[0].stops)
    const backStops = setStops(props.segments[1].stops)

    // Set Duration

    const setFlightTime = (time) => {
        let hours = Math.floor(time / 60); 
        let minutes =  time % 60; 
        if(minutes < 10) {
            minutes = `0${minutes}`; 
        }
        let setTime = `${hours}ч ${minutes}м`
        return setTime; 
    }

    const frwdFlightDuration = setFlightTime(props.segments[0].duration); 
    const backFlightDuration = setFlightTime(props.segments[1].duration);
   
    return (
        <div className={styles.card}>
            <div className={styles.price_logo}>
                <p>{price}</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/S7_new_logo.svg/345px-S7_new_logo.svg.png" alt="" />
            </div>
            <div className={styles.way_there}>
                <div className="destination_time">
                    <h6 className={styles.title}>{`${props.segments[0].origin} - ${props.segments[0].destination}`}</h6>
                    <p>12:00 - 15:00</p>
                </div>
                <div className={styles.onTheWay}>
                    <h6 className={styles.title}>В ПУТИ</h6>
                    <p>{frwdFlightDuration}</p>
                </div>
                <div className={styles.transfers}>
                    <h6 className={styles.title}>{frwdTransfers}</h6>
                    <p>{frwdStops}</p>
                </div>
            </div>
            <div className={styles.way_back}>
                <div className="destination_time">
                    <h6 className={styles.title}>{`${props.segments[1].origin} - ${props.segments[1].destination}`}</h6>
                    <p>12:00 - 15:00</p>
                </div>
                <div className="onTheWay">
                    <h6 className={styles.title}>В ПУТИ</h6>
                    <p>{backFlightDuration}</p>
                </div>
                <div className={styles.transfers}>
                    <h6 className={styles.title}>{backTransfers}</h6>
                    <p>{backStops}</p>
                </div>
            </div>
        </div>
    )
}

export default Ticket;