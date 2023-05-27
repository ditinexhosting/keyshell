import Image from 'next/image';
import { Inter } from 'next/font/google';
import Analytics from '@/components/Analytics';
import Body from '@/layout/Home';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
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
      <Analytics />
      <Body projects={projects} />
    </>
  );
}
