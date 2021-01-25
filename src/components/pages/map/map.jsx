import React from 'react';
import Header from '../../header/header';

const Map = () => {
  return (
    <div className="wrapper">
      <Header onPageChange={this.props.onPageChange} />
      <main className="main">
        <section>
          <p>Map</p>
        </section>
      </main>
    </div>
  );
};

export default Map;