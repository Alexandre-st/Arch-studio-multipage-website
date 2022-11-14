import { Link } from "react-router-dom";

import MHero from "../assets/about/mobile/image-hero.jpg";
import THero from "../assets/about/tablet/image-hero.jpg";
import DHero from "../assets/about/desktop/image-hero.jpg";
// import Jake from '../assets/about/desktop/avatar-jake.jpg';
// import Thompson from '../assets/about/desktop/avatar-thompson.jpg';
// import Jackson from '../assets/about/desktop/avatar-jackson.jpg';
// import Maria from '../assets/about/desktop/avatar-maria.jpg';
import Linkedin from "../assets/icons/icon-linkedin.svg";
import Twitter from "../assets/icons/icon-twitter.svg";
import Heritage from "../assets/about/desktop/image-heritage.jpg";
import { leaders } from "../data/leaders";

const About = () => {
  return (
    <main>
      <section className="about-hero">
        <div className="container-img">
          <div className="about-hero-content">
            <div className="about-hero-content-img">
              <picture>
                <source srcSet={DHero} media="(min-width: 1024px)" />
                <source srcSet={THero} media="(min-width: 768px)" />
                <img src={MHero} alt="Professional working on his device" />
              </picture>
            </div>
            <div className="rectangle" />
            <div className="about-hero-content-infos">
              <div className="about-hero-content-infos-background">
                <span className="big-word about-hero-word">About</span>
                <div className="about-hero-content-infos-text">
                  <div className="lil-border hero-border" />
                  <h1 className="mid-title">Your team of professionals</h1>
                  <p className="text text-grey">
                    Our small team of world-class professionals will work with
                    you every step of the way. Strong relationships are at the
                    core of everything we do. This extends to the relationship
                    our projects have with their surroundings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="heritage container">
          <div className="right-content">
            <div className="lil-border heritage-border" />
            <div className="heritage-content">
              <h2 className="mid-title">
                Our
                <br />
                Heritage
              </h2>
              <p className="text text-grey">
                Founded in 2007, we started as a trio of architects. Our
                complimentary skills and relentless attention to detail turned
                Arch into one of the most sought after boutique firms in the
                country.
                <br />
                <br />
                Speciliazing in Urban Design allowed us to focus on creating
                exceptional structures that live in harmony with their
                surroundings. We consider every detail from every surrounding
                element to inform our designs.
                <br />
                <br />
                Our small team of world-class professionals provides input on
                every project.
              </p>
            </div>
          </div>
          <div className="left-content">
            <img
              className="heritage-img"
              src={Heritage}
              alt="Heritage building"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="leaders container">
          <h3 className="mid-title">
            The
            <br />
            Leaders
          </h3>
          <div className="leaders-container">
            {leaders.map((leader, index) => {
              return (
                <div className="leaders-content" key={index}>
                  <img
                    className="leaders-content-img"
                    src={leader.image}
                    alt={leader.name}
                  />
                  <div className="leaders-content-text">
                    <h5 className="lil-title">{leader.name}</h5>
                    <p className="text text-grey">{leader.job}</p>
                  </div>
                  <div className="leaders-link">
                    <Link className="leaders-link--link" to={leader.linkedin}>
                      <img src={Linkedin} alt="Linkedin link" />
                    </Link>
                    <Link className="leaders-link--link" to={leader.t}>
                      <img src={Twitter} alt="Twitter link" />
                    </Link>
                  </div>
                </div>
              );
            })}
            {/* <div className="leaders-content">
              <img className="leaders-content-img" src={Thompson} alt="Thompson Smith" />
              <div className="leaders-content-text">
                <h5 className="lil-title">Thompson Smith</h5>
                <p className="text text-grey">Head of Finance</p>
              </div>
            </div>
            <div className="leaders-content">
              <img className="leaders-content-img" src={Jackson} alt="Jackson Rourke" />
              <div className="leaders-content-text">
                <h5 className="lil-title">Jackson Rourke</h5>
                <p className="text text-grey">Lead Designer</p>
              </div>
            </div>
            <div className="leaders-content">
              <img className="leaders-content-img" src={Maria} alt="Maria Simpson" />
              <div className="leaders-content-text">
                <h5 className="lil-title">Maria Simpson</h5>
                <p className="text text-grey">Senior Architect</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
