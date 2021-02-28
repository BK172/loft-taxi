import React from 'react'
import { Link } from 'react-router-dom';

function OrderFormNoCard() {
  return (
    <Paper
      classes={{ root: 'order-form__container' }}
      elevation={1}
      square={!!false}
    >
      <Typography
        classes={{ root: 'order-form-title' }}
        component="h1"
        variant="h4"
        align="center"
        paragraph={!!false}
      >
        Заполните платежные данные
      </Typography>
      <Typography
        component="p"
        variant="body1"
        align="center"
        color="secondary"
      >
        Укажите информацию о банковской карте, чтобы сделать заказ.
      </Typography>
      <div className="main-form__btn-footer">
        <div className="main-form__submit-btn-container">
          <Button
            className="main-form__submit-btn"
            to={'/profile'}
            component={Link}
            disableElevation
            variant="contained"
            color="primary"
            size="large"
            type="button"
          >
            Перейти в профиль
          </Button>
        </div>
      </div>
    </Paper>
  );
}

export default OrderFormNoCard;