import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeRouteContainer } from '../../store/reducers/order/actions';
import { Paper, Button, Typography } from '@material-ui/core';

function OrderFormOrdered({ changeRouteContainer }) {
  const handleNewOrder = () => {
    changeRouteContainer('SELECT');
  };

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
        Заказ размещён
      </Typography>
      <Typography
        component="p"
        variant="body1"
        align="left"
        color="secondary"
      >
        Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
      </Typography>
      <div className="order-form__order">
        <Button
          disableElevation
          fullWidth
          variant="contained"
          color="primary"
          size="large"
          type="button"
          onClick={handleNewOrder}
        >
          Сделать новый заказ
        </Button>
      </div>
    </Paper>
  );
}

OrderFormOrdered.propTypes = {
  changeRouteContainer: PropTypes.func.isRequired,
};

const mapDispatchToProps = { changeRouteContainer };

export { OrderFormOrdered };
export default connect(null, mapDispatchToProps)(OrderFormOrdered);