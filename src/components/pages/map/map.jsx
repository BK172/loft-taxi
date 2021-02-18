import React from 'react';
import mapboxgl from 'mapbox-gl';
import Header from '../../header/header';

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.map = null;
    this.mapContainer = React.createRef();
  }

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGlzZWx0dXJib2Rpc2VsIiwiYSI6ImNra21iYjFpejM2ZDEydnBhMnR6amp3czkifQ.mdeQS7AedbRhBQr2h8CC5A';

    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [30.3056504, 59.9429126],
      zoom: 10,
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <main className="main">
          <section className="map__wrapper">
            <div className="map__map" ref={this.mapContainer}></div>
          </section>
        </main>
      </div>
    );
  }
}

export default Map;