import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAddressList } from '../../../store/reducers/order/selectors';
import { getRoute as getRouteAction, getAddresses } from '../../../store/reducers/order/actions';

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
    <form
      className="form"
      onSubmit={handleSubmit}
    >
      <div className="form__field">
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
      <div className="form__field">
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
      <div className="actions">
        <Button type="submit" variant="contained" color="primary">
          Заказать такси
        </Button>
      </div>
    </form>
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