import About from '@/layout/About';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
const aboutUs = () => {
  return (
    <>
      <Nav />
      <div className="bg-[#f6f6f6]">
        <About />
      </div>
      <Footer />
    </>
  );
};

export default aboutUs;
