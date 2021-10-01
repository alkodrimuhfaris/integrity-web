import React from 'react';
import randomEngine from '../../../Helpers/randomEngine';
import scrollToElement from '../../../Helpers/scrollToElement';

export default function HeaderTop() {
  const {refScroll} = scrollToElement({hashElement: '#home'});
  const [highlight, setHighlight] = React.useState([
    {number: '10', topText: 'Years', bottom: 'Experience'},
    {number: '01', topText: 'Current', bottom: 'Investment'},
    {number: '03', topText: 'Specialist', bottom: 'Industries'},
    {number: '07', topText: 'Valuable', bottom: 'Client'},
  ]);

  React.useEffect(() => {
    randomEngine({setHighlight});
  }, []);

  return (
    <div ref={refScroll} className="header-top">
      <img
        className="header-top-img"
        src="/assets/photos/header-thumbnail.png"
        alt="header-thumbnail"
      />
      <div className="highlights">
        <div className="container">
          <div className="row">
            {highlight.map((val, idx) => (
              <div key={idx} className="col-3 highlight">
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
