import React from 'react';
import Header from "./components/pages/header/header";
import Login from "./components/pages/login/login";
import Map from "./components/pages/map/map";
import Profile from "./components/pages/profile/profile";
import Registration from "./components/pages/registration/registration";
import './App.css';

const PAGES = {
  login: <Login />,
  map: <Map />,
  profile: <Profile />,
  registration: <Registration />,
};

class App extends React.Component {
  state = { currentPage: 'login' };

  navigateTo = (currentPage) => {
    this.setState({ currentPage });
  };

  render() {
    return (
      <>
        <Header changePage={this.navigateTo} />
        <main>
          <section>
            {PAGES[this.state.currentPage]}
          </section>
        </main>
      </>
    );
  }
}

export default App;