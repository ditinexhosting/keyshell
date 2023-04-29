import Image from 'next/image';
import { Inter } from 'next/font/google';

import Body from '@/layout/Body';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <meta charSet="UTF-8" />
      <title>Keyshell</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Keyshell - Empowering Your Business with Innovative IT Solutions" />
      <meta name="keywords" content="Keyshell, IT Solutions, Business, Innovation" />
      <meta name="author" content="Keyshell" />
      <Body />
    </>
  );
}
