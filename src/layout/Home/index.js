import Card from '@/components/Card';
import Image from 'next/image';
import Accordion from '@/components/Accordion';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Project from './Project';
import Services from './Services';
import { useState } from 'react';
import axios from 'axios';
const index = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create the payload object
    const payload = {
      name,
      email,
      phone,
      subject,
      message,
    };

    if (Object.values(payload).some((value) => value === '')) {
      alert('Fields are empty. Cannot submit the form.');
      return;
    }
    axios
      .post('https://www.keyshell.net/mail/email.php', payload)
      .then((response) => {
        // Handle the response if needed
        console.log(response);
        alert('Sucess');
      })
      .catch((error) => {
        // Handle errors if any
        console.error(error);
        alert('Someting Went Wrong');
      });
  };
  return (
    <>
      <div className="h-auto w-full bg-gray-200 flex justify-between gap-5 px-6 md:px-11 items-center py-[5px] sm:py-[6px] shadow-lg">
        <div className="flex flex-wrap gap-y-0 gap-x-5 items-start md:items-center">
          <div className="flex items-center gap-2">
            <span>
              <Image
                src="/images/phone-call.png"
                alt="call"
                height={30}
                width={30}
              />
              <i className="fa-solid fa-phone-volume pt-[2px] text-primary text-xs md:text-base"></i>
            </span>
            <p className="font-semibold text-xs md:text-base text-secondary">
              +91 8867676785
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span>
              <Image src="/images/mail.png" alt="call" height={30} width={30} />
              <i className="fa-solid fa-envelope text-primary text-xs md:text-base"></i>
            </span>
            <p className="font-semibold text-xs md:text-base text-secondary">
              keyshellitsolutions@gmail.com
            </p>
          </div>
        </div>
      </div>
      <Nav />
      <main className="container mx-auto bg-white">
        <div className="text-black p-4 md:p-0">
          <h1 className=" text-5xl lg:text-[7rem] leading-none font-extrabold mt-9 ">
            <span className="text-primary">Empowering</span> Your Business with
            Innovative IT Solutions
          </h1>
          <div className="flex justify-between py-11 flex-col lg:flex-row gap-5 lg:gap-0">
            <p className="text-lg font-semibold max-w-2xl">
              From custom software development to cloud computing and
              cybersecurity solutions, we offer a wide range of services that
              are tailored to meet the unique needs of each of our clients.
              We've got you covered!
            </p>
            <div className="">
              <a
                className="rounded-lg bg-primary p-3 px-5 font-bold text-lg text-white flex justify-center items-center gap-4 shadow-md hover:shadow-2xl transition-all w-min"
                href="#contact"
              >
                Get a <br />
                Quote
                <svg
                  className="animate-[spin_2s_linear_infinite]"
                  width="42"
                  height="39"
                  viewBox="0 0 42 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.7572 1.57911C19.9824 0.52425 21.4878 0.524246 21.713 1.5791L23.7901 11.3047C23.9337 11.9771 24.6974 12.3073 25.2857 11.9514L34.3928 6.4418C35.3387 5.86956 36.3767 7.02861 35.704 7.9059L29.83 15.5664C29.3714 16.1646 29.7142 17.0358 30.4574 17.161L40.6181 18.8731C41.7298 19.0605 41.7298 20.658 40.6181 20.8453L30.4574 22.5574C29.7142 22.6826 29.3714 23.5539 29.83 24.152L35.704 31.8125C36.3766 32.6898 35.3387 33.8489 34.3928 33.2766L25.2857 27.767C24.6974 27.4111 23.9337 27.7413 23.7901 28.4137L21.713 38.1393C21.4878 39.1942 19.9824 39.1942 19.7572 38.1393L17.6801 28.4137C17.5365 27.7413 16.7728 27.4111 16.1845 27.767L7.07743 33.2766C6.13154 33.8489 5.09355 32.6898 5.76624 31.8125L11.6402 24.152C12.0988 23.5539 11.756 22.6826 11.0128 22.5574L0.852148 20.8453C-0.259639 20.658 -0.259639 19.0605 0.852148 18.8731L11.0128 17.161C11.756 17.0358 12.0988 16.1646 11.6402 15.5664L5.76625 7.9059C5.09355 7.02861 6.13155 5.86956 7.07743 6.44181L16.1845 11.9514C16.7728 12.3073 17.5365 11.9771 17.6801 11.3047L19.7572 1.57911Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <section className="bg-secondary px-5 mx-2 rounded-xl py-10 mt-10 md:mt-20">
          <div className="flex justify-between flex-col md:flex-row gap-5 mb-5">
            <div className="flex flex-col">
              <h2 className="text-3xl md:text-5xl font-bold uppercase text-light-border">
                Our Services <span className="text-primary">.</span>
              </h2>
              <p className="text-gray-white max-w-lg">
                Every one of us loves something different. So, explore the world
                through the lens of our visual capabilitie, and find what you
                love
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <button className="border-2 border-primary rounded-full px-4 py-1 text-primary">
                  Web Development
                </button>
                <button className="border-2 border-light-border rounded-full px-4 py-1 text-light-border">
                  AI
                </button>
              </div>
              <div className="flex gap-3">
                <button className="border-2 border-light-border rounded-full px-4 py-1 text-light-border">
                  ML
                </button>
                <button className="border-2 border-light-border rounded-full px-4 py-1 text-light-border">
                  DevOps Services
                </button>
              </div>
            </div>
          </div>

          <div>
            <Accordion
              sections={[
                {
                  title: 'Web Development',
                  content: (
                    <div className="flex justify-around items-center flex-col md:flex-row gap-5 ">
                      <div className="flex flex-col gap-3">
                        <div className="flex gap-3">
                          <button className="border-2 border-light-border rounded-full px-4 py-1 text-light-border shrink-0">
                            Reactjs
                          </button>
                          <button className="border-2 border-gray-white rounded-full px-4 py-1 text-gray-white shrink-0">
                            Nodejs
                          </button>
                        </div>
                        <div className="flex gap-3">
                          <button className="border-2 border-gray-white rounded-full px-4 py-1 text-gray-white shrink-0">
                            Nextjs
                          </button>
                          <button className="border-2 border-gray-white rounded-full px-4 py-1 text-gray-white shrink-0">
                            Laravel
                          </button>
                        </div>
                      </div>
                      <p className="text-white max-w-xl">
                        KeyShell is a company that specializes in innovative IT
                        solutions, including web development, to help businesses
                        thrive in the digital world. Their team of experts
                        provides tailor-made solutions to clients to meet their
                        unique needs, delivering results that help businesses
                        grow and succeed.
                      </p>
                    </div>
                  ),
                },
                {
                  title: 'Mobile App Development',
                  content: (
                    <div className="flex justify-around items-center flex-col md:flex-row gap-5 ">
                      <div className="flex flex-col gap-3">
                        <div className="flex gap-3">
                          <button className="border-2 border-light-border rounded-full px-4 py-1 text-light-border shrink-0">
                            React Native
                          </button>
                          <button className="border-2 border-gray-white rounded-full px-4 py-1 text-gray-white shrink-0">
                            Flutter
                          </button>
                        </div>
                      </div>
                      <p className="text-white max-w-xl">
                        KeyShell provides innovative mobile app development
                        solutions for businesses looking to expand their reach
                        in the digital world. Our team of expert developers
                        delivers custom-made applications that are user-friendly
                        and responsive, helping you connect with your customers
                        on any device. From strategy and design to deployment
                        and maintenance, we offer end-to-end mobile app
                        development services tailored to your unique business
                        needs.
                      </p>
                    </div>
                  ),
                },
                {
                  title: 'DevOps Services',
                  content: (
                    <p>
                      DevOps is a software development methodology that combines
                      the best practices of development and operations teams to
                      improve collaboration, communication, and productivity. It
                      emphasizes automation, continuous integration, and
                      continuous delivery to enable faster and more frequent
                      releases of high-quality software. With DevOps,
                      organizations can achieve faster time-to-market, reduced
                      development costs, and increased customer satisfaction.
                      DevOps also helps to create a culture of collaboration and
                      innovation, where developers and operations teams work
                      together to deliver better software and services.
                    </p>
                  ),
                },
                {
                  title: 'Blockchain Technology',
                  content: (
                    <p>
                      Blockchain technology is a decentralized, secure, and
                      transparent way of storing and exchanging data. It's a
                      distributed ledger that records transactions across a
                      network of computers, making it virtually impossible to
                      tamper with or hack. Blockchain has become increasingly
                      popular due to its use in cryptocurrency transactions, but
                      its potential applications are much broader. It can be
                      used in supply chain management, healthcare, identity
                      verification, and voting systems, to name a few.
                      Blockchain technology has the potential to revolutionize
                      many industries by providing a secure and efficient way to
                      exchange information and value.
                    </p>
                  ),
                },
                {
                  title: 'Artificial Intelligence',
                  content: (
                    <p>
                      AI or Artificial Intelligence is the simulation of human
                      intelligence in machines that are programmed to learn,
                      reason, and self-correct. AI is used to create intelligent
                      machines that can perform tasks without human
                      intervention. It includes machine learning, natural
                      language processing, robotics, and expert systems. AI
                      technology is widely used in various fields such as
                      healthcare, finance, education, and manufacturing. It has
                      the potential to transform the way we live and work, by
                      enabling us to make better decisions, improve efficiency,
                      and create new opportunities.
                    </p>
                  ),
                },
                {
                  title: 'Machine Learning',
                  content: (
                    <p>
                      Machine learning (ML) is a type of artificial intelligence
                      (AI) that allows computers to learn and improve from
                      experience without being explicitly programmed. ML
                      algorithms analyze data, recognize patterns, and make
                      predictions or decisions based on that data. This
                      technology has many practical applications, such as image
                      and speech recognition, natural language processing,
                      predictive analytics, and more. ML is becoming
                      increasingly important in many industries, including
                      finance, healthcare, and e-commerce. With its ability to
                      automate decision-making processes and identify hidden
                      patterns, ML has the potential to revolutionize the way
                      businesses operate.
                    </p>
                  ),
                },
              ]}
            />
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
                  <div className="card h-36 w-full md:w-[330px] flex flex-col gap-2 p-5 bg-primary">
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
                <Image
                  height={100}
                  width={100}
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
                <Image
                  height={100}
                  width={100}
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
                <Image
                  height={100}
                  width={100}
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
                <Image
                  height={100}
                  width={100}
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
                <Image
                  height={100}
                  width={100}
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
                <Image
                  height={100}
                  width={100}
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

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                Project Portfolio
              </h1>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-primary inline-flex" />
              </div>
            </div>
            <Project projects={props.projects} />
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
          <Services />
        </section>
        <section className="text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                Our Clients
              </h1>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-primary inline-flex" />
              </div>
              <div className="flex justify-evenly items-center mt-5 flex-col md:flex-row gap-5 flex-wrap">
                <Image
                  src="/images/client/client-1.png"
                  height={100}
                  width={160}
                  alt="clients"
                />
                <Image
                  src="/images/client/client-2.jpg"
                  height={100}
                  width={160}
                  alt="clients"
                />
                <Image
                  src="/images/client/client-3.png"
                  height={100}
                  width={160}
                  alt="clients"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="contact">
          <div className="grid ">
            <div className="bg-primary h-72 flex items-center justify-center">
              <div className="flex flex-col max-w-4xl items-center justify-center">
                <div className=" text-white text-4xl font-bold">Contact Us</div>
                <div className="m-2 text-white ">
                  Contact us by filling this contact form.
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="bg-white h-auto flex justify-center items-center">
                <div className="h-auto bg-white -mt-20 w-[80%] md:w-1/2 text-stone-700 font-medium shadow-lg relative p-4">
                  <div className="m-4 font-bold">Your Name</div>
                  <input
                    placeholder="John Doe"
                    className="border-2 border-gray-400 h-10 w-full text-gray-900 rounded p-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <div className="m-4 font-bold">Your E-mail Address</div>
                  <input
                    placeholder="email@keyshell.net"
                    className="border-2 border-gray-400 h-10 w-full text-gray-900 rounded p-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <div className="m-4 font-bold">Phone Number</div>
                  <input
                    placeholder="123-456-7890"
                    className="border-2 border-gray-400 h-10 w-full text-gray-900 rounded p-2"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  <div className="m-4 font-bold">Subject</div>
                  <input
                    className="border-2 border-gray-400 h-10 w-full text-gray-900 rounded p-2"
                    placeholder="Enquiry"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />

                  <div className="m-4 font-bold">How can we help?</div>
                  <textarea
                    className="border-2 border-gray-400 h-20 w-full text-gray-900 rounded p-2"
                    placeholder="Details Overview"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>

                  <button
                    type="submit"
                    className="bg-primary p-2 px-5 rounded-lg m-4 text-white w-max font-normal hover:bg-red-700 cursor-pointer"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default index;
