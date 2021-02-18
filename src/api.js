import axios from 'axios';

export const serverLogin = async (email, password) => {
  return axios('https://loft-taxi.glitch.me/auth', {
    method: 'post',
    data: {
      email,
      password,
    },
  }).then(response => response.data);
};

export const serverRegister = async (email, firstName, surname, password) => {
  return axios('https://loft-taxi.glitch.me/register', {
    method: 'post',
    data: {
      email,
      password,
      name: firstName,
      surname,
    },
  }).then(response => response.data);
};

export const serverGetCard = async (token) => {
  return axios('https://loft-taxi.glitch.me/card', {
    params: {
      // token,
      token: 'AUTH_TOKEN',
    },
  }).then(response => response.data);
};

export const serverSaveCard = async (cvc, cardName, cardNumber, expiryDate, token) => {
  return axios('https://loft-taxi.glitch.me/card', {
    method: 'post',
    data: {
      cvc,
      cardName,
      cardNumber,
      expiryDate,
      // token,
      token: 'AUTH_TOKEN',
    },
  }).then(response => response.data);
};