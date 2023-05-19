import Image from 'next/image';
import Card from '@/components/Card';

const index = () => {
  const cards = [
    {
      image: '/images/git.webp',
      cardHeading: 'Installation and Initial Server Setup Assistance',
      col: 4,
    },
    {
      image: '/images/server.webp',
      cardHeading: 'Server Hardening',
      col: 4,
    },
    {
      image: '/images/cloud-computing.webp',
      cardHeading: 'Server Optimization',
      col: 4,
    },
    {
      image: '/images/cpanel.svg',
      cardHeading: 'Migration Assistance',
      col: 4,
    },
    {
      image: '/images/optimization.webp',
      cardHeading: 'Server Monitoring',
      col: 4,
    },
    {
      image: '/images/chatbot.webp',
      cardHeading: 'Automate the server using tools such as Ansible, chef',
      col: 4,
    },
    {
      image: '/images/hacker.webp',
      cardHeading: 'Hack & Spamming Issue Investigation',
      col: 4,
    },
    {
      image: '/images/training.webp',
      cardHeading: 'Industrial Training',
      col: 4,
    },
    {
      image: '/images/app-development.webp',
      cardHeading: 'App development',
      col: 4,
    },
    {
      image: '/images/world-wide-web.webp',
      cardHeading: 'Web development',
      col: 4,
    },
  ];

  return (
    <section className="px-5 sm:px-10 lg:px-20 py-14">
      <div className="container min-h-[60vh] flex flex-col md:flex-row justify-center items-center gap-x-10 gap-y-8 sm:gap-y-0">
        <div className="left min-h-96 md:min-h-[60vh] w-full md:w-2/5 flex justify-center items-center">
          <Image
            src="/images/Service 24_7-pana.svg"
            height={80}
            width={80}
            alt="24/7"
            className="h-80 w-80"
          />
        </div>
        <div className="right flex justify-center items-center min-h-[250px] md:min-h-[60vh] w-full md:w-2/5">
          <h3 className="font-semibold text-lg lg:text-xl text-[#333]">
            We provide server support for various companies. Experienced server
            admins, contribute support to Linux, Windows, and AWS servers. 24*7
            services are available. Our experienced techs will provide server
            hardening, 24/7 server monitoring &amp; rescue, backup monitoring,
            and audits.
          </h3>
        </div>
      </div>
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          Services That We Provide
        </h1>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-primary inline-flex" />
        </div>
      </div>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 justify-center">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            cardHeading={card.cardHeading}
            custom="card flex flex-col gap-6 h-52 w-72 px-5"
          />
        ))}
      </div>
    </section>
  );
};

export default index;
