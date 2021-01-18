import React from 'react';
import './App.css';

const PAGES = {
  home: <Home />,
  about: <About />,
  profile: <Profile />,
};

class App extends React.Component {
  state = { currentPage: 'home' };

  navigateTo = (currentPage) => {
    this.setState({ currentPage });
  };

  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <button
                  onClick={() => {
                    this.navigateTo('home');
                  }}
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    this.navigateTo('about');
                  }}
                >
                  About
                </button>
                <button
                  onClick={() => {
                    this.navigateTo('profile');
                  }}
                >
                  Profile
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section>
            {PAGES[this.state.currentPage]}
          </section>
        </main>
      </div>
    );
  }
}

export default App;