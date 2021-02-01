import React from 'react';
import Login from '../pages/login/login';
import Map from '../pages/map/map';
import Profile from '../pages/profile/profile';
import Registration from '../pages/registration/registration';

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
    this.setState({ currentPage });
  }

  render() {
    return this.PAGES[this.state.currentPage];
  }
}

export default App;