import Services from '@/layout/Services';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Analytics from '@/components/Analytics';
const services = () => {
  const projects = [
    {
      id: 1,
      title: 'Swipe Crush',
      href: 'https://play.google.com/store/apps/details?id=com.swipecrush',
      desc: 'React Native App : Dating App to locate nearby people who have crush on you. ',
      imageSrc: '/images/projects/swipe-crush.jpg',
      imageAlt: 'Swipe Crush',
    },
    {
      id: 2,
      title: 'Safe Path',
      href: ' https://play.google.com/store/apps/details?id=com.ditinex.safepath',
      desc: 'React Native App : Map of mine which will generate shortest path to nearest safe point in case of accident',
      imageSrc: '/images/projects/safepath.png',
      imageAlt: 'Safe Path',
    },
    {
      id: 3,
      title: 'Classified',
      href: 'https://classifiled.com/',
      desc: 'Wordpress Site :  A modern way of managing your digital documents. ',
      imageSrc: '/images/projects/classfied.png',
      imageAlt: 'Classified',
    },
    {
      id: 4,
      title: 'UAE Storage',
      href: 'https://admin.uaestorages.com',
      desc: 'React JS Dashboard : Dashboard for analytics of shipping company.',
      imageSrc: '/images/projects/UAE.png',
      imageAlt: 'UAE Storage',
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
  const sectionsList = [
    {
      id: 1,
      title: 'Web Development',
      url: '/campaign/web-development',
      description:
        'As a design development agency for both web and mobile applications, our specialists have analytical skills to organize complex user flows for easy use of the final product. We create innovative and functional UX/UI design solutions for web and mobile applications of any complexity. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',

      images: [
        '/images/services/image-1.png',
        '/images/services/image-2.png',
        '/images/services/image-3.png',
        '/images/services/image-4.png',
        '/images/services/image-5.png',
      ],
    },
    {
      id: 2,
      title: 'Mobile App Development',
      url: '/campaign/mobile-app-development',
      description:
        'Our mobile app development services help businesses create powerful and engaging applications for iOS and Android platforms. We combine cutting-edge technology with user-centric design to deliver high-performance mobile apps that meet your business goals. Whether you need a native app, a cross-platform solution, or a mobile web app, our team of experienced developers can turn your ideas into reality. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

      images: [
        '/images/services/mobile-app-image-1.png',
        '/images/services/mobile-app-image-2.png',
        '/images/services/mobile-app-image-3.png',
        '/images/services/mobile-app-image-4.png',
        '/images/services/mobile-app-image-5.png',
      ],
    },
    {
      id: 3,
      title: 'DevOps Services',
      url: '/campaign/devops-services',
      description:
        'Our DevOps services help organizations streamline their software development and delivery processes, enabling faster time to market and improved efficiency. We employ industry best practices and cutting-edge tools to automate infrastructure provisioning, continuous integration, and continuous deployment. With our DevOps expertise, your team can focus on innovation and delivering value to your customers. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

      images: [
        '/images/services/devops-image-1.png',
        '/images/services/devops-image-2.png',
        '/images/services/devops-image-3.png',
        '/images/services/devops-image-4.png',
        '/images/services/devops-image-5.png',
      ],
    },
  ];
  return (
    <>
      <Analytics />
      <Nav />
      <Services
        projects={projects}
        cards={servicesCards}
        sectionsList={sectionsList}
      />
      <Footer />
    </>
  );
};

export default services;
