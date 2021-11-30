import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Container } from "react-bootstrap";

import Logo from "./nav-main-logo.svg";

function NavigationBar() {
  return (
    <header>
      <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Container className="container-fluid">
          <img
            className="img-fluid image-decoration-none"
            src={Logo}
            alt=""
            width="150"
          />
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
          <Container className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ scrollHeight: "100px" }}
            >
              <Link to="/" className="nav-item" class="text-decoration-none">
                <a className="nav-link" aria-current="page">
                  All Tickets
                </a>
              </Link>
              <Link
                to="/new-ticket"
                className="nav-item"
                class="text-decoration-none"
              >
                <a className="nav-link">New Ticket</a>
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
                  <a
                    className="dropdown-item"
                    target="_blank"
                    href="https://swaps.harbortouch.com/"
                  >
                    Swap system
                  </a>
                  <a
                    className="dropdown-item"
                    target="_blank"
                    href="https://supplies.harbortouch.com/"
                  >
                    Supplies
                  </a>
                  <hr className="dropdown-divider" />
                  <Link to="/tools" className="text-decoration-none">
                    <a className="dropdown-item">Set favorites</a>
                  </Link>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Admin panel
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <Link to="/user-access" className="text-decoration-none">
                    <a className="dropdown-item">User Access</a>
                  </Link>
                  <hr className="dropdown-divider" />
                  <Link to="/reporting" className="text-decoration-none">
                    <a className="dropdown-item">Reporting</a>
                  </Link>
                </ul>
              </li>
            </ul>
          </Container>
        </Container>
      </Nav>
    </header>
  );
}

export default NavigationBar;
