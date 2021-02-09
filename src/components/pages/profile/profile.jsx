import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../header/header';

const Profile = ({ onPageChange }) => {
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
  onPageChange: ()=>{},
};

Profile.propTypes = {
  onPageChange: PropTypes.func.isRequired,
};

export default Profile;