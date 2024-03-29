import { Link } from 'react-router-dom';

import Carousel from '../components/Carousel';
import WelcomeImg from '../assets/home/desktop/image-welcome.jpg';
import SmTeamMobile from '../assets/home/mobile/image-small-team.jpg' ;
import SmTeamTablet from '../assets/home/tablet/image-small-team.jpg' ;
import SmTeamDesktop from '../assets/home/desktop/image-small-team.jpg';
import DelSolMobile from '../assets/portfolio/mobile/image-del-sol.jpg';
import DelSolTablet from '../assets/portfolio/tablet/image-del-sol.jpg';
import DelSolDesktop from '../assets/portfolio/desktop/image-del-sol.jpg';
import TowerMobile from '../assets/portfolio/mobile/image-228b.jpg';
import TowerTablet from '../assets/portfolio/tablet/image-228b.jpg';
import TowerDesktop from '../assets/portfolio/desktop/image-228b.jpg';
import PrototypeMobile from '../assets/portfolio/mobile/image-prototype.jpg';
import PrototypeTablet from '../assets/portfolio/tablet/image-prototype.jpg';
import PrototypeDesktop from '../assets/portfolio/desktop/image-prototype.jpg';
import Arrow from '../assets/icons/icon-arrow.svg'; 

const Home = () => {
  return ( 
    <main>
      <section className="home-hero container-img">
        <Carousel />
      </section>

      <section className="welcome container">
        <div className="welcome-content">
          <div className="lil-border welcome-border" />
          <p className="big-word welcome-word">Welcome</p>
          <h2 className="mid-title">Welcome to Arch Studio</h2>
          <div className="welcome-content-text">
            <p className="text">
              We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.
              <br /><br />
              Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.
              <br /><br />
              We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.
            </p>
            <img className="welcome-content-text-img" src={WelcomeImg} alt="Bulding representation" />
          </div>
        </div>
      </section>

      <section className="infos container-img">
        <div className="infos-content">
          <picture className="infos-content-img">
            <source srcSet={SmTeamDesktop} media="(min-width: 1024px)" />
            <source srcSet={SmTeamTablet} media="(min-width: 768px)" />
            <img src={SmTeamMobile} alt="Project Paramour" />
          </picture>
          <div className="infos-content-text">
            <h3 className="mid-title">Small team,<br /> big ideas</h3>
            <Link className="infos-content-text-button button" to='/about'>
              <p>About Us</p>
              <img src={Arrow} alt="Arrow link" />
            </Link>
          </div>
        </div>
      </section>

      <section className="featured container">
        <div className="featured-title">
          <h4 className="mid-title">Featured</h4>
          <Link className="featured-button button" to='/portfolio'>
            <p>See All</p>
            <img src={Arrow} alt="Arrow link" />
          </Link>
        </div>
        <div className="featured-content">
          <div className="image-container">
            <picture className="image-container-img">
              <source srcSet={DelSolDesktop} media="(min-width: 1024px)" />
              <source srcSet={DelSolTablet} media="(min-width: 768px)" />
              <img src={DelSolMobile} alt="Project Del Sol" />
            </picture>
            <div className="image-container-content">
              <div className="image-container-content-text">
                <h5 className='lil-title'>Project Del Sol</h5>
                <p className="text text-opacity">View All Projects</p>
              </div>
            </div>
            <span className="big-number">1</span>
          </div>
          <div className="image-container">
            <picture className="image-container-img">
              <source srcSet={TowerDesktop} media="(min-width: 1024px)" />
              <source srcSet={TowerTablet} media="(min-width: 768px)" />
              <img src={TowerMobile} alt="228B Tower" />
            </picture>
            <div className="image-container-content">
              <div className="image-container-content-text">
                <h5 className='lil-title'>228B Tower</h5>
                <p className="text text-opacity">View All Projects</p>
              </div>
            </div>
            <span className="big-number">2</span>
          </div>
          <div className="image-container">
            <picture className="image-container-img">
              <source srcSet={PrototypeDesktop} media="(min-width: 1024px)" />
              <source srcSet={PrototypeTablet} media="(min-width: 768px)" />
              <img src={PrototypeMobile} alt="Le Prototype" />
            </picture>
            <div className="image-container-content">
              <div className="image-container-content-text">
                <h5 className='lil-title'>Le Prototype</h5>
                <p className="text text-opacity">View All Projects</p>
              </div>
            </div>
            <span className="big-number">3</span>
          </div>
        </div>
        <Link className="featured-button-bottom button" to='/portfolio'>
          <p>See All</p>
          <img src={Arrow} alt="Arrow link" />
        </Link>
      </section>
    </main>
  );
}
 
export default Home;