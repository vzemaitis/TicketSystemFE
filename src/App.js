import { Routes, Route } from 'react-router-dom';

import AllTickets from './components/pages/Alltickets';
import NewTickets from './components/pages/NewTickets';
import UserAccess from './components/pages/UserAccess';
import Reporting from './components/pages/Reporting';


function App() {
  return (
        <Routes>
          <Route path="/" exact element={<AllTickets />} />
          <Route path="/new-ticket" element={<NewTickets />} />
          <Route path="/user-access" element={<UserAccess />} />
          <Route path="/user-access" element={<Reporting />} />
        </Routes>
  );
}

export default App;
