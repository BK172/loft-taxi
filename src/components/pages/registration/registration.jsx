import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Button, Link, Typography, TextField } from '@material-ui/core';
import logo from '../../../assets/images/logo-layout-bg.svg';

const Registration = ({ onPageChange }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    onPageChange('map');
  };

  return (
    <div className="login-layout">
      <div className="login-layout__left">
        <img src={logo} alt="LoftTaxi logo" />
      </div>
      <div className="login-layout__right">
        <Paper classes={{ root: 'login-layout__card' }} elevation={5}>
          <div className="form__wrapper">
            <Typography component="h1" variant="h4">
              Регистрация
            </Typography>
            <form className="form__container" noValidate onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                fullWidth
                id="email"
                name="email"
                label="Адрес электронной почты"
                autoFocus
                required
              />
              <div className="form__items-two-col">
                <TextField
                  margin="normal"
                  fullWidth
                  id="name"
                  name="firstName"
                  label="Имя"
                  required
                />
                <div className="form__items-divider"></div>
                <TextField
                  margin="normal"
                  fullWidth
                  id="surName"
                  name="surName"
                  label="Фамилия"
                  required
                />
              </div>
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
                Зарегистрироваться
              </Button>
            </form>
            <Typography classes={{ root: 'form__btns-container' }} variant="body1">
              <span>Уже зарегистрирован? </span>
              <span className="form__items-divider"></span>
              <Link className="form__btn-footer" onClick={() => onPageChange('login')}>
                Войти
              </Link>
            </Typography>
        </div>
        </Paper>
      </div>
    </div>
  );
};

Registration.propTypes = {
  onPageChange: PropTypes.func.isRequired,
};

export default Registration;