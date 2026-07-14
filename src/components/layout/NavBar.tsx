import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="navbar__logo">
          EasyShop Hotel
        </Link>

        <ul className="navbar__menu">
          <li>
            <Link to="/" className="navbar__link">
              Startseite
            </Link>
          </li>

          <li>
            <Link to="/products" className="navbar__link">
              Produkte
            </Link>
          </li>

          <li>
            <Link to="/cart" className="navbar__link">
              Warenkorb
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
