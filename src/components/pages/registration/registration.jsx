import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../../store/reducers/auth/actions';
import { Paper, Button, Typography, TextField } from '@material-ui/core';
import logo from '../../../assets/images/logo-layout-bg.svg';

class Registration extends React.Component {
  state = {
    email: '',
    firstName: '',
    surname: '',
    password: '',
    isFormValid: false,
  }

  componentDidUpdate(prevProps, prevState) {
    const { email, firstName, surname, password } = this.state;

    if (
      prevState.email !== email ||
      prevState.firstName !== firstName ||
      prevState.surname !== surname ||
      prevState.password !== password
    ) {
      if (email && firstName && surname && password) {
        this.setState({isFormValid: true});
      } else {
        this.setState({isFormValid: false});
      }
    }
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const { email, firstName, surname, password } = this.state;

    if (email && firstName && surname && password) {
      this.props.register(email, firstName, surname, password);
    }
  }

  handleInputChange = ({target}) => {
    const {name, value} = target;
    this.setState({[name]: value});
  }

  render() {
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
              <form className="form__container" onSubmit={this.handleSubmit}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="email"
                  name="email"
                  label="Адрес электронной почты"
                  autoFocus
                  required
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
                <div className="form__items-two-col">
                  <TextField
                    margin="normal"
                    fullWidth
                    id="firstName"
                    name="firstName"
                    label="Имя"
                    required
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                  />
                  <div className="form__items-divider"></div>
                  <TextField
                    margin="normal"
                    fullWidth
                    id="surname"
                    name="surname"
                    label="Фамилия"
                    required
                    value={this.state.surname}
                    onChange={this.handleInputChange}
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
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
                <Button
                  className="form__submit-btn"
                  disabled={!this.state.isFormValid}
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
              <Typography classes={{ root: 'form__footer' }} variant="body1">
                <span>Уже зарегистрирован? </span>
                <span className="form__items-divider"></span>
                <Link className="form__footer-link" to={'/'}>
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

Registration.propTypes = {
  register: PropTypes.func.isRequired,
};

const mapDispatchToProps = { register };

export { Registration };
export default connect(null, mapDispatchToProps)(Registration);