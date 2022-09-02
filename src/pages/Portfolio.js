import { projects } from '../data/projects';

const PortFolio = () => {
  return ( 
    <main>
      <section className="portfolio container">
          { projects.map((project, index) => {
            return (
              <div className="image-container" key={index}>
                <picture className="image-container-img">
                  <source srcSet={project.imageDesktop} media="(min-width: 1024px)" />
                  <source srcSet={project.imageTablet} media="(min-width: 768px)" />
                  <img src={project.imageMobile} alt={project.name} />
                </picture>
                <div className="image-container-content">
                  <div className="image-container-content-text">
                    <h5 className="lil-title">{project.name}</h5>
                    <p className="text text-opacity">{project.date}</p>
                  </div>
                </div>
              </div>
            )
          })}
      </section>
    </main>

  );
}
 
export default PortFolio;