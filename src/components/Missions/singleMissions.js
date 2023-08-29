import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const SingleMission = ({ name, description }) => (
  <tr>
    <td>{name}</td>
    <td>{description}</td>
    <td>Not a member</td>
    <td>
      <Button variant="outline-secondary">Join Mission</Button>
    </td>
  </tr>
);

SingleMission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SingleMission;
