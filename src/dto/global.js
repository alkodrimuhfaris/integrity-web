import {service} from './services.json';

export const callCenter = '(+62)215701505';
export const services = [
  {
    icon: '/assets/service/01-audit.svg',
    title: service[0].title,
    desc: service[0].desc,
  },
  {
    icon: '/assets/service/02-financial.svg',
    title: service[1].title,
    desc: service[1].desc,
  },
  {
    icon: '/assets/service/03-management.svg',
    title: service[2].title,
    desc: service[2].desc,
  },
  {
    icon: '/assets/service/04-accounting.svg',
    title: service[3].title,
    desc: service[3].desc,
  },
  {
    icon: '/assets/service/05-system.svg',
    title: service[4].title,
    desc: service[4].desc,
  },
  {
    icon: '/assets/service/06-merger.svg',
    title: service[5].title,
    desc: service[5].desc,
  },
  {
    icon: '/assets/service/07-initial.svg',
    title: service[6].title,
    desc: service[6].desc,
  },
  {
    icon: '/assets/service/08-corporate.svg',
    title: service[7].title,
    desc: service[7].desc,
  },
  {
    icon: '/assets/service/09-property.svg',
    title: service[8].title,
    desc: service[8].desc,
  },
  {
    icon: '/assets/service/10-business.svg',
    title: service[9].title,
    desc: service[9].desc,
  },
];
export default {
  callCenter,
};
