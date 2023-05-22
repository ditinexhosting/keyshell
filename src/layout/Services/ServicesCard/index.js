import Image from 'next/image';

const index = () => {
  const sections = [
    {
      id: 1,
      title: 'Web Development',
      url: '/compagion',
      description:
        'As a design development agency for both web and mobile applications, our specialists have analytical skills to organize complex user flows for easy use of the final product. We create innovative and functional UX/UI design solutions for web and mobile applications of any complexity. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',

      images: [
        '/images/services/image-1.png',
        '/images/services/image-2.png',
        '/images/services/image-3.png',
        '/images/services/image-4.png',
        '/images/services/image-5.png',
      ],
    },
  ];

  return (
    <div>
      {sections.map((section) => (
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
