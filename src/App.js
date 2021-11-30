import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AllTickets from "./components/pages/Alltickets";
import NewTickets from "./components/pages/NewTickets";
import UserAccess from "./components/pages/UserAccess";
import Reporting from "./components/pages/Reporting";
import NavigationBar from "./components/Layout/navigation-bar/MainNavigationBar";
import Tools from "./components/pages/Tools";
import SideMenu from "./components/Layout/Sidemenu/Sidemenu";

function App() {
  return (
    <div>
      <NavigationBar />
      <SideMenu />
        <Routes>
          <Route path="/" exact element={<AllTickets />} />
          <Route path="/new-ticket" element={<NewTickets />} />
          <Route path="/user-access" element={<UserAccess />} />
          <Route path="/reporting" element={<Reporting />} />
          <Route path="/tools" element={<Tools />} />
        </Routes>
    </div>
  );
}

export default App;
