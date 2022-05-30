import React from 'react';
import SvgIcon from '../../../ComponentLayout/SvgIcon';

export default function Slider({ref1, wRef1, idx, val}) {
  return (
    <div
      style={{
        left: `${wRef1 * idx}px`,
      }}
      key={idx}
      ref={idx === 0 ? ref1 : null}
      className="slider"
    >
      <div className="title-slide">
        <div className="icon-wrapper">
          <SvgIcon src={val.icon} className={['icon']} />
        </div>
        <div className="title-wrapper">
          <span>{val.title}</span>
        </div>
      </div>
      <div className="description">
        <p>{val.desc}</p>
      </div>
    </div>
  );
}
