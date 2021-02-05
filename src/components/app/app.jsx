import React from 'react';
import Login from '../pages/login/login';
import Map from '../pages/map/map';
import Profile from '../pages/profile/profile';
import Registration from '../pages/registration/registration';
import { AuthContext } from '../auth-context/auth-context';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.PAGES = {
      login: (props) => <Login {...props} />,
      map: (props) => <Map {...props} />,
      profile: (props) => <Profile {...props} />,
      registration: (props) => <Registration {...props} />,
    };

    this.state = { currentPage: 'login' };

    this.navigateTo = this.navigateTo.bind(this);
  }

  navigateTo = currentPage => {
    const { isLoggedIn } = this.context;

    if (!isLoggedIn && currentPage !== 'registration') {
      this.setState({ currentPage: 'login' });
    } else {
      this.setState({ currentPage });
    }
  }

  static contextType = AuthContext;

  render() {
    return this.PAGES[this.state.currentPage]({ onPageChange: this.navigateTo });
  }
}

export default App;