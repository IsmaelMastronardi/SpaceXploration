import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, toggleReservation } from '../../redux/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();

  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch, rockets]);

  return (
    <div>
      {rockets.map((rocket) => (
        <div key={rocket.id}>
          <h2>{rocket.name}</h2>
          {rocket.reserved && <span className="badge-reserved">Reserved</span>}
          <p>{rocket.description}</p>
          <img src={rocket.flickr_images[0]} alt={rocket.name} />
          <button type="button" onClick={() => dispatch(toggleReservation(rocket.id))}>
            {rocket.reserved ? 'Cancel Reservation' : 'Reserve'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
