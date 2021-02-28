import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAddressList } from '../../store/reducers/order/selectors';
import { getRoute as getRouteAction, getAddresses } from '../../store/reducers/order/actions';
import { TextField, Button, Paper } from '@material-ui/core';
import Autocomplete from "@material-ui/lab/Autocomplete";

function OrderFormSelect({
  getRoute,
  addressList,
  getAddresses,
}) {
  const [fromPoint, setFromPoint] = useState('');
  const [toPoint, setToPoint] = useState('');

  useEffect(() => {
    getAddresses();
  }, [getAddresses]);

  const handleSubmit = evt => {
    evt.preventDefault();
    getRoute(fromPoint, toPoint);
  };

  return (
    <Paper
      classes={{ root: 'order-form__container' }}
      elevation={1}
      square={!!false}
    >
      <form
        className="order-form__form"
        onSubmit={handleSubmit}
      >
        <div className="order-form__field">
          <Autocomplete
            options={addressList.filter((item) => item !== toPoint)}
            getOptionLabel={(option) => option}
            onChange={(evt) => setFromPoint(evt.target.value)}
            name="fromPoint"
            id="fromPoint"
            value={fromPoint}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Откуда"
                margin="normal"
                fullWidth
              />
            )}
          />
        </div>
        <div className="order-form__field">
          <Autocomplete
            options={addressList.filter((item) => item !== fromPoint)}
            getOptionLabel={(option) => option}
            onChange={(evt) => setToPoint(evt.target.value)}
            name="toPoint"
            id="toPoint"
            value={toPoint}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Куда"
                margin="normal"
                fullWidth
              />
            )}
          />
        </div>
        <div className="order-form__order">
          <Button
            type="submit"
            fullWidth
            disableElevation
            variant="contained"
            color="primary"
            size="large"
          >
            Заказать такси
          </Button>
        </div>
      </form>
    </Paper>
  );
}

OrderFormSelect.defaultProps = {
  addressList: [],
}

OrderFormSelect.propTypes = {
  addressList: PropTypes.array.isRequired,
  getRouteAction: PropTypes.func.isRequired,
  getAddresses: PropTypes.func.isRequired,
};

const mapStateToProps = ({ ORDER }) => ({
  addressList: getAddressList({ ORDER }),
});

const mapDispatchToProps = { getRouteAction, getAddresses };

export { OrderFormSelect };
export default connect(mapStateToProps, mapDispatchToProps)(OrderFormSelect);