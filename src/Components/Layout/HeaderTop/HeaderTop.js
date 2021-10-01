import React from 'react';

export default function HeaderTop() {
  const [highlight, setHighlight] = React.useState([
    {number: '10', topText: 'Years', bottom: 'Experience'},
    {number: '01', topText: 'Current', bottom: 'Investment'},
    {number: '03', topText: 'Specialist', bottom: 'Industries'},
    {number: '07', topText: 'Valuable', bottom: 'Client'},
  ]);
  const formerH = [
    {number: '10', topText: 'Years', bottom: 'Experience'},
    {number: '01', topText: 'Current', bottom: 'Investment'},
    {number: '03', topText: 'Specialist', bottom: 'Industries'},
    {number: '07', topText: 'Valuable', bottom: 'Client'},
  ];

  React.useEffect(() => {
    const intvArr = [null, null, null, null];
    for (let idx = 0; idx < intvArr.length; idx++) {
      intvArr[idx] = setInterval(() => {
        const rdm = `${Math.floor(Math.random() * 100)}`;
        setHighlight((x) => {
          const y = x.map((val) => ({...val}));
          y[idx].number = rdm.length === 1 ? `0${rdm}` : rdm;
          return y;
        });
      }, 0.1 * 1000);
      setTimeout(() => {
        clearInterval(intvArr[idx]);
        setHighlight((x) => {
          const y = x.map((val) => ({...val}));
          y[idx].number = formerH[idx].number;
          return y;
        });
      }, (idx + 5) * 1000);
    }
    setInterval(() => {
      intvArr.map((val) => clearInterval(val));
      for (let idx = 0; idx < intvArr.length; idx++) {
        intvArr[idx] = setInterval(() => {
          const rdm = `${Math.floor(Math.random() * 100)}`;
          setHighlight((x) => {
            const y = x.map((val) => ({...val}));
            y[idx].number = rdm.length === 1 ? `0${rdm}` : rdm;
            return y;
          });
        }, 0.1 * 1000);
        setTimeout(() => {
          clearInterval(intvArr[idx]);
          setHighlight((x) => {
            const y = x.map((val) => ({...val}));
            y[idx].number = formerH[idx].number;
            return y;
          });
        }, (idx + 5) * 1000);
      }
    }, 15 * 1000);
  }, []);

  return (
    <div className="header-top">
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
