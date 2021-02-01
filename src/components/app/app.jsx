import React from 'react';
import Login from '../pages/login/login';
import Map from '../pages/map/map';
import Profile from '../pages/profile/profile';
import Registration from '../pages/registration/registration';

class App extends React.Component {
  state = { currentPage: 'login' };

  PAGES = {
    login: <Login onPageChange={this.navigateTo} />,
    map: <Map onPageChange={this.navigateTo} />,
    profile: <Profile onPageChange={this.navigateTo} />,
    registration: <Registration onPageChange={this.navigateTo} />,
  };

  navigateTo = (currentPage) => {
    this.setState({ currentPage });
  };

  render() {
    return PAGES[this.state.currentPage];
  };
}

export default App;