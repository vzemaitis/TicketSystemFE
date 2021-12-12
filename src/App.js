import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';

import AllTickets from "./components/pages/Alltickets";
import NewTickets from "./components/pages/NewTickets";
import UserAccess from "./components/pages/UserAccess";
import Reporting from "./components/pages/Reporting";
import NavigationBar from "./components/Layout/navigation-bar/MainNavigationBar";
import Tools from "./components/pages/Tools";
import SideMenu from "./components/Layout/Sidemenu/Sidemenu";
import Notifications from "./components/pages/Notifications";

function App() {
  return (
    <div>
      <NavigationBar />
      <div className='row'>
      <Container className='col-2' ><SideMenu/></Container>
      <Container className='col-10' style={{ height: 'calc(100vh - 85px)', overflowY: 'scroll' }}>
        <Routes>
          <Route path="/" exact element={<AllTickets />} />
          <Route path="/new-ticket" element={<NewTickets />} />
          <Route path="/user-access" element={<UserAccess />} />
          <Route path="/reporting" element={<Reporting />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
        </Container>
        </div>
    </div>
  );
}

export default App;
