import Image from 'next/image';
const index = () => {
  return (
    <section className="text-secondary body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex items-center  mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
          <div className="sm:mr-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-white flex-shrink-0">
            <Image
              src="/images/react.svg"
              height={250}
              width={250}
              alt="react Dev"
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-primary text-2xl title-font font-bold mb-5">
              KeyShell React Web App Development
            </h2>
            <p className="leading-relaxed text-base">
              KeyShell, a renowned company in software development, embraces
              React as a pivotal technology for building dynamic and interactive
              web applications. With React's component-based architecture and
              virtual DOM, our team at KeyShell leverages its power to create
              seamless user experiences and optimize performance.
              <br />
              <br />
              By harnessing React's robust ecosystem of libraries and tools, we
              craft scalable and highly responsive applications that cater to
              the unique needs of our clients. With a deep understanding of
              React's core principles, our skilled developers at KeyShell ensure
              clean and maintainable code, enabling faster development cycles
              and effortless code reuse.
              <br />
              <br />
              Trust KeyShell to deliver exceptional React applications that
              empower businesses and engage users in the digital landscape.
            </p>
          </div>
        </div>
        <div className="flex items-center  mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-primary text-2xl title-font font-bold mb-5">
              KeyShell Mobile  App Development
            </h2>
            <p className="leading-relaxed text-base">
              KeyShell is a leading company specializing in the development of
              cutting-edge applications, with a particular focus on Flutter. As
              technology continues to evolve rapidly, our team at KeyShell is at
              the forefront, leveraging the power of Flutter to create
              exceptional mobile applications.
              <br />
              <br />
              Flutter's robust framework allows us to build beautiful,
              responsive, and highly performant applications for both iOS and
              Android platforms. With a team of skilled Flutter developers,
              designers, and QA professionals, we have successfully delivered
              numerous projects that have surpassed client expectations
              <br />
              <br />
              At KeyShell, we believe in staying ahead of the curve by embracing
              innovative technologies like Flutter, ensuring that our clients
              receive top-notch applications that elevate their businesses and
              engage their users
            </p>
          </div>
          <div className=" order-first sm:order-none sm:ml-10 inline-flex items-center justify-center rounded-full  bg-white flex-shrink-0">
            <Image
              src="/images/app-development.png"
              height={250}
              width={250}
              alt="App Developement"
            />
          </div>
        </div>
        <div className="flex items-center  mx-auto sm:flex-row flex-col">
          <div className="sm:mr-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-white flex-shrink-0">
            <Image
              src="/images/Mean.jpg"
              height={250}
              width={450}
              alt="Mean Developement"
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-primary text-2xl title-font font-bold mb-5">
              Mean Stock Development
            </h2>
            <p className="leading-relaxed text-base">
              Mean Stock Development is a forward-thinking company specializing
              in the development and implementation of advanced stock trading
              solutions. With our team of experienced developers and financial
              experts, we harness the power of cutting-edge technologies to
              create robust and efficient platforms for analyzing market trends,
              executing trades, and managing investment portfolios.
              <br />
              <br />
              Utilizing the MEAN stack - MongoDB, Express.js, Angular, and
              Node.js - we deliver high-performance, scalable, and user-friendly
              stock trading applications that empower traders and investors to
              make informed decisions in real-time. Our commitment to staying
              ahead of market dynamics and leveraging the latest advancements in
              technology ensures that Mean Stock Development remains at the
              forefront of stock trading innovation, providing our clients with
              the tools they need to thrive in the ever-changing financial
              landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
