import React from 'react';
import useWindowDimensions from './useWindowDimension';

export default function useComponentWidth() {
  const [w, setW] = React.useState(0);
  const [h, setH] = React.useState(0);
  const {width, height} = useWindowDimensions();
  const ref = React.useRef(null);

  React.useEffect(() => {
    setW(() => (ref.current ? ref.current.offsetWidth : 0));
    setH(() => (ref.current ? ref.current.offsetHeight : 0));
  }, [width, height, ref.current]);

  return [ref, w, h];
}
