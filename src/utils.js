import { NameSpace } from './store/reducers/root-reducer';

export const extend = (a, b) => Object.assign({}, a, b);

export const drawRoute = (map, coordinates) => {
  map.flyTo({
    center: coordinates[0],
    zoom: 15,
  });

  map.addLayer({
    id: 'route',
    type: 'line',
    source: {
      type: 'geojson',
      data: {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates,
        }
      }
    },
    layout: {
      'line-join': 'round',
      'line-cap': 'round',
    },
    paint: {
      'line-color': '#ffc617',
      'line-width': 8,
    }
  });
};

export const makeInitialStateMock = () => ({
  [NameSpace.AUTH]: {
    isLoggedIn: false,
    authToken: 'AUTH_TOKEN',
  },
  [NameSpace.CARD]: {
    cvc: '123',
    cardName: 'CardName',
    cardNumber: '111111111111',
    expiryDate: '01/11',
  },
});