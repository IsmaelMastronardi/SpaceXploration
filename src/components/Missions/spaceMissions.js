import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleMission from './singleMissions';
import { fetchMissions } from '../../redux/Missions/missionsSlice';

const MissionList = () => {
  const { missionsArr, status } = useSelector((store) => store.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'loading') {
      console.log(missionsArr);
      dispatch(fetchMissions());
    }
  });

  if (status === 'loading') {
    return (<p>Loading</p>);
  }
  if (status === 'fullfilled') {
    return (
      <>
        {missionsArr.map((el) => (
          <SingleMission
            key={el.mission_id}
            name={el.mission_name}
            id={el.mission_id}
            description={el.description}
          />
        ))}
      </>
    );
  }
  return (
    <p>Loading!</p>
  );
};

export default MissionList;
