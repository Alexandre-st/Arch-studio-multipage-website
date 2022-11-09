import { Link, NavLink } from 'react-router-dom';

import ArcLogo from '../assets/logo.svg';
import Location from '../components/Location';
import Menu from '../components/Menu';

const Header = () => {

  const activeStyle = { 
    fontWeight : 'bold',
    color: '#1B1D23'
  };

  return ( 
    <header className="header">
      <Location />
      <div className="header-container container">
        <Link to='/'>
          <img className="header-container-logo" src={ArcLogo} alt="Arc" />
        </Link>


        <nav className="header-nav">
          <ul className="header-nav-list">
            <li>
              <NavLink style={({ isActive }) => isActive ? activeStyle : undefined } to='/portfolio'>Portfolio</NavLink>
            </li>
            <li>
              <NavLink style={({ isActive }) => isActive ? activeStyle : undefined } to='/about'>About Us</NavLink>
            </li>
            <li>
              <NavLink style={({ isActive }) => isActive ? activeStyle : undefined } to='/contact'>Contact</NavLink>
            </li>
          </ul>
        </nav>

        <Menu />
      </div>
    </header>
  );
}
 
export default Header;