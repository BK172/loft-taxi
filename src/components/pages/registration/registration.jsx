import React from 'react';
import { Paper, Button, Link, Typography, TextField } from '@material-ui/core';
import logo from '../../../assets/images/logo-layout-bg.svg';

class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onPageChange('map');
  }

  render() {
    const { onPageChange } = this.props;

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
              <form className="form__container" noValidate onSubmit={this.handleSubmit}>
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
                  classes={{ root: 'form__submit-btn' }}
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
                <Link onClick={() => onPageChange('login')}>
                  Войти
                </Link>
              </Typography>
          </div>
          </Paper>
        </div>
      </div>
    );
  }
}

export default Registration;