import React from 'react';
import {useLocation} from 'react-router-dom';
import {HashContext} from '../Context/HashProvider';
import useWindowDimensions from '../Hooks/useWindowDimension';

const scrollTo = (hashElement, hash, refScroll, sm) => {
  if (hashElement !== '' && hash === hashElement && refScroll.current) {
    const yOffset = sm ? -60 : -90; // adapting to height of navbar on sm and non sm in pixel
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
  const {hash} = useLocation();
  const {sm} = useWindowDimensions();
  const {hash: hashContext, setHash} = React.useContext(HashContext);

  React.useEffect(() => {
    scrollTo(hashElement, hash, refScroll, sm);
  }, [hash, hashElement]);

  React.useEffect(() => {
    if (hashContext) {
      scrollTo(hashElement, hashContext, refScroll, sm);
      setHash(null);
    }
  }, [hashContext, hashElement]);

  return {refScroll};
}
