import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { auth } from '../../../store/reducers/auth/actions';
import { getIsLoggedIn } from '../../../store/reducers/auth/selectors';
import { Paper, Button, Typography, TextField } from '@material-ui/core';
import logo from '../../../assets/images/logo-layout-bg.svg';

const Login = ({ isLoggedIn, auth }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const login = evt.target && evt.target.login ? evt.target.login : '';
    const password = evt.target && evt.target.password ? evt.target.password : '';

    auth(login.value, password.value);
  };

  if (isLoggedIn) {
    return <Redirect to={'/map'} />
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
            <form className="form__container" onSubmit={handleSubmit}>
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
                className="form__submit-btn"
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
            <Typography classes={{ root: 'form__footer' }} variant="body1">
              <span>Новый пользователь?&nbsp;</span>
              <Link className="form__footer-link" to={'/registration'}>
                Зарегистрируйтесь
              </Link>
            </Typography>
        </div>
        </Paper>
      </div>
    </div>
  );
};

Login.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  auth: PropTypes.func.isRequired,
};

const mapStateToProps = ({ AUTH }) => ({
  isLoggedIn: getIsLoggedIn({ AUTH }),
});

const mapDispatchToProps = { auth };

export { Login };
export default connect(mapStateToProps, mapDispatchToProps)(Login);