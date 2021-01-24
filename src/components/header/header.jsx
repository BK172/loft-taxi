import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

class Header extends React.Component {
  render() {
    const { onPageChange } = this.props;

    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            LoftTaxi
          </Typography>
            <Button color="inherit" onClick={() => onPageChange('login')}>Login</Button>
            <Button color="inherit" onClick={() => onPageChange('map')}>Map</Button>
            <Button color="inherit" onClick={() => onPageChange('profile')}>Profile</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;