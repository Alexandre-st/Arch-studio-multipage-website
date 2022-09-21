import { useState } from 'react';
import { Link } from 'react-router-dom';

import HamburgerMenu from '../assets/icons/icon-hamburger.svg';
import CloseMenu from '../assets/icons/icon-close.svg';


const Menu = () => {
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu((prevMenu) => !prevMenu);
  }

  return ( 
    <div className="header-menu" onClick={openMenu}>
      { !menu && <img className="header-hamburger" src={HamburgerMenu} alt="Open the menu" /> }
      { menu && 
        <>
          <img className="header-close" src={CloseMenu} alt="Close the Menu" />
          <div className="nav">
            <nav className="nav-content">
              <ul className="nav-list">
                <li className="nav-list-link">
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li className="nav-list-link">
                  <Link to="/about">About Us</Link>
                </li>
                <li className="nav-list-link">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </>
      }
    </div>
  );
}
 
export default Menu;