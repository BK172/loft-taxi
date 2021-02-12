import axios from 'axios';

export const serverLogin = async (email, password) => {
  return axios('https://loft-taxi.glitch.me/auth', {
    params: {
      username: email,
      password,
    },
  }).then(response => response.data.success);
};

export const serverRegister = async (email, firstName, surname, password) => {
  return axios('https://loft-taxi.glitch.me/register', {
    method: 'post',
    params: {
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
      token,
    },
  }).then(response => response.data);
};

export const serverSaveCard = async (cvc, cardName, cardNumber, expiryDate, token) => {
  return axios('https://loft-taxi.glitch.me/card', {
    method: 'post',
    params: {
      cvc,
      cardName,
      cardNumber,
      expiryDate,
      token,
    },
  }).then(response => response.data.success);
};