import React from 'react';
import { connect } from 'react-redux';
import Login from '../pages/login/login';
import Map from '../pages/map/map';
import Profile from '../pages/profile/profile';
import Registration from '../pages/registration/registration';
import { getIsLoggedIn } from '../../store/reducers/auth/selectors';

const App = ({ isLoggedIn }) => {
  const [currentPage, setCurrentPage] = React.useState('login');

  const PAGES = {
    login: (props) => <Login {...props} />,
    map: (props) => <Map {...props} />,
    profile: (props) => <Profile {...props} />,
    registration: (props) => <Registration {...props} />,
  };

  const navigateTo = currentPage => {
    if (!isLoggedIn && currentPage !== 'registration') {
      setCurrentPage('login');
    } else {
      setCurrentPage(currentPage);
    }
  };

  return PAGES[currentPage]({ onPageChange: navigateTo });
};

const mapStateToProps = ({ AUTH }) => ({
  isLoggedIn: getIsLoggedIn({ AUTH }),
});

export { App };
export default connect(mapStateToProps)(App);