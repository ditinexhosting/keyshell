import Image from 'next/image';
import Contact from './Contact';

const index = () => {
  return (
    <>
      <main className="container mx-auto my-10 text-secondary px-5">
        <h1 className="text-4xl md:text-7xl font-bold">Mobile Learning App</h1>
        <div className="flex items-center gap-2 justify-start my-5">
          <div className="rounded-full border-2 text-sm p-2 px-4 shrink-0">
            Android
          </div>
          <div className="rounded-full border-2 text-sm p-2 px-4 shrink-0">
            iso
          </div>
          <div className="rounded-full border-2 text-sm p-2 px-4 shrink-0">
            iso
          </div>
          <div className="w-full h-[2px] bg-gray-400 hidden md:block mx-2"></div>
        </div>
        <div className="flex items-start  mx-auto  sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-primary text-2xl title-font font-bold mb-5 text-justify">
              The Problem
            </h2>
            <p className="leading-relaxed text-base text-justify">
              In today's fast-paced business environment, keeping your employees
              up-to-date with the latest knowledge and skills is crucial to
              maintaining a competitive edge. That's why at Keyshell, we offer a
              mobile learning app solution that empowers your workforce with
              anytime, anywhere access to learning materials. <br />
              <br />
              Our mobile learning app solution is customized to meet the
              specific needs of your business and industry. Our team of
              experienced developers and instructional designers work closely
              with you to create engaging and interactive content that aligns
              with your learning objectives.
            </p>
            <div className="mt-10">
              <h2 className="text-primary text-2xl title-font font-bold mb-5 text-justify">
                The Solution
              </h2>
              <p className="leading-relaxed text-base text-justify">
                Some of the key features of our mobile learning app solution
                include:
              </p>
              <ul>
                <li className="my-5 text-justify">
                  <h3 className="text-primary font-bold text-md inline text-justify mr-2">
                    Customized Content:
                  </h3>
                  We create customized content that is tailored to your business
                  needs and industry-specific requirements. Interactive
                  Learning: Our mobile learning app features interactive
                  learning modules, including quizzes, games, and simulations,
                  to keep learners engaged and motivated.
                </li>
                <li className="my-5 text-justify">
                  <h3 className="text-primary font-bold text-md inline text-justify mr-2">
                    Progress Tracking:
                  </h3>
                  Our app allows learners to track their progress and receive
                  personalized feedback, ensuring that they stay on track and
                  meet their learning objectives.
                </li>
                <li className="my-5 text-justify">
                  <h3 className="text-primary font-bold text-md inline text-justify mr-2">
                    Offline Access:
                  </h3>
                  Our mobile learning app allows learners to access learning
                  materials even without an internet connection, making it
                  convenient for employees who are always on the go.
                </li>
                <li className="my-5 text-justify">
                  <h3 className="text-primary font-bold text-md inline text-justify mr-2">
                    Analytics and Reporting:
                  </h3>
                  Our app provides in-depth analytics and reporting features to
                  help you track learner performance, identify knowledge gaps,
                  and make data-driven decisions.
                </li>
              </ul>
              <p className='text-justify'>
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
    </>
  );
};

export default index;
