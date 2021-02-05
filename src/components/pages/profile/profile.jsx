import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../header/header';

const Profile = ({ onPageChange, logOut }) => {
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

Profile.defaultProps = {
  logOut: ()=>{},
  onPageChange: ()=>{},
};

Profile.propTypes = {
  logOut: PropTypes.func.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Profile;