import React from 'react';
import useWindowDimensions from './useWindowDimension';

export default function carouselControler({
  carousel = [],
  transition = '0.3s ease',
  rightDir = 'next',
  leftDir = 'prev',
  // timer = 0,
}) {
  const [showCarousel, setShowCarousel] = React.useState([]);
  const [firstCar, setFirstCar] = React.useState(0);
  const [lastCar, setLastCar] = React.useState(0);
  const [tr, setTransition] = React.useState(transition);
  const [idxCarousel, setIdxCarousel] = React.useState(0);
  const [lastAddedCar, setLastAdded] = React.useState(0);
  const [relativeChange, setRelativeChange] = React.useState(0);
  const [btnClicked, setBtnClicked] = React.useState('');
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);
  const [disableBtn, setDisableBtn] = React.useState(false);
  // const ref = React.useRef(null);
  // const firstInterval = React.useRef(null);

  const {_width} = useWindowDimensions();

  const sliderFunc = (dir) => {
    setBtnClicked(dir);
    setRelativeChange((x) => {
      x = dir === leftDir ? -1 : +1;
      return x;
    });
    setLastAdded((x) => {
      x = dir === leftDir ? x - 1 : x + 1;
      x = dir === leftDir && x < 0 ? carousel.length - 1 : x;
      x = dir === rightDir && x > carousel.length - 1 ? 0 : x;
      return x;
    });
  };

  const dotFunc = (dotNumb) => {
    setBtnClicked('dot');
    setRelativeChange((x) => {
      x =
        lastAddedCar === carousel.length - 1 && lastAddedCar === 0
          ? carousel.length - 2
          : dotNumb - lastAddedCar;
      return x;
    });
    setLastAdded(dotNumb);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      // do your stuff here for left swipe
      setBtnClicked(rightDir);
      setRelativeChange(1);
      setLastAdded((x) => {
        x += 1;
        x = x > carousel.length - 1 ? 0 : x;
        return x;
      });
    }

    if (touchStart - touchEnd < -150) {
      // do your stuff here for right swipe
      setBtnClicked(leftDir);
      setRelativeChange(-1);
      setLastAdded((x) => {
        x -= 1;
        x = x < 0 ? carousel.length - 1 : x;
        return x;
      });
    }
  };

  const onTransitionEnd = () => {
    if (idxCarousel === carousel.length - 1 || idxCarousel === 0) {
      setTransition('none');
      setIdxCarousel(lastCar);
      setDisableBtn(true);
      // setTransition(transition);
    } else if (
      idxCarousel === carousel.length * 2 ||
      idxCarousel === showCarousel.length - 1
    ) {
      setTransition('none');
      setIdxCarousel(firstCar);
      setDisableBtn(true);
      // setTransition(transition);
    }
    setDisableBtn(false);
  };

  React.useEffect(() => {
    if (relativeChange !== 0) {
      setDisableBtn(true);
    }
  }, [relativeChange]);

  React.useEffect(() => {
    if (
      tr === 'none' &&
      (idxCarousel === lastCar || idxCarousel === firstCar)
    ) {
      setTimeout(() => {
        setTransition(transition);
        setDisableBtn(false);
      }, 300);
    }
  }, [idxCarousel, tr]);

  React.useEffect(() => {
    const newCarousel = [...carousel, ...carousel, ...carousel];
    // for (let i = 0; i < 3; i++) {
    //   carousel.map((val) => {
    //     newCarousel.push({...val});
    //     return {...val};
    //   });
    // }
    const fC = carousel.length;
    const lC = carousel.length * 2 - 1;
    setShowCarousel(newCarousel);
    setFirstCar(fC);
    setLastCar(lC);
    setIdxCarousel(fC);
  }, [carousel]);

  React.useEffect(() => {
    if (carousel.length) {
      if (relativeChange !== 0) {
        setIdxCarousel((prevState) => {
          const x = prevState + relativeChange;
          // if previous button is clicked
          if (btnClicked === leftDir) {
            return prevState - 1;
          }
          // everytime next or dot button is clicked
          if (x >= 0) {
            if (prevState === showCarousel.length - 1) {
              setTransition('none');
              return lastCar;
            }
          }
          return x;
        });
        setRelativeChange(0);
      }
    }
  }, [relativeChange, carousel]);

  const dotBtn = ({className = ''}) => (
    <div
      className={`slider-btn-global justify-content-center align-items-center d-flex w-100 ${className}`}
    >
      {carousel.map((_, index) => {
        const setActive = index === lastAddedCar ? 'active' : '';
        return (
          <button
            key={index}
            type="button"
            name={`dot-carousel-${index}`}
            className={`slider-btns mx-1 ${setActive}`}
            onClick={() => dotFunc(index)}
          >
            &nbsp;
          </button>
        );
      })}
    </div>
  );

  return {
    carouselArray: showCarousel,
    carouselNum: idxCarousel,
    transition: tr,
    disableBtn,
    sliderFunc,
    dotBtn,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    onTransitionEnd,
  };
}
