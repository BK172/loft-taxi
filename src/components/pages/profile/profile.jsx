import React from 'react';
import Header from '../../header/header';

const Profile = () => {
  return (
    <div className="wrapper">
      <Header onPageChange={this.props.onPageChange} />
      <main className="main">
        <section>
          <p>Profile</p>
        </section>
      </main>
    </div>
  );
};

export default Profile;