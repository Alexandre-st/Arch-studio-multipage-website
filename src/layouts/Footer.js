import ArcLogo from '../assets/logo.svg';
import Arrow from '../assets/icons/icon-arrow.svg';

const Footer = () => {
  return ( 
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-img">
          <img src={ArcLogo} alt="Arc" />
        </div>
        <ul className="footer-content">
          <li>Portfolio</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
        <div className="footer-button button" role="button">
          <p>See Our Portfolio</p>
          <img src={Arrow} alt="Arrow link" />
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;