import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import logo from '../../assets/images/logo-header.svg';

class Header extends React.Component {
  render() {
    const { onPageChange } = this.props;

    return (
      <AppBar position="static" elevation={4}>
        <Toolbar classes={{ root: 'header' }}>
          <div className="header__logo">
            <img src={logo} alt='LoftTaxi logo'/>
          </div>
          <Button classes={{ label: 'header__button header__button_active' }} color="inherit" onClick={() => onPageChange('map')}>Карта</Button>
          <Button classes={{ label: 'header__button' }} color="inherit" onClick={() => onPageChange('profile')}>Профиль</Button>
          <Button classes={{ label: 'header__button' }} color="inherit">Выйти</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;