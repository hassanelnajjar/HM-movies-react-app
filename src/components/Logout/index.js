import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

function Logout(props){
  const { handleLogout } = props;
  handleLogout();
  return <Redirect to='/' />
}


Logout.propTypes = {
	handleLogout: PropTypes.func.isRequired,
};
export default Logout;