import './App.css';
import {useEffect} from 'react'; 
import Filters from './Components/Filters/Filters';
import Header from './Components/Header/Header';
import Sections from './Components/Sections/Sections';
import Ticket from './Components/Tickets/Ticket/Ticket';

function App() {

  useEffect(() => {
    getTicket()
  }, [])

  const getTicket = async () => {
    const res = await fetch('https://front-test.beta.aviasales.ru/search'); 
    const searchId = await res.json(); 
    const getTicket = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId.searchId}`); 
    const ticket = await getTicket.json(); 
    console.log(ticket);  
  }

  return (
    <div className="App">
     <div className="container">
       <Header />
       <div className="content">
         <Filters className="filters" title="КОЛИЧЕСТВО ПЕРЕСАДОК"/>
         <Sections className="sections" firstSection="САМЫЙ ДЕШЕВЫЙ" secondSection="САМЫЙ БЫСТРЫЙ"/>
         <Ticket className="tickets" />
       </div>
     </div>
    </div>
  );
}

export default App;
