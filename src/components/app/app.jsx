import React from 'react';
import Login from '../pages/login/login';
import Map from '../pages/map/map';
import Profile from '../pages/profile/profile';
import Registration from '../pages/registration/registration';

class App extends React.Component {
  state = { currentPage: 'login' };

  navigateTo = (currentPage) => {
    this.setState({ currentPage });
  };

  getPage = (page) => {
    if (page === 'login') {
      return <Login onPageChange={this.navigateTo} />;
    } else if (page === 'map') {
      return <Map onPageChange={this.navigateTo} />;
    } else if (page === 'profile') {
      return <Profile onPageChange={this.navigateTo} />;
    } else if (page === 'registration') {
      return <Registration onPageChange={this.navigateTo} />;
    }
  };

  render() {
    return this.getPage(this.state.currentPage);
  }
}

export default App;