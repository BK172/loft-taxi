import React from 'react';
import HeaderWithAuth from '../../header/header';

const Profile = ({ onPageChange, logOut }) => {
  return (
    <div className="wrapper">
      <HeaderWithAuth onPageChange={onPageChange} logOut={logOut} />
      <main className="main">
        <section>
          <p>Profile</p>
        </section>
      </main>
    </div>
  );
};

export default Profile;