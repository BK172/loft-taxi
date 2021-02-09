import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getIsLoggedIn } from '../../store/reducers/auth/selectors';

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

PrivateRoute.propTypes = {
  Component: PropTypes.elementType,
  isLoggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ AUTH }) => ({
  isLoggedIn: getIsLoggedIn({ AUTH }),
});

export { PrivateRoute };
export default connect(mapStateToProps)(PrivateRoute);