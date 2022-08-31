import ArcLogo from '../assets/logo.svg';
import Arrow from '../assets/icons/icon-arrow.svg';

const Footer = () => {
  return ( 
    <footer className="footer">
      <div className="footer-container container-img">
        <div className="footer-content">
          <div className="footer-img">
            <img src={ArcLogo} alt="Arc" />
          </div>
          <ul className="footer-list">
            <li>Portfolio</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-button button" role="button">
          <p>See Our Portfolio</p>
          <img src={Arrow} alt="Arrow link" />
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;