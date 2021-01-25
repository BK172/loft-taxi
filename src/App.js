import React from 'react';
import Header from "./components/header/header";
import Login from "./components/pages/login/login";
import Map from "./components/pages/map/map";
import Profile from "./components/pages/profile/profile";
import Registration from "./components/pages/registration/registration";

class App extends React.Component {
  state = { currentPage: 'registration' };

  navigateTo = (currentPage) => {
    this.setState({ currentPage });
  };

  getPage = (page) => {
    if (page === 'login') {
      return <Login onPageChange={this.navigateTo} />;
    } else if (page === 'map') {
      return <Map />;
    } else if (page === 'profile') {
      return <Profile />;
    } else if (page === 'registration') {
      return <Registration onPageChange={this.navigateTo} />;
    }
  };

  render() {
    return (
      <div className="wrapper">
        <Header onPageChange={this.navigateTo} />
        <main className="main">
          <section>
            {this.getPage(this.state.currentPage)}
          </section>
        </main>
      </div>
    );
  }
}

export default App;