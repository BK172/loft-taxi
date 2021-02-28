import React from 'react';
import { changeRouteContainer } from '../../../store/reducers/order/actions';
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
        align="center"
        paragraph={!!false}
      >
        Заказ размещён
      </Typography>
      <Typography
        component="p"
        variant="body1"
        align="center"
        color="secondary"
      >
        Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
      </Typography>
      <div className="main-form__btn-footer">
        <div className="main-form__submit-btn-container">
          <Button
            className="main-form__submit-btn"
            disableElevation
            variant="contained"
            color="primary"
            size="large"
            type="button"
            onClick={handleNewOrder}
          >
            Сделать новый заказ
          </Button>
        </div>
      </div>
    </Paper>
  );
}

OrderFormOrdered.propTypes = {
  changeRouteContainer: PropTypes.func.isRequired,
};

const mapDispatchToProps = { changeRouteContainer };

export { OrderFormOrdered };
export default connect(mapStateToProps, mapDispatchToProps)(OrderFormOrdered);