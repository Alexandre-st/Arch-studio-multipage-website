import { Link } from 'react-router-dom';
import ArcLogo from '../assets/logo.svg';
import Arrow from '../assets/icons/icon-arrow.svg';

const Footer = () => {
  return ( 
    <footer className="footer">
      <div className="footer-container container-img">
        <div className="footer-content">
          <Link className="footer-img" to='/'>
            <img src={ArcLogo} alt="Arc" />
          </Link>
          <ul className="footer-list">
            <li><Link to='/portfolio'>Portfolio</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
        <div className="footer-button button" role="button">
          <Link to='/portfolio'>See Our Portfolio</Link>
          <img src={Arrow} alt="Arrow link" />
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;