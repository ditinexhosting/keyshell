import Contact from '../Contact'
import About from '../About'
import Blog from '../Blog'
import Accordion from '../Accordion'
import Image from 'next/image'
const index = () => {
    return (
        <main className="container mx-auto bg-white">
            <div className='text-black p-4 md:p-0'>
                <h1 className=" text-5xl lg:text-[7rem] leading-none font-extrabold mt-9 ">
                    <span className='text-[#F61E1E]'>Empowering</span> Your Business with Innovative IT Solutions
                </h1>
                <div className="flex justify-between py-11 flex-col lg:flex-row gap-5 lg:gap-0">
                    <p className="text-lg font-semibold max-w-2xl">
                        From custom software development to cloud computing and cybersecurity solutions, we offer a wide range of services that are tailored to meet the unique needs of each of our clients. We've got you covered!
                    </p>
                    <div className="">
                        <button className="rounded-lg bg-[#F61E1E] p-3 px-5 font-bold text-lg text-white flex justify-center items-center gap-4 ">Get a <br />Quote
                            <svg width="42" height="39" viewBox="0 0 42 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.7572 1.57911C19.9824 0.52425 21.4878 0.524246 21.713 1.5791L23.7901 11.3047C23.9337 11.9771 24.6974 12.3073 25.2857 11.9514L34.3928 6.4418C35.3387 5.86956 36.3767 7.02861 35.704 7.9059L29.83 15.5664C29.3714 16.1646 29.7142 17.0358 30.4574 17.161L40.6181 18.8731C41.7298 19.0605 41.7298 20.658 40.6181 20.8453L30.4574 22.5574C29.7142 22.6826 29.3714 23.5539 29.83 24.152L35.704 31.8125C36.3766 32.6898 35.3387 33.8489 34.3928 33.2766L25.2857 27.767C24.6974 27.4111 23.9337 27.7413 23.7901 28.4137L21.713 38.1393C21.4878 39.1942 19.9824 39.1942 19.7572 38.1393L17.6801 28.4137C17.5365 27.7413 16.7728 27.4111 16.1845 27.767L7.07743 33.2766C6.13154 33.8489 5.09355 32.6898 5.76624 31.8125L11.6402 24.152C12.0988 23.5539 11.756 22.6826 11.0128 22.5574L0.852148 20.8453C-0.259639 20.658 -0.259639 19.0605 0.852148 18.8731L11.0128 17.161C11.756 17.0358 12.0988 16.1646 11.6402 15.5664L5.76625 7.9059C5.09355 7.02861 6.13155 5.86956 7.07743 6.44181L16.1845 11.9514C16.7728 12.3073 17.5365 11.9771 17.6801 11.3047L19.7572 1.57911Z" fill="white" />
                            </svg>

                        </button>
                    </div>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                    <div className="rounded-full border-2 text-sm p-2 px-3 shrink-0">
                        2022 Best Company
                    </div>
                    <div className="rounded-full border-2 text-sm p-2 px-3 shrink-0">
                        World class Agency
                    </div>
                    <div className="w-full h-[2px] bg-gray-400 hidden md:block mx-2"></div>
                </div>
            </div>
            <About />
            <section className='bg-[#1C1C1C] px-5 mx-2 rounded-xl py-10'>
                <div className='flex justify-between flex-col md:flex-row gap-5 mb-5'>
                    <div className='flex flex-col'>
                        <h2 className='text-5xl font-bold uppercase text-[#C4C4C4]'>Our Services <span className='text-[#F61E1E]'>.</span></h2>
                        <p className='text-[#5F5F5F] max-w-lg'>Every one of us loves something different. So, explore the world
                            through the lens of our visual capabilitie, and find what you love</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-3'>
                            <button className='border-2 border-[#F61E1E] rounded-full px-4 py-1 text-[#F61E1E]'>Design</button>
                            <button className='border-2 border-[#C4C4C4] rounded-full px-4 py-1 text-[#C4C4C4]'>Development</button>
                        </div>
                        <div className='flex gap-3'>
                            <button className='border-2 border-[#C4C4C4] rounded-full px-4 py-1 text-[#C4C4C4]'>Digital Marketing</button>
                            <button className='border-2 border-[#C4C4C4] rounded-full px-4 py-1 text-[#C4C4C4]'>SEO</button>
                        </div>
                    </div>
                </div>
                <div>
                    <Accordion
                        sections={[
                            {
                                title: (<>
                                    <h2 className='text-5xl font-bold uppercase flex gap-5 items-center'>UI/UX Design
                                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7.5" cy="8.02039" r="7.5" fill="#F61E1E" />
                                        </svg>

                                    </h2>
                                </>),
                                content: (
                                    <div className='flex justify-around items-center flex-col md:flex-row gap-5 '>
                                        <div className='flex flex-col gap-3'>
                                            <div className='flex gap-3'>
                                                <button className='border-2 border-[#C4C4C4] rounded-full px-4 py-1 text-[#C4C4C4] shrink-0'>Design</button>
                                                <button className='border-2 border-[#5F5F5F] rounded-full px-4 py-1 text-[#5F5F5F] shrink-0'>Development</button>
                                            </div>
                                            <div className='flex gap-3'>
                                                <button className='border-2 border-[#5F5F5F] rounded-full px-4 py-1 text-[#5F5F5F] shrink-0'>Digital Marketing</button>
                                                <button className='border-2 border-[#5F5F5F] rounded-full px-4 py-1 text-[#5F5F5F] shrink-0'>SEO</button>
                                            </div>
                                        </div>
                                        <p className='text-white max-w-xl'>
                                            As a design development agency for both web and mobile applications,
                                            our specialists have analytical skills to organize complex user flows for easy use of the final product. We create innovative and functional UX/UI design solutions for web and mobile applications of any complexity.
                                        </p>
                                    </div>
                                ),
                            },
                            {
                                title: (<>
                                    <h2 className='text-5xl text-[#5F5F5F] uppercase flex gap-5 items-center'>Brand Design</h2>
                                </>),
                                content: (
                                    <p>
                                        Nullam ultricies mauris mauris, sit amet vestibulum ipsum malesuada
                                        vel. Duis id risus in libero tempus hendrerit vel vel arcu. In
                                        pharetra massa vel nunc rhoncus, at eleifend eros lacinia.
                                    </p>
                                ),
                            },
                            {
                                title: (<>
                                    <h2 className='text-5xl text-[#5F5F5F] uppercase flex gap-5 items-center'>Graphic Design</h2>
                                </>),
                                content: (
                                    <p>
                                        Suspendisse potenti. Sed bibendum, justo vitae euismod dignissim, elit
                                        sem dignissim enim, at sodales velit ex in purus. Vestibulum
                                        sollicitudin nibh id tellus laoreet, vel eleifend mi bibendum.
                                    </p>
                                ),
                            },
                        ]}
                    />

                </div>

                <section>
                    <div className='flex justify-between items-baseline'>
                        <h2 className='text-5xl font-bold uppercase text-[#C4C4C4]'>Project</h2>
                        <a className='text-[#F61E1E] text-xs'>See All Services</a>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 justify-center md:justify-start py-8 flex-wrap md:flex-nowrap">
                            <button className='border-2 border-[#C4C4C4] rounded-full px-4 py-1 text-[#C4C4C4] md:shrink-0'>Design</button>
                            <button className='border-2 border-[#5F5F5F] rounded-full px-4 py-1 text-[#5F5F5F] md:shrink-0'>Development</button>
                            <button className='border-2 border-[#5F5F5F] rounded-full px-4 py-1 text-[#5F5F5F] md:shrink-0'>Digital Marketing</button>
                            <button className='border-2 border-[#5F5F5F] rounded-full px-4 py-1 text-[#5F5F5F] md:shrink-0'>SEO</button>
                            <div className="w-full h-[2px] bg-[#5F5F5F] hidden md:block mx-2"></div>
                        </div>
                    </div>

                    <div>
                        <div className="m-5 overflow-hidden rounded-r-xl rounded-l-xl">
                            <div className="-m-1 flex flex-wrap md:-m-2">
                                <div className="flex w-1/3 flex-wrap">
                                    <div className="w-full p-1 md:p-2">
                                        <Image src='/images/Project-1.png' width={450} height={450} alt="Map" />
                                    </div>
                                </div>
                                <div className="flex w-1/3 flex-wrap">
                                    <div className="w-full p-1 md:p-2">
                                        <Image src='/images/Project-2.png' width={450} height={450} alt="Map" />
                                    </div>
                                </div>
                                <div className="flex w-1/3 flex-wrap">
                                    <div className="w-full p-1 md:p-2">
                                        <Image src='/images/Project-3.png' width={450} height={450} alt="Map" />
                                    </div>
                                </div>
                                <div className="flex w-1/3 flex-wrap">
                                    <div className="w-full p-1 md:p-2">
                                        <Image src='/images/Project-4.png' width={450} height={450} alt="Map" />
                                    </div>
                                </div>
                                <div className="flex w-1/3 flex-wrap">
                                    <div className="w-full p-1 md:p-2">
                                        <Image src='/images/Project-5.png' width={450} height={450} alt="Map" />
                                    </div>
                                </div>
                                <div className="flex w-1/3 flex-wrap">
                                    <div className="w-full p-1 md:p-2">
                                        <Image src='/images/Project-1.png' width={450} height={450} alt="Map" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <Blog />
            <Contact />
        </main>
    )
}

export default index