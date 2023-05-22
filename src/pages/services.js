import Services from '@/layout/Services';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
const services = () => {
  const projects = [
    {
      id: 1,
      title: 'Earthen Bottle',
      href: '#',
      desc: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      imageSrc: '/images/asp.webp',
      imageAlt:
        'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      title: 'Nomad Tumbler',
      href: '#',
      desc: '$35',
      imageSrc: '/images/asp.webp',
      imageAlt:
        'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      title: 'Focus Paper Refill',
      href: '#',
      desc: '$89',
      imageSrc: '/images/asp.webp',
      imageAlt:
        'Person using a pen to cross a task off a productivity paper card.',
    },
  ];
  const servicesCards = [
    {
      image: '/images/git.webp',
      cardHeading: 'Installation and Initial Server Setup Assistance',
      col: 4,
    },
    {
      image: '/images/server.webp',
      cardHeading: 'Server Hardening',
      col: 4,
    },
    {
      image: '/images/cloud-computing.webp',
      cardHeading: 'Server Optimization',
      col: 4,
    },
    {
      image: '/images/cpanel.svg',
      cardHeading: 'Migration Assistance',
      col: 4,
    },
    {
      image: '/images/optimization.webp',
      cardHeading: 'Server Monitoring',
      col: 4,
    },
    {
      image: '/images/chatbot.webp',
      cardHeading: 'Automate the server using tools such as Ansible, chef',
      col: 4,
    },
    {
      image: '/images/hacker.webp',
      cardHeading: 'Hack & Spamming Issue Investigation',
      col: 4,
    },
    {
      image: '/images/training.webp',
      cardHeading: 'Industrial Training',
      col: 4,
    },
    {
      image: '/images/app-development.webp',
      cardHeading: 'App development',
      col: 4,
    },
    {
      image: '/images/world-wide-web.webp',
      cardHeading: 'Web development',
      col: 4,
    },
  ];

  return (
    <>
      <Nav />
      <Services projects={projects} cards={servicesCards} />
      <Footer />
    </>
  );
};

export default services;
