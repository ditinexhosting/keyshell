import Contact from '../Contact'
import About from '../About'
import Blog from '../Blog'
import Accordion from '../Accordion'
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
                        World Class Agency
                    </div>
                    <div className="w-full h-[2px] bg-gray-400 hidden md:block mx-2"></div>
                </div>
            </div>
            <Accordion />
            <About />
            <Blog />
            <Contact />
        </main>
    )
}

export default index