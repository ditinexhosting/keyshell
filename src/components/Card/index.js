import Image from 'next/image';

const index = (props) => {
  return (
    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
      <div className="w-20 h-20 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
        <Image
          src={props.image}
          height={60}
          width={60}
          alt={props.cardHeading}
        />
      </div>
      <div className="flex-grow">
        <h2 className="text-gray-900 text-lg title-font font-bold mb-3">
          {props.cardHeading}
        </h2>
        <p className="leading-relaxed text-base">{props.cardInfo}</p>
      </div>
    </div>
  );
};

export default index;
