import styles from './Tickets.module.css';
import Ticket from './Ticket/Ticket'; 

const Tickets = ({tickets, filter}) => {

    // let firstWayTransfers = tickets[0].segments[0].stops.length; 
    // let secondWayTransfers = tickets[0].segments[1].stops.length; 


    const filteredTickets = () => {
            const result = tickets.filter((ticket) => {
                return (ticket.segments[0].stops.length === 0); 
            })
            console.log(result); 
            return result; 
    }

   

    const showTickets = (ticketArray) => {
        let result; 
        if(ticketArray.length >= 5) {
            result = ticketArray.slice(0, 5);
            console.log(result); 
        } else {
            result = ticketArray; 
        }
        return result; 
    } 

    if(filter === 'Без пересадок') {
        showTickets(filteredTickets); 
    }


    return (
        <div className={styles.tickets}>
            {tickets.slice(0,5).map((el, i) => { 
           return <Ticket key={i} {...el}/> })}  
        </div>
    )
}

export default Tickets; 
