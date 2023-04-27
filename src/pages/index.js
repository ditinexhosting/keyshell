import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '../components/Nav'
import Main from '../components/Main'
import Footer from '../components/Footer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Nav />
      <Main />
      <Footer />
    </>
  )
}
