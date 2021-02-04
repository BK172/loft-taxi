import React from 'react';
import LoginWithAuth from '../pages/login/login';
import Map from '../pages/map/map';
import ProfileWithAuth from '../pages/profile/profile';
import RegistrationWithAuth from '../pages/registration/registration';
import { withAuth } from '../auth-context/auth-context';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.PAGES = {
      login: (props) => <LoginWithAuth {...props} />,
      map: (props) => <Map {...props} />,
      profile: (props) => <ProfileWithAuth {...props} />,
      registration: (props) => <RegistrationWithAuth {...props} />,
    };

    this.state = { currentPage: 'login' };

    this.navigateTo = this.navigateTo.bind(this);
  }

  navigateTo = currentPage => {
    if (this.props.isLoggedIn) {
      this.setState({ currentPage });
    } else {
      this.setState({ currentPage: 'login' });
    }
  }

  render() {
    return this.PAGES[this.state.currentPage];
  }
}

export default withAuth(App);