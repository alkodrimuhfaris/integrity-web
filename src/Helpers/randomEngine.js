const formerH = [
  {number: '10', topText: 'Years', bottom: 'Experience'},
  {number: '01', topText: 'Current', bottom: 'Investment'},
  {number: '03', topText: 'Specialist', bottom: 'Industries'},
  {number: '07', topText: 'Valuable', bottom: 'Client'},
];

export default ({setHighlight = () => {}}) => {
  const intvArr = [null, null, null, null];
  for (let idx = 0; idx < intvArr.length; idx++) {
    intvArr[idx] = setInterval(() => {
      const rdm = `${Math.floor(Math.random() * 100)}`;
      setHighlight((x) => {
        const y = x.map((val) => ({...val}));
        y[idx].number = rdm.length === 1 ? `0${rdm}` : rdm;
        return y;
      });
    }, 0.05 * 1000);
    setTimeout(() => {
      clearInterval(intvArr[idx]);
      intvArr[idx] = setInterval(() => {
        const rdm = `${Math.floor(Math.random() * 100)}`;
        setHighlight((x) => {
          const y = x.map((val) => ({...val}));
          y[idx].number = rdm.length === 1 ? `0${rdm}` : rdm;
          return y;
        });
      }, 0.075 * 1000);
    }, (idx + 1) * 1000);
    setTimeout(() => {
      clearInterval(intvArr[idx]);
      intvArr[idx] = setInterval(() => {
        const rdm = `${Math.floor(Math.random() * 100)}`;
        setHighlight((x) => {
          const y = x.map((val) => ({...val}));
          y[idx].number = rdm.length === 1 ? `0${rdm}` : rdm;
          return y;
        });
      }, 0.1 * 1000);
    }, (idx + 2) * 1000);
    setTimeout(() => {
      clearInterval(intvArr[idx]);
      setHighlight((x) => {
        const y = x.map((val) => ({...val}));
        y[idx].number = formerH[idx].number;
        return y;
      });
    }, (idx + 3) * 1000);
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
      }, 0.05 * 1000);
      setTimeout(() => {
        clearInterval(intvArr[idx]);
        intvArr[idx] = setInterval(() => {
          const rdm = `${Math.floor(Math.random() * 100)}`;
          setHighlight((x) => {
            const y = x.map((val) => ({...val}));
            y[idx].number = rdm.length === 1 ? `0${rdm}` : rdm;
            return y;
          });
        }, 0.075 * 1000);
      }, (idx + 1) * 1000);
      setTimeout(() => {
        clearInterval(intvArr[idx]);
        intvArr[idx] = setInterval(() => {
          const rdm = `${Math.floor(Math.random() * 100)}`;
          setHighlight((x) => {
            const y = x.map((val) => ({...val}));
            y[idx].number = rdm.length === 1 ? `0${rdm}` : rdm;
            return y;
          });
        }, 0.1 * 1000);
      }, (idx + 2) * 1000);
      setTimeout(() => {
        clearInterval(intvArr[idx]);
        setHighlight((x) => {
          const y = x.map((val) => ({...val}));
          y[idx].number = formerH[idx].number;
          return y;
        });
      }, (idx + 3) * 1000);
    }
  }, 30 * 1000);
};
