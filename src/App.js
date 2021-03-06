import './App.css';
import { useEffect, useState } from 'react';
import Filters from './Components/Filters/Filters';
import Header from './Components/Header/Header';
import Sections from './Components/Sections/Sections';
import Tickets from './Components/Tickets/Tickets';

function App() {

  const [ticket, setTickets] = useState([]);
  const [filter, setFilters] = useState([]);

  // Get Tickets from server

  useEffect(() => {
    const getTicket = async () => {
      const res = await fetch('https://front-test.beta.aviasales.ru/search');
      const searchId = await res.json();
      const getTicket = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId.searchId}`);
      const tickets = await getTicket.json();
      setTickets(tickets.tickets);
    }
    getTicket();
  }, [])

  // Set filters 

  const setFilter = (f) => {
    setFilters(f);
  }

  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="content">
          <Filters className="filters" setFilter={setFilter} title="КОЛИЧЕСТВО ПЕРЕСАДОК" />
          <Sections className="sections" firstSection="САМЫЙ ДЕШЕВЫЙ" secondSection="САМЫЙ БЫСТРЫЙ" />
          <Tickets filter={filter} tickets={ticket} />
        </div>
      </div>
    </div>
  );
}

export default App;
