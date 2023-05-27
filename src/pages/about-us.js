import About from '@/layout/About';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Analytics from '@/components/Analytics';
const aboutUs = () => {
  return (
    <>
      <Analytics />
      <Nav />
      <div className="bg-[#f6f6f6]">
        <About />
      </div>
      <Footer />
    </>
  );
};

export default aboutUs;
