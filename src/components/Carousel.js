import { Link } from 'react-router-dom';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { slides } from '../data/slides';

import Arrow from '../assets/icons/icon-arrow.svg';

import 'swiper/css/effect-fade';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const Carousel = () => {

  // Function to have number for the pagination
  const pagination = {
    clickable: true,
    renderBullet: function(index, className) {
      return '<span class="' + className + '">0' + (index + 1) + "</span>";
    }
  };

  return (
    <div className="home-hero-content">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={pagination}
        effect='fade'
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
      {slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="home-hero-content-img">
              <picture className="home-hero-img">
                <source srcSet={slide.imageDesktop} media="(min-width: 1024px)" />
                <source srcSet={slide.imageTablet} media="(min-width: 768px)" />
                <img loading='lazy' src={slide.imageMobile} alt={slide.name} />
              </picture>
            </div>
            <div className="home-hero-content-text">
              <h1 className="home-hero-content-text-title big-title">{slide.firstName}<br />{slide.lastName}</h1>
              <p className="text">{slide.description}</p>
              <Link className="home-hero-content-button button" to='/portfolio'>
                <p>See Our Portfolio</p>
                <img src={Arrow} alt="Arrow link" />
              </Link>
            </div>
          </SwiperSlide>
        )
      })}
      </Swiper>
    </div>
  )
};

export default Carousel;