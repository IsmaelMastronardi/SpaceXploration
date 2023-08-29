import PropTypes from 'prop-types';
import { Badge, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { memberStatus } from '../../redux/Missions/missionsSlice';

const SingleMission = ({ obj }) => {
  const dispatch = useDispatch();
  let membership = '';
  let joinButton = '';
  let buttonVariant = '';
  let missionBadge = '';
  if (obj.reserved === undefined || obj.reserved === false) {
    membership = <span className="notMemberSpan">NOT A MEMBER</span>;
    joinButton = 'Join Mission !';
    buttonVariant = 'outline-secondary';
    missionBadge = 'secondary';
  } else {
    membership = <span className="isMemberSpan">Active Member</span>;
    joinButton = 'Leave Mission';
    buttonVariant = 'outline-danger';
    missionBadge = 'info';
  }
  return (
    <tr>
      <td>{obj.mission_name}</td>
      <td>{obj.description}</td>
      <td className="align-middle"><Badge bg={missionBadge} className="whiteColor">{membership}</Badge></td>
      <td className="align-middle">
        <Button
          variant={buttonVariant}
          onClick={() => dispatch(memberStatus(obj.mission_id))}
        >
          {joinButton}
        </Button>
      </td>
    </tr>
  );
};

SingleMission.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  obj: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SingleMission;
