import React from 'react';
import {useLocation} from 'react-router-dom';
import {Container} from 'reactstrap';
import ServiceHeader from '../ServiceHeader/ServiceHeader';
import {servicesHome} from '../../../../dto/services.json';

export default function ServicePage({children, className}) {
  const [headerProp, setHeaderProp] = React.useState({
    image: '',
    title: '',
    path: '',
  });
  const {pathname} = useLocation();

  React.useEffect(() => {
    const selectedHeaderProp = servicesHome.filter(
      (value) => value.path === pathname,
    );
    setHeaderProp(selectedHeaderProp[0]);
  }, [pathname, servicesHome]);

  return (
    <div className="service-page">
      <ServiceHeader image={headerProp.image} title={headerProp.title} />
      <Container className={className}>{children}</Container>
    </div>
  );
}
