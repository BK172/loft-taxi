import React from 'react';
import Header from '../../header/header';

const Map = ({onPageChange}) => {
  return (
    <div className="wrapper">
      <Header onPageChange={onPageChange} />
      <main className="main">
        <section>
          <p>Map</p>
        </section>
      </main>
    </div>
  );
};

export default Map;