import React from 'react';

const Login = () => {
  return (
    <>
      <h4>Войти</h4>
      <form action="/map">
        <label htmlFor="email">Имя пользователя<span>&thinsp;*</span></label>
        <input id="email" name="email" placeholder="mail@mail.ru" required="" type="email" value="" size="28" />
        <label htmlFor="password">Пароль<span>&thinsp;*</span></label>
        <input id="password" name="password" placeholder="*********" required="" type="password" value="" size="28" />
        <button type="submit">Войти</button>
      </form>
      <div>
        <p>
          Новый пользователь? 
          <button type="button" style="text-decoration: none; color: rgb(253, 191, 90);">Зарегистрируйтесь</button>
        </p>
      </div>
    </>
  );
};

export default Login;