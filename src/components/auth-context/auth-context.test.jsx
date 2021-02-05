import React from 'react';
import { AuthProvider, AuthContext } from './auth-context';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe('AuthContext text', () => {
  describe('logIn test', () => {
    it('sets isLoggedIn to false', () => {
      let isLoggedIn;
      let logIn;

      render(
        <AuthProvider>
          <AuthContext.Consumer>
            {(value) => {
              isLoggedIn = value.isLoggedIn;
              logIn = value.logIn;
              return null;
            }}
          </AuthContext.Consumer>
        </AuthProvider>
      );

      expect(isLoggedIn).toBe(false);
      act(() => {
        logIn('test@test.com', '123123');
      })
      expect(isLoggedIn).toBe(true);
    });
  });

  describe('logOut test', () => {
    it('tests logOut', () => {
      let isLoggedIn;
      let logOut;
      let logIn;

      render(
        <AuthProvider>
          <AuthContext.Consumer>
            {(value) => {
              logOut = value.logOut;
              logIn = value.logIn;
              isLoggedIn = value.isLoggedIn;
              return null;
            }}
          </AuthContext.Consumer>
        </AuthProvider>
      );

      act(() => {
        logIn('test@test.com', '123123');
        logOut();
      });
      expect(isLoggedIn).toBe(false);
    });
  });
});
