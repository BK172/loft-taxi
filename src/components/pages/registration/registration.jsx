import React from 'react';

const Registration = () => {
  return (
    <>
      <h4>Регистрация</h4>
      <form action="/map">
        <label htmlFor="email">Адрес электронной почты</label>
        <input id="email" name="email" placeholder="Адрес электронной почты" required="" type="email" value="" size="28" />
        <label htmlFor="user-name">Имя</label>
        <input id="user-name" name="user-name" placeholder="Имя" required="" type="text" value="" size="28" />
        <label htmlFor="user-surname">Фамилия</label>
        <input id="user-surname" name="user-surname" placeholder="Фамилия" required="" type="text" value="" size="28" />
        <label htmlFor="password">Пароль</label>
        <input id="password" name="password" placeholder="Пароль" required="" type="password" value="" size="28" />
        <button type="submit">Зарегистрироваться</button>
      </form>
      <div>
        <p>
          Уже зарегистрирован?
          <button type="button" style={{textDecoration: 'none', color: 'rgb(253, 191, 90)'}}>Войти</button>
        </p>
      </div>
    </>
  );
};

export default Registration;