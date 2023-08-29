import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import SingleMission from './singleMissions';
import { fetchMissions } from '../../redux/Missions/missionsSlice';
import '../../styles/missions.css';

const MissionList = () => {
  const { missionsArr, status } = useSelector((store) => store.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'loading') {
      dispatch(fetchMissions());
    }
  });

  if (status === 'loading') {
    return (<p>Loading</p>);
  }
  if (status === 'fullfilled') {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>join</th>
          </tr>
        </thead>
        <tbody>
          {missionsArr.map((el) => (
            <SingleMission
              key={el.mission_id}
              name={el.mission_name}
              id={el.mission_id}
              description={el.description}
            />
          ))}
        </tbody>
      </Table>
    );
  }
  return (
    <p>Loading!</p>
  );
};

export default MissionList;
