import Card from '@/components/Card';
import Image from 'next/image';
import Nav from '@/components/Nav';

import Footer from '@/components/Footer';
import { useState } from 'react';
const index = () => {
  return (
    <>
      <div className="h-auto w-full bg-gray-200 flex justify-between gap-5 px-6 md:px-11 items-center py-[5px] sm:py-[6px] shadow-lg">
        <div className="flex flex-wrap gap-y-0 gap-x-5 items-start md:items-center">
          <div className="flex items-center gap-2">
            <span>
              <i className="fa-solid fa-phone-volume pt-[2px] text-primary text-xs md:text-base"></i>
            </span>
            <p className="font-semibold text-xs md:text-base text-[#333]">
              +91 8867676785
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span>
              <i className="fa-solid fa-envelope text-primary text-xs md:text-base"></i>
            </span>
            <p className="font-semibold text-xs md:text-base text-[#333]">
              keyshell3455@gmail.com
            </p>
          </div>
        </div>
      </div>
      <Nav />
      <main className="container mx-auto bg-white">
        <section className="text-black body-font">
          <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col-reverse items-center gap-8">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
                DevOps Services and
                <br className="hidden lg:inline-block" />
                Solutions
              </h1>
              <p className="mb-8 leading-relaxed">
                Our DevOps team helps organizations optimize and streamline
                their software development lifecycle. We offer a range of
                services including integration with cloud, continuous
                integration and continuous delivery (CI/CD), GitOps,
                containerization, DevSecOps, AI/ML
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none rounded-tl-xl rounded-br-xl text-lg">
                  Let’s Talk
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image
                alt="hero"
                src="/images/devopss.png"
                height={1000}
                width={400}
              />
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                What We Offer ?
              </h1>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-primary inline-flex" />
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 justify-center">
              <Card
                image="/images/python.webp"
                cardHeading="Core Python & Utility"
                cardInfo="Python is an interpreted, high-level, general-purpose programming language that emphasizes code readability."
              />
              <Card
                image="/images/aws.webp"
                cardHeading="Amazon Web Services"
                cardInfo="AWS is the most popular and most widely used cloud platform in the world. This course will teach you design principles, including strategies for networking."
              />
              <Card
                image="/images/devops.webp"
                cardHeading="Understanding Devops"
                cardInfo='DevOps is an IT management where Developers have adopted frameworks such as Agile to enable rapid "sprints" of software development '
              />
              <Card
                image="/images/php.webp"
                cardHeading="PHP and its framework"
                cardInfo="Get started with the world's most used server technology. This course will get you started in no time, covering installation, forms management etc."
              />
              <Card
                image="/images/asp.webp"
                cardHeading="ASP.NET for Beginners"
                cardInfo="Learn ASP.NET, one of the most popular web frameworks for building dynamic websites and web applications."
              />
              <Card
                image="/images/linux.webp"
                cardHeading="Linux Redhat"
                cardInfo="Get and keep your skills up to speed on Linux server solutions. You’ll find easy to follow videos whether you’re looking to learn the fundamentals of Linux."
              />
              <Card
                image="/images/mean.webp"
                cardHeading="MEA(R)N Stack"
                cardInfo="Do you want to build advanced applications that render quickly and that are easy to maintain? This course will teach you how to build a full stack application from scratch."
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start">
            <div className="">
              <Image
                src="/images/Server-amico.webp"
                height={200}
                width={400}
                alt="Server"
              />
            </div>
            <div className="flex flex-col md:flex-row w-[70%] space-y-4">
              <div className="">
                <div className="text-3xl font-bold">
                  A <span className="text-primary">revolutionary</span> way to
                  manage servers.
                </div>
                <div className="flex flex-col md:flex-row">
                  <div>
                    <div className="md:p-3">
                      <h3 className="border-l-4 pl-4 border-primary my-5 text-lg font-medium">
                        Faster Deployment
                      </h3>
                      <p>
                        DevOps aims at reducing the software development life
                        cycle, which in turn, enables businesses to deploy their
                        products quickly.
                      </p>
                    </div>
                    <div className="md:p-3">
                      <h3 className="border-l-4 pl-4 border-primary my-5 text-lg font-medium">
                        Improved Collaboration
                      </h3>
                      <p>
                        DevOps provides the much-needed atmosphere to
                        development and operational teams for mutual
                        communication and collaboration
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="md:p-3">
                      <h3 className="border-l-4 pl-4 border-primary my-5 text-lg font-medium">
                        Promotes Agility
                      </h3>
                      <p>
                        With DevOps, it is feasible to acquire the scalability
                        needed to gain a competitive advantage in the market.
                      </p>
                    </div>
                    <div className="md:p-3">
                      <h3 className="border-l-4 pl-4 border-primary my-5 text-lg font-medium">
                        Early Defect Detection
                      </h3>
                      <p>
                        The continuous monitoring and testing environment of
                        DevOps helps in detecting the flaws in the early stages.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                Data Insights
              </h1>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-primary inline-flex" />
              </div>
              <section
                className="px-5 px-10 lg::px-20 py-16 pt-12 flex justify-center items-center"
                id="show"
              >
                <div className="cont min-h-[60vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="card h-44 md:h-[315px] w-full md:w-[330px] flex flex-col gap-5 p-5 bg-[#98AD06] row-span-1 md:row-span-2">
                    <h1 className="font-semibold text-white">
                      Global DevOps Market Forecast (2017-23)
                    </h1>
                    <div className="line1 flex items-center gap-5">
                      <i className="fa-solid fa-arrow-right-long text-white"></i>
                      <p className="font-semibold text-white">
                        USD 9.41 billion by 2023
                      </p>
                    </div>
                    <div className="line1 flex items-center gap-5">
                      <i className="fa-solid fa-arrow-right-long text-white"></i>
                      <p className="font-semibold text-white">18.7% CAGR</p>
                    </div>
                  </div>
                  <div className="card h-36 w-full md:w-[330px] flex flex-col gap-2 p-5 bg-[#F4770B]">
                    <h1 className="font-semibold text-3xl text-white">83%</h1>
                    <h2 className="text-white font-semibold">
                      Of organizations have already implemented Devops as of
                      2021
                    </h2>
                  </div>
                  <div className="card h-36 w-full md:w-[330px] flex flex-col gap-2 p-5 bg-[#664EEF]">
                    <h1 className="font-semibold text-3xl text-white">42%</h1>
                    <h2 className="text-white font-semibold">
                      Sharing DevOps culture across multiple teams within a
                      department
                    </h2>
                  </div>
                  <div className="card h-36 w-full md:w-[330px] flex flex-col gap-2 p-5 bg-[#DAC27D]">
                    <h1 className="font-semibold text-3xl text-white">22%</h1>
                    <h2 className="text-white font-semibold">
                      Minimize time on unplanned work and rework with DevOps
                      Practices
                    </h2>
                  </div>
                  <div className="card h-36 w-full md:w-[330px] flex flex-col gap-2 p-5 bg-[#A94719]">
                    <h1 className="font-semibold text-3xl text-white">200X</h1>
                    <h2 className="text-white font-semibold">
                      Deployment frequency of time with Devops compared to those
                      without
                    </h2>
                  </div>
                  <div className="card h-36 w-full md:w-[330px] flex flex-col gap-2 p-5 bg-[#21C49C]">
                    <h1 className="font-semibold text-3xl text-white">20%</h1>
                    <h2 className="text-white font-semibold">
                      Expected CAGR of DevOps Platform market during 2018-22
                    </h2>
                  </div>
                  <div className="card h-36 w-full md:w-[330px] flex flex-col gap-2 p-5 bg-[#FCA310]">
                    <h1 className="font-semibold text-3xl text-white">440X</h1>
                    <h2 className="text-white font-semibold">
                      Faster lead time for changes with DevOps principles
                    </h2>
                  </div>
                  <div className="card h-36 w-full md:w-[330px] flex flex-col gap-2 p-5 bg-[#F31702]">
                    <h1 className="font-semibold text-3xl text-white">24X</h1>
                    <h2 className="text-white font-semibold">
                      Frequency of faster recovery from failure and minimized
                      downtime with DevOps
                    </h2>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                Industry Use Cases
              </h1>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-primary inline-flex" />
              </div>
            </div>
            <div className="main min-h-[60vh] flex flex-wrap justify-center items-center gap-10">
              <div className="card flex flex-col gap-6 justify-start items-center h-96 w-72 shadow-lg hover:shadow-xl px-5 pt-5">
                <img
                  src="/images/supply-chain.webp"
                  alt="supply chain"
                  className="h-16 w-16 p-1 rounded-full"
                  loading="lazy"
                />
                <h1 className="font-semibold text-2xl">Supply Chain</h1>
                <p className="text-center">
                  Partnered with a San Diego based banking and finance
                  institution to make a smooth transition to agile Cloud
                  infrastructure. This, in turn, improved the scalability and
                  automated infrastructure provisioning.
                </p>
              </div>
              <div className="card flex flex-col gap-6 justify-start items-center h-96 w-72 shadow-lg hover:shadow-xl px-5 pt-5">
                <img
                  src="/images/healthcare.webp"
                  alt="healthcare"
                  className="h-16 w-16 p-1 rounded-full"
                  loading="lazy"
                />
                <h1 className="font-semibold text-2xl">Healthcare</h1>
                <p className="text-center">
                  Worked with a leading healthcare institution to help them
                  manage their operations with our expert DevOps monitoring and
                  support to identify and fix issues and bugs across the range
                  of their internal.
                </p>
              </div>
              <div className="card flex flex-col gap-6 justify-start items-center h-96 w-72 shadow-lg hover:shadow-xl px-5 pt-5">
                <img
                  src="/images/manufacturing.webp"
                  alt="manufacturing"
                  className="h-16 w-16 p-1 rounded-full"
                  loading="lazy"
                />
                <h1 className="font-semibold text-2xl">Manufacturing</h1>
                <p className="text-center">
                  Provided Devops consulting to a leading manufacturing giant to
                  help them evolve their business using cloud. We reachitected
                  their portfolio using our proven RAPADIT framework.
                </p>
              </div>
              <div className="card flex flex-col gap-6 justify-start items-center h-96 w-72 shadow-lg hover:shadow-xl px-5 pt-5">
                <img
                  src="/images/travel.webp"
                  alt="travel"
                  className="h-16 w-16 p-1 rounded-full"
                  loading="lazy"
                />
                <h1 className="font-semibold text-2xl">Travel</h1>
                <p className="text-center">
                  Provided Devops consulting to a leading manufacturing giant to
                  help them evolve their business using cloud. We reachitected
                  their portfolio using our proven RAPADIT framework.
                </p>
              </div>
              <div className="card flex flex-col gap-6 justify-start items-center h-96 w-72 shadow-lg hover:shadow-xl px-5 pt-5">
                <img
                  src="/images/hospitality.webp"
                  alt="hospitality"
                  className="h-16 w-16 p-1 rounded-full"
                  loading="lazy"
                />
                <h1 className="font-semibold text-2xl">Hospitality</h1>
                <p className="text-center">
                  Provided Devops consulting to a leading manufacturing giant to
                  help them evolve their business using cloud. We reachitected
                  their portfolio using our proven RAPADIT framework.
                </p>
              </div>
              <div className="card flex flex-col gap-6 justify-start items-center h-96 w-72 shadow-lg hover:shadow-xl px-5 pt-5">
                <img
                  src="/images/finance.webp"
                  alt="finance"
                  className="h-16 w-16 p-1 rounded-full"
                  loading="lazy"
                />
                <h1 className="font-semibold text-2xl">Finance</h1>
                <p className="text-center">
                  Provided Devops consulting to a leading manufacturing giant to
                  help them evolve their business using cloud. We reachitected
                  their portfolio using our proven RAPADIT framework.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="text-gray-600 mt-20 body-font">
          <div className="container px-5 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                DevOps Tools and Platforms
              </h1>
              <div className="flex mt-6 justify-center mb-20">
                <div className="w-16 h-1 rounded-full bg-primary inline-flex" />
              </div>
              <Image
                height={1080}
                width={1920}
                src="/images/devops-tools-and-automation.webp"
                alt="devops-tools-and-automation"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="grid ">
            <div className="bg-primary h-72 flex items-center justify-center">
              <div className="flex flex-col max-w-4xl items-center justify-center">
                <div className=" text-white text-4xl font-bold">Contact Us</div>
                <div className="m-2 text-white ">
                  Contact us by filling this contact form.
                </div>
              </div>
            </div>
            <div className="bg-white h-auto flex justify-center items-center">
              <div className="h-auto bg-white -mt-20 w-[80%] md:w-1/2 text-stone-700 font-medium shadow-lg relative p-4">
                <div className="m-4 font-bold">Your E-mail Address </div>
                <input
                  placeholder="admin@tailwind.org "
                  className="border-2 border-gray-400 h-10 w-full text-gray-400 rounded p-2"
                />
                <div className="m-4 font-bold">Subject </div>
                <input className="border-2 border-gray-400 h-10 w-full text-gray-400 rounded p-2" />
                <div className="m-4 font-bold">How can we help? </div>
                <input className="border-2 border-gray-400 h-20 w-full text-gray-400 rounded p-2" />
                <div className="bg-primary p-2 m-4 text-white w-max font-normal hover:bg-purple-700 cursor-pointer">
                  SEND
                </div>
              </div>
            </div>
          </div>
          ;
        </section>
      </main>
      <Footer />
    </>
  );
};

export default index;
