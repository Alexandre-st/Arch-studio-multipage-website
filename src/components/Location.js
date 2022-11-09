import { useLocation } from 'react-router-dom';

const Location = () => {
  const location = useLocation();
  // console.log(location.pathname);
  
  return (
    <div>
      <p>
        {location.pathname === "/" ? 'dashborad' : location.pathname.slice(1)}
      </p>
    </div>
  );
}

export default Location;