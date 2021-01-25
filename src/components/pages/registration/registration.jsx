import React from 'react';
import { Paper } from '@material-ui/core';
import logo from '../../../assets/images/logo-layout-bg.svg';

class Registration extends React.Component {
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
            <section>
              <h4>Регистрация</h4>
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="email">Адрес электронной почты</label>
                <input id="email" name="email" placeholder="Адрес электронной почты" required="" type="email" value="" size="28" />
                <label htmlFor="user-name">Имя</label>
                <input id="user-name" name="user-name" placeholder="Имя" required="" type="text" value="" size="28" />
                <label htmlFor="user-surname">Фамилия</label>
                <input id="user-surname" name="user-surname" placeholder="Фамилия" required="" type="text" value="" size="28" />
                <label htmlFor="password">Пароль</label>
                <input id="password" name="password" placeholder="Пароль" required="" type="password" value="" size="28" />
                <button type="submit" onClick={() => onPageChange('registration')}>Зарегистрироваться</button>
              </form>
              <div>
                <p>
                  Уже зарегистрирован?
                  <button
                    type="button"
                    style={{textDecoration: 'none', color: 'rgb(253, 191, 90)'}}
                    onClick={() => onPageChange('login')}
                  >
                    Войти
                  </button>
                </p>
              </div>
            </section>
          </Paper>
        </div>
      </div>
    )
  };
}

export default Registration;