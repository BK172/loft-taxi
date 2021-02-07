import React from 'react';
import { connect } from 'react-redux';
import Login from '../pages/login/login';
import Map from '../pages/map/map';
import Profile from '../pages/profile/profile';
import Registration from '../pages/registration/registration';

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
    const { isLoggedIn } = this.props;

    if (!isLoggedIn && currentPage !== 'registration') {
      this.setState({ currentPage: 'login' });
    } else {
      this.setState({ currentPage });
    }
  }

  render() {
    return this.PAGES[this.state.currentPage]({ onPageChange: this.navigateTo });
  }
}

const mapStateToProps = ({ AUTH }) => ({
  isLoggedIn: AUTH.isLoggedIn,
});

export { App };
export default connect(mapStateToProps)(App);