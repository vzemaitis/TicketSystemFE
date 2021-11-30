import "bootstrap/dist/css/bootstrap.min.css";

function SideMenu() {
  return (
    <div 
      class="d-flex flex-column flex-shrink -0 p-3 bg-secondary"
      style={{ height: '100%', width: "280px" }}
    >
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <a href="#" class="nav-link link-light" aria-current="page">
            Home
          </a>
        </li>
        <li>
          <a href="#" class="nav-link link-light">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" class="nav-link link-light">
            Orders
          </a>
        </li>
        <li>
          <a href="#" class="nav-link link-light">
            Products
          </a>
        </li>
        <li>
          <a href="#" class="nav-link link-light">
            Customers
          </a>
        </li>
      </ul>
      <hr />
      <div class="dropdown">
        <a
          href="#"
          class="d-flex align-items-center link-light text-decoration-none dropdown-toggle"
          id="dropdownUser2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://www.pinclipart.com/picdir/middle/165-1653686_female-user-icon-png-download-user-colorful-icon.png"
            alt=""
            width="32"
            height="32"
            class="rounded-circle me-2"
          />
          <strong>User</strong>
        </a>
        <ul
          class="dropdown-menu text-small shadow"
          aria-labelledby="dropdownUser2"
        >
          <li>
            <a class="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;
