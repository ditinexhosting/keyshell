import { useState } from 'react';

function Accordion({ sections }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleSection = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <>
      {sections.map((section, index) => (
        <div >
          <button
            key={index}
            className="flex duration-300 ease-in-out rounded-md px-4 py-2 my-2 w-full text-left focus:outline-none"
            onClick={() => toggleSection(index)}
            aria-expanded={activeIndex === index}
            aria-controls={`panel-${index}`}
          >
            {section.title}
            <span className="ml-auto">{activeIndex === index ? <svg width="80" height="80" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="19.4326" y="23.3491" width="6.10712" height="65.6516" transform="rotate(-45 19.4326 23.3491)" fill="#F61E1E" />
              <rect x="64.5586" y="27.8845" width="6.10712" height="42.7499" fill="#F61E1E" />
              <rect x="27.8843" y="70.666" width="6.10712" height="42.7499" transform="rotate(-90 27.8843 70.666)" fill="#F61E1E" />
            </svg>
              : <svg width="80" height="80" viewBox="0 0 94 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="21.5005" y="69.2711" width="6.10712" height="65.6516" transform="rotate(-128.537 21.5005 69.2711)" fill="#5F5F5F" />
                <rect x="21.5005" y="69.2711" width="6.10712" height="65.6516" transform="rotate(-128.537 21.5005 69.2711)" fill="black" fill-opacity="0.2" />
                <rect x="31.0859" y="24.9424" width="6.10712" height="42.7499" transform="rotate(-83.5374 31.0859 24.9424)" fill="#5F5F5F" />
                <rect x="31.0859" y="24.9424" width="6.10712" height="42.7499" transform="rotate(-83.5374 31.0859 24.9424)" fill="black" fill-opacity="0.2" />
                <rect x="69.4678" y="66.1989" width="6.10712" height="42.7499" transform="rotate(-173.537 69.4678 66.1989)" fill="#5F5F5F" />
                <rect x="69.4678" y="66.1989" width="6.10712" height="42.7499" transform="rotate(-173.537 69.4678 66.1989)" fill="black" fill-opacity="0.2" />
              </svg>
            }</span>
          </button>
          <div
            id={`panel-${index}`}
            className={`panel overflow-hidden transition-max-height duration-200 ease-in-out ${activeIndex === index ? 'max-h-screen' : 'max-h-0'
              }`}
          >
            <div className="px-4 py-2 mb-5">{section.content}</div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Accordion