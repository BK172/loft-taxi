import React from 'react';
import PropTypes from 'prop-types';
import OrderFormSelect from './order-form-select';
import OrderFormOrdered from './order-form-ordered';
import OrderFormNoCard from './order-form-no-card';

function OrderForm({ routeContainer }) {
  const getContent = () => {
    if (routeContainer === 'SELECT') {
      return <OrderFormSelect />;
    } else if (routeContainer === 'ORDERED') {
      return <OrderFormOrdered />;
    }

    return <OrderFormNoCard />;
  };

  return (
    <div className="order-form">
      {getContent()}
    </div>
  );
}

OrderForm.defaultProps = {
  routeContainer: 'ORDERED',
}

OrderForm.propTypes = {
  routeContainer: PropTypes.string.isRequired,
};

export default OrderForm;