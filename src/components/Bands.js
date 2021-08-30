import React from 'react';

export const Bands = props => {
  const renderBands = props.bands.map((band, id) => (
    <li key={id}>{band.name}</li>
  ));

  return <div>{renderBands}</div>;
};
