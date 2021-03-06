import React from 'react';
import {useLocation} from 'react-router-dom';
import {HashContext} from '../Context/HashProvider';
import useWindowDimensions from '../Hooks/useWindowDimension';

const scrollTo = (hashElement, hash, refScroll, yOffset) => {
  if (hashElement !== '' && hash === hashElement && refScroll.current) {
    const y =
      hash === '#home'
        ? 0
        : refScroll.current.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
  }
};

export default function scrollToElement({hashElement = ''}) {
  const refScroll = React.useRef(null);
  const {hash, pathname} = useLocation();
  const {height, sm} = useWindowDimensions();
  const [yOffset, setYOffset] = React.useState(sm ? -60 : -90);
  const {
    hash: hashContext,
    setHash,
    setSelectedMenu,
  } = React.useContext(HashContext);
  // specify offset to adapting to height of navbar on sm and non sm in pixel

  React.useEffect(() => {
    const yOffsetNew = sm ? -60 : -90;
    setYOffset(yOffsetNew);
  }, [height, sm]);

  React.useEffect(() => {
    if (hashElement === '#service') {
      return;
    }
    scrollTo(hashElement, hash, refScroll, yOffset);
  }, [hash, hashElement]);

  React.useEffect(() => {
    if (hashElement === '#service') {
      return;
    }
    if (hashContext) {
      scrollTo(hashElement, hashContext, refScroll, sm);
      setHash(null);
    }
  }, [hashContext, hashElement]);

  // to detect if element is on view point
  const onScroll = () => {
    if (pathname !== '/') {
      return;
    }
    if (!refScroll.current) {
      return;
    }
    const {top, bottom} = refScroll.current.getBoundingClientRect();
    const {innerHeight} = window;
    const checkTopAndBottom = top >= 0 && bottom >= 0;
    const detectScreenShowingComponent =
      top + yOffset / 2 <= innerHeight && bottom + yOffset / 2 <= innerHeight;
    if (hashElement === '#contact') {
      if (bottom + yOffset <= innerHeight) {
        setSelectedMenu('contact');
        return;
      }
      return;
    }
    if (checkTopAndBottom && detectScreenShowingComponent) {
      setSelectedMenu(hashElement.replace('#', ''));
    }
  };

  React.useEffect(() => {
    document.addEventListener('scroll', onScroll, true);
    return () => document.removeEventListener('scroll', onScroll, true);
  }, []);

  return {refScroll};
}
