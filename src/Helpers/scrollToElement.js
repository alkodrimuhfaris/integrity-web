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
  const [detectedHeight, setDetectedHeight] = React.useState(height + yOffset);
  const {
    hash: hashContext,
    setHash,
    setSelectedMenu,
  } = React.useContext(HashContext);
  // specify offset to adapting to height of navbar on sm and non sm in pixel

  React.useEffect(() => {
    const yOffsetNew = sm ? -60 : -90;
    const detectedHeightNew = height - yOffset * 2;
    setYOffset(yOffsetNew);
    setDetectedHeight(detectedHeightNew);
  }, [height, sm]);

  React.useEffect(() => {
    scrollTo(hashElement, hash, refScroll, yOffset);
  }, [hash, hashElement]);

  React.useEffect(() => {
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
    const detectBottom = bottom + yOffset / 2;
    const detectTop = top + detectedHeight;
    if (hashElement === '#contact') {
      if (detectBottom <= window.innerHeight) {
        setSelectedMenu('contact');
        return;
      }
      return;
    }
    if (detectTop >= 0 && detectTop <= window.innerHeight) {
      setSelectedMenu(hashElement.replace('#', ''));
    }
  };

  React.useEffect(() => {
    document.addEventListener('scroll', onScroll, true);
    return () => document.removeEventListener('scroll', onScroll, true);
  }, []);

  return {refScroll};
}
