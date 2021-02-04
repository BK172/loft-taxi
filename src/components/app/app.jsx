import React from 'react';
import Login from '../pages/login/login';
import Map from '../pages/map/map';
import Profile from '../pages/profile/profile';
import Registration from '../pages/registration/registration';
import { withAuth } from '../auth-context/auth-context';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.PAGES = {
      login: <Login onPageChange={this.navigateTo} />,
      map: <Map onPageChange={this.navigateTo} />,
      profile: <Profile onPageChange={this.navigateTo} />,
      registration: <Registration onPageChange={this.navigateTo} />,
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