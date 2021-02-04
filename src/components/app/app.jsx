import React from 'react';
import LoginWithAuth from '../pages/login/login';
import Map from '../pages/map/map';
import Profile from '../pages/profile/profile';
import Registration from '../pages/registration/registration';
import { withAuth } from '../auth-context/auth-context';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.PAGES = {
      login: (props) => <LoginWithAuth {...props} {...this.props} />,
      map: (props) => <Map {...props} {...this.props} />,
      profile: (props) => <Profile {...props} {...this.props} />,
      registration: (props) => <Registration {...props} {...this.props} />,
    };

    this.state = { currentPage: 'login' };

    this.navigateTo = this.navigateTo.bind(this);
  }

  navigateTo = currentPage => {
    if (!this.props.isLoggedIn && currentPage !== 'registration') {
      this.setState({ currentPage: 'login' });
    } else {
      this.setState({ currentPage });
    }
  }

  render() {
    return this.PAGES[this.state.currentPage]({ onPageChange: this.navigateTo });
  }
}

export default withAuth(App);