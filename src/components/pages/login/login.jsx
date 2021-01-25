import React from 'react';
import { Paper } from '@material-ui/core';
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
            <section>
              <h4>Войти</h4>
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="email">Имя пользователя</label>
                <input id="email" name="email" placeholder="Имя пользователя" required="" type="email" value="" size="28" />
                <label htmlFor="password">Пароль</label>
                <input id="password" name="password" placeholder="Пароль" required="" type="password" value="" size="28" />
                <button type="submit">Войти</button>
              </form>
              <div>
                <p>
                  Новый пользователь? 
                  <button
                    type="button"
                    style={{textDecoration: 'none', color: 'rgb(253, 191, 90)'}}
                    onClick={() => onPageChange('registration')}
                  >
                    Зарегистрируйтесь
                  </button>
                </p>
              </div>
            </section>
          </Paper>
        </div>
		  </div>
    );
  };
}

export default Login;