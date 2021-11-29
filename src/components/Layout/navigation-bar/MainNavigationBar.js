import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Logo from "./NavBarLogo.png";

function NavigationBar() {

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div className="container-fluid">
          <a className="navbar-brand " href=''>
          <img className='img-fluid' src={Logo} alt="" width="100" height="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{scrollHeight: '100px'}}
            >
              <Link to="#" className="nav-item">
                <a className="nav-link" aria-current="page">AllTickets</a>
              </Link>
              <Link to="#" className="nav-item">
                <a className="nav-link">
                  New Ticket
                </a>
              </Link>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tools
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                <a className="dropdown-item" href='https://swaps.harbortouch.com/' target=''>Swap system</a>
                <a className="dropdown-item">Supplies</a>
                <hr className="dropdown-divider" />
                  <Link to="/tools">
                    <a className="dropdown-item">Set favorites</a>
                  </Link>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavigationBar;
