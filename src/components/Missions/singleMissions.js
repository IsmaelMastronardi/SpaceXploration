import PropTypes from 'prop-types';

const SingleMission = ({ name, id, description }) => (
  <>
    <p>{name}</p>
    <p>{id}</p>
    <p>{description}</p>
  </>
);

SingleMission.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SingleMission;
