import { HashLink } from 'react-router-hash-link';
import Map from '../components/Map';
import ContactForm from '../components/ContactForm';

import MHero from '../assets/contact/mobile/image-hero.jpg';
import THero from '../assets/contact/tablet/image-hero.jpg';
import DHero from '../assets/contact/desktop/image-hero.jpg';
import Arrow from '../assets/icons/icon-arrow.svg';

const Contact = () => {
  return (
    <main>
      <section className="contact-hero">
        <div className="container-img">
          <div className="contact-hero-content">
            <div className="contact-hero-content-img">
              <picture>
                <source srcSet={DHero} media='(min-width: 1024px)' />
                <source srcSet={THero} media='(min-width: 768px)' />
                <img src={MHero} alt="Professional working on his device" />
              </picture>
            </div>
            <div className="rectangle" />
            <div className="contact-hero-content-infos">
              <div className="contact-hero-content-infos-background">
                <span className="big-word contact-hero-word">Contact</span>
                <div className="contact-hero-content-infos-text">
                  <div className="lil-border hero-border" />
                  <h1 className="mid-title">Tell us about your project</h1>
                  <p className="text text-grey">
                    We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details section */}
      <section className="details">
        <div className="container">
          <h2 className="mid-title">Contact<br />Details</h2>
          <div className="details-content">
            <div className="details-content-text">
              <div className="details-content-text-infos">
                <h4 className="details-content-text-infos-title text-grey small-title">Main Office</h4>
                <p className="text text-grey">Mail : archone@mail.com</p>
                <p className="text text-grey">Adress : 1892  Chenoweth Drive TN</p>
                <p className="text text-grey">Phone : 123-456-3451</p>
              </div>
              <HashLink className="details-content-text-button" smooth to='/contact/#map'>
                <p className="text">View on Map</p>
                <img src={Arrow} alt="Arrow" />
              </HashLink>
            </div>
            <div className="details-content-text">
              <div className="details-content-text-infos">
                <h4 className="details-content-text-infos-title text-grey small-title">Office II</h4>
                <p className="text text-grey">Mail : archtwo@mail.com</p>
                <p className="text text-grey">Adress : 3399  Wines Lane TX</p>
                <p className="text text-grey">Phone : 832-123-4321</p>
              </div>
              <HashLink className="details-content-text-button" smooth to='/contact/#map'>
                <p className="text">View on Map</p>
                <img src={Arrow} alt="Arrow" />
              </HashLink>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map container-img">
        <Map />
      </section>

      {/* Contact Form section */}
      <section className="form container">
        <h3 className="mid-title">Connect with us</h3>
        <ContactForm />
      </section>
    </main>
  )
};

export default Contact;