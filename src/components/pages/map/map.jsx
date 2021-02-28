import React from 'react';
import mapboxgl from 'mapbox-gl';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../../header/header';
import OrderForm from '../../order-form/order-form';
import { changeRouteContainer } from '../../../store/reducers/order/actions';
import { getRoute, getRouteContainer } from '../../../store/reducers/order/selectors';
import { drawRoute } from '../../../utils';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZGlzZWx0dXJib2Rpc2VsIiwiYSI6ImNra21iYjFpejM2ZDEydnBhMnR6amp3czkifQ.mdeQS7AedbRhBQr2h8CC5A';

function Map({ route, routeContainer, changeRouteContainer }) {
  const map = null;
  const mapContainer = React.useRef(null);

  React.useEffect(() => {
    map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [30.3056504, 59.9429126],
      zoom: 10,
    });

    return () => map.remove();
  }, []);

  React.useEffect(() => {
    if (route && route.length > 0) {
      drawRoute(map.current, route);
      changeRouteContainer('ORDERED');
    }
  }, [route, changeRouteContainer]);

  React.useEffect(() => {
    if (routeContainer === 'SELECT') {
      if (map.current.getLayer('route')) {
        map.current.removeLayer('route');
        map.current.removeSource('route');
      }
    }
  }, [routeContainer]);

  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <section className="map__wrapper">
          <div className="map__map" ref={this.mapContainer}></div>
        </section>
        <OrderForm />
      </main>
    </div>
  );
}

Map.defaultProps = {
  route: [],
}

Map.propTypes = {
  route: PropTypes.array.isRequired,
  routeContainer: PropTypes.string.isRequired,
  changeRouteContainer: PropTypes.func.isRequired,
};

const mapStateToProps = ({ ORDER }) => ({
  route: getRoute({ ORDER }),
  routeContainer: getRouteContainer({ ORDER }),
});

const mapDispatchToProps = { changeRouteContainer };

export { Map };
export default connect(mapStateToProps, mapDispatchToProps)(Map);