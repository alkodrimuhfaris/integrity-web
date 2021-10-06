import React from 'react';

export default function Title({title = 'Service', valuableclient = false}) {
  return (
    <div className="title">
      <div className={`title-container ${valuableclient ? 'valuable' : ''}`}>
        {valuableclient ? (
          <h1>Valuable Client</h1>
        ) : (
          <h1>
            <span>Our</span> {title}
          </h1>
        )}
      </div>
    </div>
  );
}
