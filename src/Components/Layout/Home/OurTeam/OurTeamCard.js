import React from 'react';

export default function OurTeamCard({val}) {
  return (
    <div className="card-wrapper">
      <div className="profile-card">
        <div className="image-container">
          <img src={val.photo} className="profile-photo" alt={`${val.name}`} />
          <span className="position">{val.position}</span>
        </div>
        <div className="name-container">
          <span>{val.name}</span>
        </div>
      </div>
    </div>
  );
}
