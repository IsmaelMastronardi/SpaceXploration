// rockets.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, bookRocket, cancelRocketBooking } from '../../redux/rockets/rocketsSlice';

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
          <h2>{rocket.name}</h2>
          {rocket.reserved && <p style={{ color: 'black' }}>Reserved</p>}
          {' '}
          {}
          <p>{rocket.description}</p>
          <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
          {
            rocket.reserved
              ? <button type="button" onClick={() => dispatch(cancelRocketBooking(rocket.id))}>Cancel Reservation</button>
              : <button type="button" onClick={() => dispatch(bookRocket(rocket.id))}>Reserved Rocket</button>
          }
        </div>
      ))}
    </div>
  );
};

export default Rockets;
