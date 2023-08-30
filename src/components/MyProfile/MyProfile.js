// MyProfile.js
import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const reservedRockets = useSelector((state) => state.rockets.filter((rocket) => rocket.reserved));
  const { missionsArr } = useSelector((store) => store.missions);
  const filterMission = missionsArr.filter((el) => el.reserved);
  return (
    <div>
      <h1>My Profile</h1>
      <h2>Reserved Rockets :</h2>
      <ul>
        {reservedRockets.map((rocket) => (
          <li key={rocket.id}>
            <h3>{rocket.name}</h3>
            <img src={rocket.flickr_images[0]} alt={rocket.name} width="100" />
          </li>
        ))}
      </ul>
      <h2>Reserved Missions :</h2>
      <ul>
        { filterMission.length === 0 ? (<p className="noMissions">No Misions Joined</p>) : (
          <ul>
            {filterMission.map((mission) => (
              <li key={mission.mission_id}>
                <h3>{mission.mission_name}</h3>
              </li>
            ))}
          </ul>
        ) }
      </ul>
    </div>
  );
};

export default MyProfile;
