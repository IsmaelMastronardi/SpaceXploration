// MyProfile.js
import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const reservedRockets = useSelector((state) => state.rockets.filter((rocket) => rocket.reserved));

  return (
    <div>
      <h1>My Profile</h1>
      <h2>Reserved Rockets</h2>
      <ul>
        {reservedRockets.map((rocket) => (
          <li key={rocket.id}>
            <h3>{rocket.name}</h3>
            <img src={rocket.flickr_images[0]} alt={rocket.name} width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyProfile;
