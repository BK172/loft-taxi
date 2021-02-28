import React from 'react';
import PropTypes from 'prop-types';
import OrderFormSelect from './order-form-select';
import OrderFormOrdered from './order-form-ordered';
import OrderFormNoCard from './order-form-no-card';

function OrderForm({ routeContainer }) {
  return (
    <div className="order-form">
      {
        {
          ['SELECT']: <OrderFormSelect />,
          ['ORDERED']: <OrderFormOrdered />,
          ['NO_CARD']: <OrderFormNoCard />,
        }
        [routeContainer]
      }
    </div>
  );
}

OrderForm.defaultProps = {
  routeContainer: 'NO_CARD',
}

OrderForm.propTypes = {
  routeContainer: PropTypes.string.isRequired,
};
