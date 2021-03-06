import React from 'react';
import randomEngine from '../../../../Helpers/randomEngine';
import scrollToElement from '../../../../Helpers/scrollToElement';
import Highlight from './Highlight';
import InTouch from './InTouch';

export default function HeaderTop() {
  const {refScroll} = scrollToElement({hashElement: '#home'});
  const [highlight, setHighlight] = React.useState([
    {number: '10', topText: 'Years', bottom: 'Experience'},
    {number: '01', topText: 'Current', bottom: 'Investment'},
    {number: '03', topText: 'Specialist', bottom: 'Industries'},
    {number: '07', topText: 'Valuable', bottom: 'Client'},
  ]);

  React.useEffect(() => {
    const [intrvl, intvArr, timeOutArr] = randomEngine({setHighlight});
    return () => {
      clearInterval(intrvl);
      intvArr.map((val) => clearInterval(val));
      timeOutArr.map((val) => clearTimeout(val));
    };
  }, []);

  return (
    <div ref={refScroll} className="header-top">
      <div className="in-touch">
        <div className="container in-touch-wrapper">
          <InTouch />
        </div>
      </div>
      <div className="highlights">
        <div className="container">
          <div className="row">
            {highlight.map((val, idx) => (
              <Highlight key={idx} val={val} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
