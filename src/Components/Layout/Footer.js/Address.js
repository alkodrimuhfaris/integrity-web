import React from 'react';

export default function Address({val}) {
  return (
    <div className="col-md-6 col-12 address">
      <h3>{val.title}</h3>
      <p>
        {val.top}
        <br />
        {val.bottom}
      </p>
    </div>
  );
}
