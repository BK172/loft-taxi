import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from '../../store/reducers/auth/actions';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import logo from '../../assets/images/logo-header.svg';

const Header = ({ logOut }) => {
  return (
    <AppBar position="static" elevation={4}>
      <Toolbar classes={{ root: 'header' }}>
        <div className="header__logo">
          <img src={logo} alt="LoftTaxi logo"/>
        </div>
        <Button
          classes={{ root: 'header__button' }}
          type="button"
          color="inherit"
        >
          <NavLink to={'/map'} activeClassName="header__link_active">
            Карта
          </NavLink>
        </Button>
        <Button
          classes={{ root: 'header__button' }}
          type="button"
          color="inherit"
        >
          <NavLink to={'/profile'} activeClassName="header__link_active">
            Профиль
          </NavLink>
        </Button>
        <Button
          classes={{ root: 'header__button' }}
          type="button"
          color="inherit"
          onClick={() => logOut()}
        >
          Выйти
        </Button>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  logOut: PropTypes.func.isRequired,
};

const mapDispatchToProps = { logOut };

export { Header };
export default connect(null, mapDispatchToProps)(Header);