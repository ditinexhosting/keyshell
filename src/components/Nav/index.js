import { Disclosure } from '@headlessui/react';
import Image from 'next/image';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/aboutUs', current: false },
  { name: 'Services', href: '/services', current: false },
  { name: 'Contact ', href: '/contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const index = () => {
  return (
    <div>
      <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 bg-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <Image
                        src="/images/close-bold-svgrepo-com.svg"
                        width={30}
                        height={30}
                        alt="Hamburger"
                      />
                    ) : (
                      <Image
                        src="/images/hamburger-menu-svgrepo-com.svg"
                        width={30}
                        height={30}
                        alt="Hamburger"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center  sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <Image
                      src="/images/logo.svg"
                      width={200}
                      height={200}
                      alt="Logo"
                    />
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="bg-white border-white hover:border-primary border-b-4 text-black m-3 px-1 py-1 text-sm font-medium text-black ease-in-out duration-300"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="bg-white text-black text-gray-700 hover:bg-primary hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default index;
