import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import AllTickets from './components/Layout/pages/Alltickets';
import NewTickets from './components/Layout/pages/NewTickets';
import UserAccess from './components/Layout/pages/UserAccess';
import Reporting from './components/Layout/pages/Reporting';
import NavigationBar from './components/Layout/navigation-bar/MainNavigationBar';
import Tools from './components/Layout/pages/Tools';


function App() {
  return (
    <NavigationBar>
        <Routes>
          <Route path="/" exact element={<AllTickets />} />
          <Route path="/new-ticket" element={<NewTickets />} />
          <Route path="/user-access" element={<UserAccess />} />
          <Route path="/reporting" element={<Reporting />} />
          <Route path="/tools" element={<Tools />} />
        </Routes>
      </NavigationBar>
  );
}

export default App;
