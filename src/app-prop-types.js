import PropTypes from 'prop-types';

export const authContextDefaultProps = {
  logIn: () => {},
  logOut: () => {},
  isLoggedIn: false,
};

export const authContextProps = {
  logIn: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};