import React from 'react';

const Login = () => {
  return (
    <>
      <h4>Войти</h4>
      <form action="/map">
        <label htmlFor="email">Имя пользователя</label>
        <input id="email" name="email" placeholder="Имя пользователя" required="" type="email" value="" size="28" />
        <label htmlFor="password">Пароль</label>
        <input id="password" name="password" placeholder="Пароль" required="" type="password" value="" size="28" />
        <button type="submit">Войти</button>
      </form>
      <div>
        <p>
          Новый пользователь? 
          <button type="button" style={{textDecoration: 'none', color: 'rgb(253, 191, 90)'}}>Зарегистрируйтесь</button>
        </p>
      </div>
    </>
  );
};

export default Login;