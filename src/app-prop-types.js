import PropTypes from 'prop-types';

export const extend = (a, b) => Object.assign({}, a, b);

export const authContextDefaultProps = {
  logIn: () => {},
  logOut: () => {},
  isLoggedIn: false,
};

export const pageDefaultProps = extend(authContextDefaultProps, {
  onPageChange: () => {},
});

export const authContextProps = {
  logIn: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export const pageProps = extend(authContextProps, {
  onPageChange: PropTypes.func.isRequired,
});