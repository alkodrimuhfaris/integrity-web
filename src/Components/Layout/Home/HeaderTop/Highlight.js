import React from 'react';

export default function Highlight({val}) {
  return (
    <div className="col-6 col-md-3 highlight">
      <div className="number">
        <span>{val.number}</span>
      </div>
      <div className="words">
        <div className="top">
          <span>{val.topText}</span>
        </div>
        <div>
          <span>{val.bottom}</span>
        </div>
      </div>
    </div>
  );
}
