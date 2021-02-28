import React from 'react'
import { Link } from 'react-router-dom';
import { Paper, Button, Typography } from '@material-ui/core';

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
        align="left"
        paragraph={!!false}
      >
        Заполните платежные данные
      </Typography>
      <Typography
        component="p"
        variant="body1"
        align="left"
        color="secondary"
      >
        Укажите информацию о банковской карте, чтобы сделать заказ.
      </Typography>
      <div className="order-form__order">
        <Button
          to={'/profile'}
          component={Link}
          disableElevation
          fullWidth
          variant="contained"
          color="primary"
          size="large"
          type="button"
        >
          Перейти в профиль
        </Button>
      </div>
    </Paper>
  );
}

export default OrderFormNoCard;