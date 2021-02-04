import React from 'react';
import Header from '../../header/header';
import withAuth from '../../auth-context/auth-context';

const Profile = ({onPageChange}) => {
  return (
    <div className="wrapper">
      <Header onPageChange={onPageChange} />
      <main className="main">
        <section>
          <p>Profile</p>
        </section>
      </main>
    </div>
  );
};

export default Profile;

export const ProfileWithAuth = withAuth(Profile);