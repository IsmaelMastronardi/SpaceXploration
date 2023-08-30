// MyProfile.js
import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { memberStatus } from '../../redux/Missions/missionsSlice';
import './MyProfile.css';

const MyProfile = () => {
  const reservedRockets = useSelector((state) => state.rockets.filter((rocket) => rocket.reserved));
  const { missionsArr } = useSelector((store) => store.missions);
  const filterMission = missionsArr.filter((el) => el.reserved);
  const dispatch = useDispatch();
  return (
    <div className="container d-flex flex-sm-row flex-column justify-content-evenly ">
      <div className="d-flex flex-column w-100 p-3">
        <h2 className="text-center text-sm-start">Reserved Missions</h2>
        <ul className="container-fluid d-flex flex-column justify-content-center ps-0 me-5 list-unstyled">
          {filterMission.map((mission) => (
            <li key={mission.mission_id} className="myProfileListItem border border-success p-2 border-opacity-25 align-items-center">
              <h3 className="myProfileMissionTitle mb-0 fs-5"><a href={mission.wikipedia} target="_blank" rel="noreferrer">{mission.mission_name}</a></h3>
              <Button
                variant="outline-danger"
                onClick={() => dispatch(memberStatus(mission.mission_id))}
                className="btn-max-heigth"
              >
                Leave Mission
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div className="d-flex flex-column w-100 p-3">
        <h2 className="text-center text-sm-start">Reserved Rockets</h2>
        <ul className="container-fluid d-flex flex-column justify-content-center ps-0 me-5 list-unstyled">
          {reservedRockets.map((rocket) => (
            <li className="border border-success p-2 border-opacity-25" key={rocket.id}>
              <h3 className="mb-0 fs-5">{rocket.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
