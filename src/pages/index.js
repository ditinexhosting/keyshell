import Image from 'next/image';
import { Inter } from 'next/font/google';

import Body from '@/layout/Home';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const projects = [
    {
      id: 1,
      title: 'Swipe Crush',
      href: 'https://play.google.com/store/apps/details?id=com.swipecrush',
      desc: 'React Native App',
      imageSrc: '/images/projects/swipe-crush.jpg',
      imageAlt:
        'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      title: 'Safe Path',
      href: ' https://play.google.com/store/apps/details?id=com.ditinex.safepath',
      desc: '$35',
      imageSrc: '/images/projects/safepath.png',
      imageAlt:
        'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      title: 'Classified',
      href: 'https://classifiled.com/',
      desc: 'React Native App',
      imageSrc: '/images/projects/classfied.png',
      imageAlt:
        'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      title: 'UAE Storage',
      href: 'https://admin.uaestorages.com',
      desc: 'React Native App',
      imageSrc: '/images/projects/UAE.png',
      imageAlt:
        'Person using a pen to cross a task off a productivity paper card.',
    },
  ];
  return (
    <>
      <meta charSet="UTF-8" />
      <title>Keyshell</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Keyshell - Empowering Your Business with Innovative IT Solutions"
      />
      <meta
        name="keywords"
        content="Keyshell, IT Solutions, Business, Innovation"
      />
      <meta name="author" content="Keyshell" />
      <Body projects={projects} />
    </>
  );
}
