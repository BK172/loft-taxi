import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
        <Link
          classes={{ root: 'header__button' }}
          activeClassName="header__button_active"
          type="button"
          color="inherit"
          to={'/map'}
        >
          Карта
        </Link>
        <Link
          classes={{ root: 'header__button' }}
          activeClassName="header__button_active"
          type="button"
          color="inherit"
          to={'/profile'}
        >
          Профиль
        </Link>
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