import { Link } from 'react-router-dom';

import ParamourMobile from '../assets/home/mobile/image-hero-paramour.jpg'; 
import ParamourTablet from '../assets/home/tablet/image-hero-paramour.jpg'; 
import ParamourDesktop from '../assets/home/desktop/image-hero-paramour.jpg';
import SmTeamMobile from '../assets/home/mobile/image-small-team.jpg' ;
import SmTeamTablet from '../assets/home/tablet/image-small-team.jpg' ;
import SmTeamDesktop from '../assets/home/desktop/image-small-team.jpg'; 

const Home = () => {
  return ( 
    <main>
      <section className="home-hero">
        <div className="home-hero-content">
          <picture>
            <source srcSet={ParamourDesktop} media="(min-width: 1024px)" />
            <source srcSet={ParamourTablet} media="(min-width: 768px)" />
            <img src={ParamourMobile} alt="Project Paramour" />
          </picture>
          <div className="home-hero-content-text">
            <h1 className="big-title">Project&nbsp;Paramour</h1>
            <p className="text">
              Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.
            </p>
          </div>
          <Link to='/'>See Our Portfolio</Link>
        </div>
      </section>

      <section className="welcome">
        <div className="welcome-content">
          <h2 className="mid-title">Welcome to Arch Studio</h2>
          <div className="welcome-content-text">
            <p className="text">
              We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.
            </p>
            <p className="text">
              Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.
            </p>
            <p className="text">
              We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.
            </p>
          </div>
        </div>
      </section>

      <section className="infos">
        <div className="infos-content">
          <picture>
            <source srcSet={SmTeamDesktop} media="(min-width: 1024px)" />
            <source srcSet={SmTeamTablet} media="(min-width: 768px)" />
            <img src={SmTeamMobile} alt="Project Paramour" />
          </picture>
          <div className="infos-content-text">
            <h3 className="mid-title">Small team, big ideas</h3>
            <Link to='/'>About Us</Link>
          </div>
        </div>
      </section>

      <section className="featured">
        <h4 className="mid-title">Featured</h4>
        <div className="featured-content">
          <div className="image-container">
            {/* <img src={} alt="" /> */}
            <div className="image-container-content">
              <h5 className='lil-title'>Project Del Sol</h5>
              <p className="text text-opacity">View All Projects</p>
            </div>
          </div>
          <div className="image-container">
            {/* <img src={} alt="" /> */}
            <div className="image-container-content">
              <h5 className='lil-title'>228B Tower</h5>
              <p className="text text-opacity">View All Projects</p>
            </div>
          </div>
          <div className="image-container">
            {/* <img src={} alt="" /> */}
            <div className="image-container-content">
              <h5 className='lil-title'>Le Prototype</h5>
              <p className="text text-opacity">View All Projects</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
 
export default Home;