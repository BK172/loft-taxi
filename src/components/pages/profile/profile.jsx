import React from 'react';
import {pageDefaultProps, pageProps} from '../../../app-prop-types';
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

Profile.defaultProps = pageDefaultProps;
Profile.propTypes = pageProps;

export default Profile;