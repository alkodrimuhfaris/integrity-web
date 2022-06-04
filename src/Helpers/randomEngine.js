const formerH = [
  {number: '10', topText: 'Years', bottom: 'Experience'},
  {number: '01', topText: 'Current', bottom: 'Investment'},
  {number: '03', topText: 'Specialist', bottom: 'Industries'},
  {number: '07', topText: 'Valuable', bottom: 'Client'},
];

export default ({setHighlight = () => {}}) => {
  // intervalArray to store inveterval id
  const intervalArray = [null, null, null, null];
  // timeoutArray to store timeout id
  const timeOutArr = [null, null, null];
  // this function is for setting interval of each one of the randomized number
  // this will make in each interval, time to generate number is changing
  for (let idx = 0; idx < intervalArray.length; idx++) {
    intervalArray[idx] = setInterval(() => {
      const randomNumber = `${Math.floor(Math.random() * 100)}`;
      setHighlight((x) => {
        const y = x.map((val) => ({...val}));
        y[idx].number =
          randomNumber.length === 1 ? `0${randomNumber}` : randomNumber;
        return y;
      });
    }, 0.05 * 1000);

    timeOutArr[0] = setTimeout(() => {
      clearInterval(intervalArray[idx]);
      intervalArray[idx] = setInterval(() => {
        const randomNumber = `${Math.floor(Math.random() * 100)}`;
        setHighlight((x) => {
          const y = x.map((val) => ({...val}));
          y[idx].number =
            randomNumber.length === 1 ? `0${randomNumber}` : randomNumber;
          return y;
        });
      }, 0.075 * 1000);
    }, (idx + 1) * 1000);

    timeOutArr[1] = setTimeout(() => {
      clearInterval(intervalArray[idx]);
      intervalArray[idx] = setInterval(() => {
        const randomNumber = `${Math.floor(Math.random() * 100)}`;
        setHighlight((x) => {
          const y = x.map((val) => ({...val}));
          y[idx].number =
            randomNumber.length === 1 ? `0${randomNumber}` : randomNumber;
          return y;
        });
      }, 0.1 * 1000);
    }, (idx + 2) * 1000);

    timeOutArr[2] = setTimeout(() => {
      clearInterval(intervalArray[idx]);
      setHighlight((x) => {
        const y = x.map((val) => ({...val}));
        y[idx].number = formerH[idx].number;
        return y;
      });
    }, (idx + 3) * 1000);
  }

  const intrvl = setInterval(() => {
    intervalArray.map((val) => clearInterval(val));
    timeOutArr.map((val) => clearTimeout(val));
    for (let idx = 0; idx < intervalArray.length; idx++) {
      intervalArray[idx] = setInterval(() => {
        const randomNumber = `${Math.floor(Math.random() * 100)}`;
        setHighlight((x) => {
          const y = x.map((val) => ({...val}));
          y[idx].number =
            randomNumber.length === 1 ? `0${randomNumber}` : randomNumber;
          return y;
        });
      }, 0.05 * 1000);
      timeOutArr[0] = setTimeout(() => {
        clearInterval(intervalArray[idx]);
        intervalArray[idx] = setInterval(() => {
          const randomNumber = `${Math.floor(Math.random() * 100)}`;
          setHighlight((x) => {
            const y = x.map((val) => ({...val}));
            y[idx].number =
              randomNumber.length === 1 ? `0${randomNumber}` : randomNumber;
            return y;
          });
        }, 0.075 * 1000);
      }, (idx + 1) * 1000);
      timeOutArr[1] = setTimeout(() => {
        clearInterval(intervalArray[idx]);
        intervalArray[idx] = setInterval(() => {
          const randomNumber = `${Math.floor(Math.random() * 100)}`;
          setHighlight((x) => {
            const y = x.map((val) => ({...val}));
            y[idx].number =
              randomNumber.length === 1 ? `0${randomNumber}` : randomNumber;
            return y;
          });
        }, 0.1 * 1000);
      }, (idx + 2) * 1000);
      timeOutArr[2] = setTimeout(() => {
        clearInterval(intervalArray[idx]);
        setHighlight((x) => {
          const y = x.map((val) => ({...val}));
          y[idx].number = formerH[idx].number;
          return y;
        });
      }, (idx + 3) * 1000);
    }
  }, 30 * 1000);
  return [intrvl, intervalArray, timeOutArr];
};
