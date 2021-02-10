import axios from 'axios';

export const serverLogin = async (email, password) => {
  return axios('https://loft-taxi.glitch.me/auth', {
    params: {
      username: email,
      password,
    },
  }).then(response => response.data.success);
};

export const serverRegister = async (email, password, userName, userSurname) => {
  return axios('https://loft-taxi.glitch.me/auth', {
    method: 'post',
    params: {
      email,
      password,
      name: userName,
      surname: userSurname,
    },
  }).then(response => response.data.success);
};

export const addCard = async (expiryDate, cardNumber, cardName, token, cvc) => {
  return axios('https://loft-taxi.glitch.me/cart', {
    method: 'post',
    params: {
      expiryDate,
      cardNumber,
      cardName,
      token,
      cvc,
    },
  }).then(response => response.data.success);
};