import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const SingleMission = ({ obj }) => {
  let membership = '';
  if (obj.reserved === undefined || obj.reserved === false) {
    membership = <span className="notMemberSpan">NOT A MEMBER</span>;
  } else {
    membership = <span className="isMemberSpan">Active Member</span>;
  }
  return (
    <tr>
      <td>{obj.mission_name}</td>
      <td>{obj.description}</td>
      <td>{membership}</td>
      <td>
        <Button variant="outline-secondary">Join Mission</Button>
      </td>
    </tr>
  );
};

SingleMission.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  obj: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SingleMission;
