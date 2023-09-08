import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, toggleReservation } from '../../redux/rockets/rocketsSlice';
import './rockets.css';

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
        <ul className="container d-flex flex-column mx-auto" key={rocket.id}>
          <li className="flex-sm-row d-flex flex-column shadow p-3 mb-5 bg-body-tertiary rounded align-items-center gap-3 mb-4">
            <img className="img-fluid img-thumbnail" src={rocket.flickr_images[0]} alt={rocket.name} />
            <div className="flex fle-col gap-3">
              <h2>{rocket.name}</h2>
              <p>
                {rocket.reserved && <span className="text-center fs-6 px-1 bg-success me-1 text-white rounded-pill">Reserved</span>}
                {rocket.description}
              </p>
              <button className="btn btn-primary" type="button" onClick={() => dispatch(toggleReservation(rocket.id))}>
                {rocket.reserved ? 'Cancel Reservation' : 'Reserve'}
              </button>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Rockets;
