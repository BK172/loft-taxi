import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../../header/header';
import { getCard, saveCard } from '../../../store/reducers/card/actions';
import { getCvc, getCardName, getCardNumber, getExpiryDate } from '../../../store/reducers/card/selectors';
import { Paper, Button, Typography, TextField } from '@material-ui/core';

class Profile extends React.Component {
  state = {
    isFormValid: false,
    isCardSaved: false,
    cvc: '',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
  };

  componentDidMount() {
    this.props.getCard();
  }

  componentDidUpdate(prevProps, prevState) {
    const { cvc, cardName, cardNumber, expiryDate } = this.props;

    if (
      prevProps.cvc !== cvc ||
      prevProps.cardName !== cardName ||
      prevProps.cardNumber !== cardNumber ||
      prevProps.expiryDate !== expiryDate
    ) {
      this.setState({
        cvc,
        cardName,
        cardNumber,
        expiryDate,
      });
    }

    if (
      prevState.cvc !== this.state.cvc ||
      prevState.cardName !== this.state.cardName ||
      prevState.cardNumber !== this.state.cardNumber ||
      prevState.expiryDate !== this.state.expiryDate
    ) {
      if (this.state.cvc && this.state.cardName && this.state.cardNumber && this.state.expiryDate) {
        this.setState({isFormValid: true});
      } else {
        this.setState({isFormValid: false});
      }
    }
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const { cvc, cardName, cardNumber, expiryDate } = this.state;

    if (cvc && cardName && cardNumber && expiryDate) {
      this.props.saveCard(cvc, cardName, cardNumber, expiryDate);
      this.setState({isCardSaved: true});
    }
  }

  handleInputChange = ({target}) => {
    const {name, value} = target;
    this.setState({[name]: value});
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="wrapper__map"></div>
        <main className="main">
          <section className="main__section">
            <Paper classes={{ root: 'main__card' }} elevation={1} square={false}>
              <form onSubmit={this.handleSubmit}>
              <Typography
                classes={{ root: 'main__section-title' }}
                component="h1"
                variant="h4"
                align="center"
                paragraph={false}
              >
                Профиль
              </Typography>
              <Typography
                component="p"
                variant="body1"
                align="center"
                color="secondary"
              >
                {!this.state.isCardSaved
                  ? 'Введите платежные данные'
                  : 'Платежные данные обновлены. Теперь Вы можете заказать такси.'
                }
              </Typography>
              {!this.state.isCardSaved && (
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
                      value={this.state.cardName}
                      onChange={this.handleInputChange}
                    />
                    <TextField
                      margin="normal"
                      fullWidth
                      id="cardNumber"
                      name="cardNumber"
                      label="Номер карты"
                      required
                      value={this.state.cardNumber}
                      onChange={this.handleInputChange}
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
                        value={this.state.expiryDate}
                        onChange={this.handleInputChange}
                      />
                      <TextField
                        margin="normal"
                        fullWidth
                        id="cvc"
                        name="cvc"
                        label="CVC"
                        required
                        value={this.state.cvc}
                        onChange={this.handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="credit-card__container">
                    <Paper classes={{ root: 'credit-card__paper' }} elevation={5} square={false}>
                      <div className="credit-card__section">
                        <div className="credit-card__logo"></div>
                        <Typography component="p" variant="body1">
                          {this.state.expiryDate}
                        </Typography>
                      </div>
                      <div>
                        <Typography
                          classes={{ root: 'credit-card__number' }}
                          component="p"
                          variant="body1"
                        >
                          {this.state.cardNumber}
                        </Typography>
                      </div>
                      <div className="credit-card__section">
                        <div className="credit-card__chip"></div>
                        <div className="credit-card__mc-logo"></div>
                      </div>
                    </Paper>
                  </div>
                </div>
              )}

              <div className="main-form__btn-footer">
                {this.state.isCardSaved ? (
                  <div className="main-form__submit-btn-container">
                    <Button
                      className="main-form__submit-btn"
                      disableElevation
                      variant="contained"
                      color="primary"
                      size="large"
                      type="button"
                    >
                      <Link to={'/map'}>Перейти на карту</Link>
                    </Button>
                  </div>
                ) : (
                  <Button
                    className="main-form__submit-btn"
                    // disabled={this.state.isFormValid ? true : false}
                    disableElevation
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                  >
                    Сохранить
                  </Button>
                )}
              </div>
            </form>
            </Paper>
          </section>
        </main>
      </div>
    )
  }
}

Profile.defaultProps = {
  cvc: '',
  cardName: '',
  cardNumber: '',
  expiryDate: '',
}

Profile.propTypes = {
  cvc: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardNumber: PropTypes.string.isRequired,
  expiryDate: PropTypes.string.isRequired,
  getCard: PropTypes.func.isRequired,
  saveCard: PropTypes.func.isRequired,
};

const mapStateToProps = ({ CARD }) => ({
  cvc: getCvc({ CARD }),
  cardName: getCardName({ CARD }),
  cardNumber: getCardNumber({ CARD }),
  expiryDate: getExpiryDate({ CARD }),
});

const mapDispatchToProps = { getCard, saveCard };

export { Profile };
export default connect(mapStateToProps, mapDispatchToProps)(Profile);