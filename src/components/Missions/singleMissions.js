import PropTypes from 'prop-types';

const SingleMission = ({ name, id, description }) => (
  <tr>
    <td>{name}</td>
    <td>{id}</td>
    <td>{description}</td>
  </tr>
);

SingleMission.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SingleMission;
