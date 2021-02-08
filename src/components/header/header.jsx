import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logOut } from '../../store/reducers/auth/actions';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import logo from '../../assets/images/logo-header.svg';

const Header = ({ logOut, onPageChange }) => {
  const onLogOut = () => {
    onPageChange('login');
    logOut();
  };

  return (
    <AppBar position="static" elevation={4}>
      <Toolbar classes={{ root: 'header' }}>
        <div className="header__logo">
          <img src={logo} alt="LoftTaxi logo"/>
        </div>
        <Button classes={{ root: 'header__button' }} type="button" color="primary" onClick={() => onPageChange('map')}>Карта</Button>
        <Button classes={{ root: 'header__button' }} type="button" color="inherit" onClick={() => onPageChange('profile')}>Профиль</Button>
        <Button classes={{ root: 'header__button' }} type="button" color="inherit" onClick={() => onPageChange('login')}>Войти</Button>
      <Button classes={{ root: 'header__button' }} type="button" color="inherit" onClick={() => onLogOut()}>Выйти</Button>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  onPageChange: PropTypes.func.isRequired,
};

const mapDispatchToProps = { logOut };

export { Header };
export default connect(null, mapDispatchToProps)(Header);