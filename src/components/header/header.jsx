import React from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../auth-context/auth-context';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import logo from '../../assets/images/logo-header.svg';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.onLogOut = this.onLogOut.bind(this);
  }

  onLogOut = () => {
    this.props.onPageChange('login');

    const { logOut } = this.context;
    logOut();
  }

  static contextType = AuthContext;

  render() {
    const { onPageChange } = this.props;

    return (
      <AppBar position="static" elevation={4}>
        <Toolbar classes={{ root: 'header' }}>
          <div className="header__logo">
            <img src={logo} alt="LoftTaxi logo"/>
          </div>
          <Button classes={{ root: 'header__button' }} type="button" color="primary" onClick={() => onPageChange('map')}>Карта</Button>
          <Button classes={{ root: 'header__button' }} type="button" color="inherit" onClick={() => onPageChange('profile')}>Профиль</Button>
          <Button classes={{ root: 'header__button' }} type="button" color="inherit" onClick={() => onPageChange('login')}>Войти</Button>
          <Button classes={{ root: 'header__button' }} type="button" color="inherit" onClick={() => this.onLogOut()}>Выйти</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  onPageChange: PropTypes.func.isRequired,
};

export default Header;