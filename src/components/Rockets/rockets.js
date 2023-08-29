import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../../redux/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  const rockets = useSelector((state) => state.rockets);

  return (
    <div>
      {rockets.map((rocket) => (
        <div key={rocket.id}>
          <h2>{rocket.rocket_name}</h2>
          <p>{rocket.description}</p>
          <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
        </div>
      ))}
    </div>
  );
};

export default Rockets;
