import React from 'react';
import { withAuth } from '../auth-context/auth-context';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import logo from '../../assets/images/logo-header.svg';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.onLogOut = this.onLogOut.bind(this);
  }

  onLogOut() {
    this.props.logOut();
    this.props.onPageChange('login');
  }

  render() {
    const { onPageChange } = this.props;

    return (
      <AppBar position="static" elevation={4}>
        <Toolbar classes={{ root: 'header' }}>
          <div className="header__logo">
            <img src={logo} alt="LoftTaxi logo"/>
          </div>
          <Button type="button" color="primary" onClick={() => onPageChange('map')}>Карта</Button>
          <Button type="button" color="inherit" onClick={() => onPageChange('profile')}>Профиль</Button>
          <Button type="button" color="inherit" onClick={() => onPageChange('login')}>Войти</Button>
          <Button type="button" color="inherit" onClick={() => this.onLogOut()}>Выйти</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;

export const HeaderWithAuth = withAuth(Header);