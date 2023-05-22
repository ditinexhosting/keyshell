import Image from 'next/image';

const index = (props) => {
  return (
    <div>
      {props.sectionsList.map((section) => (
        <div key={section.id}>
          <div>
            <div>
              <div>
                <div className="flex justify-between">
                  <h3 className="text-xl md:text-3xl font-bold uppercase text-light-border mb-5">
                    {section.title} <span className="text-primary">.</span>
                  </h3>
                  <a
                    className="text-primary text-sm font-medium underline"
                    href={section.url}
                  >
                    View More Details
                  </a>
                </div>
                <p className="text-gray-white px-2 text-justify">
                  {section.description}
                </p>
              </div>
            </div>
          </div>
          <div className="container px-5 mx-auto">
            <div className="flex justify-around items-center mt-5 flex-col md:flex-row gap-5 flex-wrap">
              {section.images.map((imageSrc, index) => (
                <Image
                  key={index}
                  src={imageSrc}
                  height={100}
                  className="object-fill h-auto w-auto"
                  width={100}
                  alt="logo"
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default index;
