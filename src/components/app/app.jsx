import React from 'react';
import Login from '../pages/login/login';
import Map from '../pages/map/map';
import Profile from '../pages/profile/profile';
import Registration from '../pages/registration/registration';
import { AuthContext } from '../auth-context/auth-context';

const App = () => {
  const [currentPage, setCurrentPage] = React.useState('login');
  const { isLoggedIn } = React.useContext(AuthContext);

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

export default App;