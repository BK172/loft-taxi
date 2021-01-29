import React from 'react';
import { Paper, Button, Link, Typography, TextField } from '@material-ui/core';
import logo from '../../../assets/images/logo-layout-bg.svg';

class Login extends React.Component {
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onPageChange('map');
  };

  render() {
    const { onPageChange } = this.props;

    return (
      <div className="login-layout">
        <div className="login-layout__left">
          <img src={logo} alt="LoftTaxi logo" />
        </div>
        <div className="login-layout__right">
          <Paper className="login-layout__card" elevation={5}>
            <div className="form">
              <Typography className="form__title" component="h1" variant="h4">
                Войти
              </Typography>
              <form className="form__container" noValidate onSubmit={this.handleSubmit}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="login"
                  name="login"
                  label="Имя пользователя"
                  autoFocus
                  required
                />
                <TextField
                  margin="normal"
                  fullWidth
                  id="password"
                  name="password"
                  label="Пароль"
                  type="password"
                  required
                />
                <Button
                  className="btn form__submit-btn"
                  fullWidth
                  disableElevation
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                >
                  Войти
                </Button>
              </form>
              <Typography className="form__btns-container" variant="body1">
                <span>Новый пользователь?&nbsp;</span>
                <Link className="link link_active" onClick={() => onPageChange('registration')}>
                  Зарегистрируйтесь
                </Link>
              </Typography>
          </div>
          </Paper>
        </div>
      </div>
    );
  };
}

export default Login;