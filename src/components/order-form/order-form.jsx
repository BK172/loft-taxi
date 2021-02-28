import React from 'react';
import PropTypes from 'prop-types';
import OrderFormSelect from './order-form-select';

function OrderForm({ routeContainer }) {
  return (
    <div className="route-box">
      <Paper className="route-box__container">
        {
          {
            ['SELECT']: <OrderFormSelect />,
            ['ORDERED']: <OrderFormOrdered />,
            ['NO_CARD']: <OrderFormNoCard />,
          }
          [routeContainer]
        }
      </Paper>
    </div>
  );
}

OrderForm.defaultProps = {
  routeContainer: 'NO_CARD',
}

OrderForm.propTypes = {
  routeContainer: PropTypes.string.isRequired,
};
