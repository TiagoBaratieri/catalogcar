import './styles.scss';
import 'bootstrap/js/src/collapse.js';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-warning fixed-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-primary">
          <h4>Carros Top</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="dscatalog-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="#navbarSupportedContent">
          <ul className="navbar-nav">
            <li>
              <NavLink to="/" activeClassName="active" exact>
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/catalog" activeClassName="active" exact>
                CATÁLOGO
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
