import React from 'react';

const Registration = () => {
  return (
    <>
      <h4>Регистрация</h4>
      <form action="/map">
        <label htmlFor="email">Адрес электронной почты<span>&thinsp;*</span></label>
        <input id="email" name="email" placeholder="Адрес электронной почты" required="" type="email" value="" size="28" />
        <label htmlFor="user-name">Имя<span>&thinsp;*</span></label>
        <input id="user-name" name="user-name" placeholder="Имя" required="" type="text" value="" size="28" />
        <label htmlFor="user-surname">Фамилия<span>&thinsp;*</span></label>
        <input id="user-surname" name="user-surname" placeholder="Фамилия" required="" type="text" value="" size="28" />
        <label htmlFor="password">Пароль<span>&thinsp;*</span></label>
        <input id="password" name="password" placeholder="Пароль" required="" type="password" value="" size="28" />
        <button type="submit">Зарегистрироваться</button>
      </form>
      <div>
        <p>
          Уже зарегистрирован?
          <button type="button" style="text-decoration: none; color: rgb(253, 191, 90);">Войти</button>
        </p>
      </div>
    </>
  );
};

export default Registration;