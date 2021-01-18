import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

class Header extends React.Component {
  render() {
    const { changePage } = this.props;

    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            LoftTaxi
          </Typography>
            <Button color="inherit" onClick={() => changePage('login')}>Login</Button>
            <Button color="inherit" onClick={() => changePage('map')}>Map</Button>
            <Button color="inherit" onClick={() => changePage('profile')}>Profile</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;