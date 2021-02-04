import React from 'react';
import { withAuth } from '../../auth-context/auth-context';
import { Paper, Button, Link, Typography, TextField } from '@material-ui/core';
import logo from '../../../assets/images/logo-layout-bg.svg';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const { login, password } = evt.target;

    this.props.logIn(login.value, password.value);
  }

  render() {
    const { onPageChange, isLoggedIn } = this.props;

    if (isLoggedIn) {
      onPageChange('profile');
    }

    return (
      <div className="login-layout">
        <div className="login-layout__left">
          <img src={logo} alt="LoftTaxi logo" />
        </div>
        <div className="login-layout__right">
          <Paper classes={{ root: 'login-layout__card' }} elevation={5}>
            <div className="form__wrapper">
              <Typography component="h1" variant="h4">
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
                  classes={{ root: 'form__submit-btn' }}
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
              <Typography classes={{ root: 'form__btns-container' }} variant="body1">
                <span>Новый пользователь?&nbsp;</span>
                <Link onClick={() => onPageChange('registration')}>
                  Зарегистрируйтесь
                </Link>
              </Typography>
          </div>
          </Paper>
        </div>
      </div>
    );
  }
}

export default Login;

export const LoginWithAuth = withAuth(Login);