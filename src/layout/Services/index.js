import Image from 'next/image';
import Card from '@/components/Card';
import Project from '../Home/Project';
import ServicesCard from './ServicesCard';
const index = (props) => {
  return (
    <section className="px-5 sm:px-10 lg:px-20">
      <div className="container">
        <h1 className=" text-4xl lg:text-[7rem] leading-none font-extrabold my-3 text-secondary mb-10">
          Discover How We've Helped
          <span className="text-primary"> Clients Succeed</span> with Our
          Cutting-Edge Services
        </h1>
      </div>
      <section className="bg-secondary px-5 mx-2 rounded-xl py-10 mb-10 md:mb-20">
        <div className="flex justify-between flex-col md:flex-row gap-5 mb-5">
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-5xl font-bold uppercase text-light-border mb-5">
              Our Services <span className="text-primary">.</span>
            </h2>
            <p className="text-gray-white max-w-lg">
              Every one of us loves something different. So, explore the world
              through the lens of our visual capabilitie, and find what you love
            </p>
          </div>
        </div>
        <div>
          <ServicesCard sectionsList={props.sectionsList}/>
        </div>
      </section>
      <section className="mb-20">
        <div className="container px-5 mx-auto">
          <div className="text-center mb-10">
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
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          Additional Services / Assistance
        </h1>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-primary inline-flex" />
        </div>
      </div>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 justify-center">
        {props.cards.map((card, index) => (
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
