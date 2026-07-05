
import {Link} from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
        <nav className="navbar">
          <Link to= "/" className="navbar__logo">
            EasyShop Hotel
          </Link>

          <ul className="navbar__menu">
            <li>
              <Link to="/">Startseite</Link>
            </li>

            <li>
              <Link to="/products">Produkte</Link>
            </li>

            <li>
              <Link to="/cart">Warenkorb</Link>
            </li>
          </ul>
        </nav>
  );
}

export default NavBar;