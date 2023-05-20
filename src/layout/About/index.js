import Image from 'next/image';
const index = () => {
  return (
    <>
      <section className="container mx-auto py-5">
        <div className="flex justify-between flex-col md:flex-row">
          <div className="flex-1 p-5">
            <div className="flex justify-between items-center">
              <a href="#">
                <h3 className="text-4xl text-primary font-bold">
                  About team <br /> Keyshell
                </h3>
              </a>
              <div className="border-2 rounded-full p-2 border-black">
                <svg
                  width="61"
                  height="61"
                  viewBox="0 0 61 61"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="12.728"
                    y="15.2928"
                    width="4"
                    height="43"
                    transform="rotate(-45 12.728 15.2928)"
                    fill="#1C1C1C"
                  />
                  <rect
                    x="42.2842"
                    y="18.2635"
                    width="4"
                    height="28"
                    fill="#1C1C1C"
                  />
                  <rect
                    x="18.2637"
                    y="46.2842"
                    width="4"
                    height="28"
                    transform="rotate(-90 18.2637 46.2842)"
                    fill="#1C1C1C"
                  />
                </svg>
              </div>
            </div>
            <p className="text-gray-700 mt-5">
              Welcome to our IT company, where we specialize in providing
              cutting-edge solutions that can transform your business. Our team
              of experts is passionate about empowering businesses of all sizes
              with innovative technology that can help them stay ahead of the
              competition.
              <br />
              <br />
              From custom software development to cloud computing and
              cybersecurity solutions, we offer a wide range of services that
              are tailored to meet the unique needs of each of our clients.
              Whether you're looking to streamline your operations, increase
              efficiency, or enhance your online presence, we've got you
              covered.
              <br />
              <br />
              At our IT company, we pride ourselves on delivering high-quality
              solutions that are backed by exceptional customer service. We work
              closely with our clients to understand their business goals and
              objectives, and then develop customized solutions that help them
              achieve those goals.
            </p>
          </div>
          <div className="flex flex-1 p-5">
            <div>
              <h3 className="text-4xl text-primary font-bold">
                What makes us special
              </h3>
              <p className="text-gray-700 mt-5 py-5">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
                <br /> <br />
                Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo.
                <br /> <br />
                At our IT company, we pride ourselves on delivering high-quality
                solutions that are backed by exceptional customer service. We
                work closely with our clients to understand their business goals
                and objectives, and then develop customized solutions that help
                them achieve those goals.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                30k
              </h2>
              <p className="leading-relaxed">Project Completed</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                70k
              </h2>
              <p className="leading-relaxed">Clients</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                100k
              </h2>
              <p className="leading-relaxed">Customers</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                4
              </h2>
              <p className="leading-relaxed">Products</p>
            </div>
          </div>
        </div>
      </section>

      <div className="Text h-auto w-full py-10">
        <h2 className="text-center font-bold text-2xl md:text-4xl text-secondary">
          Empower Your Learning with Keyshell
        </h2>
      </div>
      <section className="pt-5 px-5 sm:px-10 lg:px-20">
        <div className="min-h-[350px] w-full flex flex-col md:flex-row justify-center items-center gap-x-5 lg:gap-x-0">
          <div className="left h-[320px] sm:h-[350px] w-full md:w-2/5 flex justify-center items-center">
            <Image
              src="/images/code-typing.webp"
              alt="variety"
              height={290}
              width={320}
              className="h-[290px] sm:h-[320px] w-[290px] sm:w-[320px]"
            />
          </div>

          <div className="right min-h-[240px] md:h-[350px] w-full md:w-2/5 flex justify-center items-center">
            <p className="font-semibold text-lg md:text-xl text-secondary max-w-[350px]">
              We offer a wide range of courses in various programming languages,
              from beginner to advanced levels. Whether you're just starting out
              or looking to deepen your knowledge, we have something for
              everyone.
            </p>
          </div>
        </div>
      </section>
      <section className="py-5 px-5 sm:px-10 lg:px-20">
        <div className="min-h-[350px] w-full flex flex-col-reverse md:flex-row justify-center items-center gap-x-5 lg:gap-x-0">
          <div className="left min-h-[240px] md:h-[350px] w-full md:w-2/5 flex justify-center items-center">
            <p className="font-semibold text-lg sm:text-xl text-secondary max-w-[350px]">
              At Keyshell, our mission is to make high-quality coding education
              accessible to everyone, regardless of their background or
              experience level. Our team is made up of dedicated and experienced
              educators, developers, and designers.
            </p>
          </div>

          <div className="right h-[350px] w-full md:w-2/5 flex justify-center items-center">
            <Image
              src="/images/medal.png"
              alt="variety"
              height={290}
              width={320}
              className="h-[290px] sm:h-[320px] w-[290px] sm:w-[320px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
