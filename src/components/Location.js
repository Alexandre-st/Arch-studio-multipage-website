import { useLocation } from 'react-router-dom';

const Location = () => {
  const location = useLocation();
  // console.log(location.pathname);
  
  return (
    <div className='header-location'>
      <div className='header-location-border'></div>
      <p className='header-location-text'>
        {location.pathname === "/" ? 'dashborad' : location.pathname.slice(1)}
      </p>
    </div>
  );
}

export default Location;