import React from 'react'
import Header from '../../header/header';
import { Paper, Button, Typography, TextField } from '@material-ui/core';

class Profile extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="wrapper__map"></div>
        <main className="main">
          <section className="main__section">
            <Paper classes={{ root: 'main__card' }} elevation={1} square="false">
              <form onSubmit={this.handleSubmit}>
              <Typography
                component="h1"
                variant="h4"
                align="center"
                paragraph="false"
              >
                Профиль
              </Typography>
              <Typography
                component="p"
                variant="body1"
                align="center"
                color="secondary"
              >
                Введите платежные данные
              </Typography>
              <div className="main-form__wrapper">
                <div className="main-form__container">
                  <TextField
                    margin="normal"
                    fullWidth
                    id="cardName"
                    name="cardName"
                    label="Имя владельца"
                    autoFocus
                    required
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    id="cardNumber"
                    name="cardNumber"
                    label="Номер карты"
                    required
                  />
                  <div className="main-form__items-two-col">
                    <TextField
                      classes={{ root: 'main-form__card-date' }}
                      margin="normal"
                      fullWidth
                      id="expiryDate"
                      name="expiryDate"
                      label="MM/YY"
                      required
                    />
                    <TextField
                      margin="normal"
                      fullWidth
                      id="cvc"
                      name="cvc"
                      label="CVC"
                      required
                    />
                  </div>
                </div>

                <div className="credit-card__container">
                  <Paper classes={{ root: 'credit-card__paper' }} elevation={5} square="false">
                    <div className="credit-card__section">
                      <div className="credit-card__logo"></div>
                      <Typography component="p" variant="body1">01/11</Typography>
                    </div>
                    <div>
                      <Typography
                        classes={{ root: 'credit-card__number' }}
                        component="p"
                        variant="body1"
                      >
                        1111111111111111
                      </Typography>
                    </div>
                    <div className="credit-card__section">
                      <div className="credit-card__chip"></div>
                      <div className="credit-card__mc-logo"></div>
                    </div>
                  </Paper>
                </div>
              </div>

              <div className="main-form__btn-footer">
                <Button
                  className="main-form__submit-btn"
                  disableElevation
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                >
                  Сохранить
                </Button>
              </div>
            </form>
            </Paper>
          </section>
        </main>
      </div>
    )
  }
}

export default Profile;