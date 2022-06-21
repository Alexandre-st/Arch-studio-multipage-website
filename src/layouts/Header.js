import { Link } from 'react-router-dom';

import ArcLogo from '../assets/logo.svg';
import Menu from '../components/Menu';

const Header = () => {
  return ( 
    <header>
      <div className="">
        <Link to='/'>
          <img src={ArcLogo} alt="Arc" />
        </Link>

        <nav className="header-nav">
          <ul className="header-nav-list">
            <li>Portfolio</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </nav>

        <Menu />
      </div>
    </header>
  );
}
 
export default Header;