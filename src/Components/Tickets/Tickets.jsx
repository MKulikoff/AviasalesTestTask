import styles from './Tickets.module.css';
import Ticket from './Ticket/Ticket'; 

const Tickets = (ticket) => {
    return (
        <div className={styles.tickets}>
            {ticket.tickets.slice(0,5).map((el, i) => {
           return <Ticket key={i} {...el}/> })}  
        </div>
    )
}

export default Tickets; 
