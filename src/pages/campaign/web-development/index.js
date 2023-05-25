import Campaign from '@/components/Campaign';
import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
const index = () => {
  return (
    <>
      <Nav />
      <main className="container mx-auto my-10 text-secondary px-5">
        <h1 className="text-4xl md:text-7xl font-bold md:mb-10 mb-5">
          Introducing our Extraordinary Website Experience
        </h1>
        <div className="flex items-start  mx-auto  sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <div className="flex items-baseline justify-between mb-5">
              <h2 className="text-primary text-2xl title-font font-bold mb-5 text-justify">
                Cutting-Edge Web Solutions
              </h2>
              <a href='#contact' className="hover:text-primary hover:bg-white font-bold text-md border-2 border-primary rounded-full px-3 py-2 text-white bg-primary pointer transition-colors">
                Book a Call
              </a>
            </div>
            <p className="leading-relaxed text-base text-justify">
              At our cutting-edge website, we excel in providing unmatched web
              application development services.
              <br /> <br />
              Our team of highly skilled professionals, Project managers,
              developers, UX designers,quality tester,analysts who collaborates
              seamlessly to deliver exceptional web app development solutions.
              We are dedicated to surpassing your expectations and providing you
              with a truly remarkable online experience.
              <br /> <br />
              In the ever-evolving field of web application development, we stay
              ahead of the curve. Our team stays abreast of the latest industry
              trends and developments, ensuring that our clients receive
              state-of-the-art solutions. Whether you require web application
              development, mobile web development, or the expertise of our
              talented website and app developers, we have the knowledge and
              experience to meet your specific needs. Our commitment to
              continuous learning and adoption of the latest technologies
              guarantees that our clients always receive top-notch solutions
              tailored to their unique requirements.
            </p>
            <div className="mt-10">
              <h2 className="text-primary text-2xl title-font font-bold mb-5 text-justify">
                The Process of Building Your Dream Website
              </h2>
              {/* <p className="leading-relaxed text-base text-justify">
                Some of the key features of our mobile learning app solution
                include:
              </p> */}
              <ul>
                <li className="my-5 text-justify">
                  <h3 className="text-primary font-bold text-md inline text-justify mr-2">
                    Discovery and Planning:
                  </h3>
                  We work closely with you to understand your goals, conduct a
                  thorough needs assessment, and create a comprehensive project
                  plan for custom web application development services.
                </li>
                <li className="my-5 text-justify">
                  <h3 className="text-primary font-bold text-md inline text-justify mr-2">
                    Research and Design:
                  </h3>
                  Leveraging in-depth industry research, we create visually
                  stunning designs that are perfectly aligned with your brand
                  and target audience. Our expertise as the best web and mobile
                  app development company ensures that your website meets the
                  highest standards.
                </li>
                <li className="my-5 text-justify">
                  <h3 className="text-primary font-bold text-md inline text-justify mr-2">
                    Development and Optimization:
                  </h3>
                  Our skilled team utilizes the latest technologies to build a
                  responsive and optimized website, ensuring seamless
                  performance across all devices and platforms. We specialize in
                  developing custom web applications and employ expert app
                  developers for websites.
                </li>
                <li className="my-5 text-justify">
                  <h3 className="text-primary font-bold text-md inline text-justify mr-2">
                    Content Creation and Promotion:
                  </h3>
                  We go beyond aesthetics and craft engaging, SEO-optimized
                  content that captivates your audience. Our team understands
                  the importance of app design and develops mobile apps that
                  complement your website, enhancing user experience.
                  Additionally, we implement effective marketing strategies to
                  drive traffic and enhance your online visibility.
                </li>
                <li className="my-5 text-justify">
                  <h3 className="text-primary font-bold text-md inline text-justify mr-2">
                    Quality Assurance and Launch:
                  </h3>
                  Prior to the launch, we perform rigorous testing to ensure a
                  bug-free, smooth website experience. Our meticulous attention
                  to detail guarantees a flawless launch for your web and mobile
                  applications.
                </li>
                <li className="my-5 text-justify">
                  <h3 className="text-primary font-bold text-md inline text-justify mr-2">
                    Training and Ongoing Support:
                  </h3>
                  We provide comprehensive training, ongoing maintenance, and
                  continuous support to keep your website, web applications, and
                  mobile apps up-to-date and running smoothly. As a leading app
                  developer and web design company, our team is always available
                  to assist you with any queries or updates.
                </li>
              </ul>
              <p className="text-justify">
                At Keyshell we understand that every business has unique
                learning needs. That's why we offer a customized mobile learning
                app solution that is tailored to your specific requirements.
                Whether you're looking to onboard new employees, train existing
                staff, or upskill your workforce, our team of experts is here to
                help.
              </p>
            </div>
          </div>
          <div className=" order-first sm:order-none sm:ml-10 inline-flex items-center justify-center rounded-full  bg-white flex-shrink-0">
            <Image
              src="/images/campaign/image_processing.png"
              height={400}
              width={400}
              alt="App Developement"
              className="rounded"
            />
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default index;
