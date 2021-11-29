import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
  <header>
  <div><h1>All Tickets</h1></div>
  <nav>
      <ul>
          <li>
              <Link to='/'>All Tickets</Link>
          </li>
          <li>
              <Link to='/new-ticket'>New meetup</Link>
          </li>
          <li>
              <Link to='/user-access'>Favorites</Link>
          </li>
          <li>
              <Link to='/reporting'>Favorites</Link>
          </li>
      </ul>
  </nav>
</header>
)}

export default NavigationBar;
