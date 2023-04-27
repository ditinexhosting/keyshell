import Image from "next/image"
const index = () => {
    return (
        <section>

            <div className="flex justify-between items-center flex-col lg:flex-row gap-10 p-5">
                <div className="flex lg:block justify-between items-center w-full lg:w-auto ">
                    <h3 className="text-4xl text-[#F61E1E] font-bold">Stay updated <br /> with our blog </h3>
                    <div className="border-2 rounded-full p-2 border-black block lg:hidden">
                        <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="12.728" y="15.2928" width="4" height="43" transform="rotate(-45 12.728 15.2928)" fill="#1C1C1C" />
                            <rect x="42.2842" y="18.2635" width="4" height="28" fill="#1C1C1C" />
                            <rect x="18.2637" y="46.2842" width="4" height="28" transform="rotate(-90 18.2637 46.2842)" fill="#1C1C1C" />
                        </svg>
                    </div>
                </div>
                <p className="text-gray-700 max-w-2xl mr-5">
                    Welcome to our IT company, where we specialize in providing cutting-edge solutions that can transform your business. Our team of experts is passionate about empowering businesses of all sizes with innovative technology that can help them stay ahead of the competition.
                </p>
                <div className="border-2 rounded-full p-2 border-black hidden lg:block">
                    <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="12.728" y="15.2928" width="4" height="43" transform="rotate(-45 12.728 15.2928)" fill="#1C1C1C" />
                        <rect x="42.2842" y="18.2635" width="4" height="28" fill="#1C1C1C" />
                        <rect x="18.2637" y="46.2842" width="4" height="28" transform="rotate(-90 18.2637 46.2842)" fill="#1C1C1C" />
                    </svg>
                </div>
            </div>
            <div className="border-2 border-gray-400 rounded-xl p-8 my-10 m-5">
                <div className="flex gap-10">
                    <div>
                        <Image src='/images/Project-1.png' width={450} height={450} alt="Map" />
                    </div>
                    <div>
                        <Image src='/images/Project-2.png' width={450} height={450} alt="Map" />
                    </div>
                    <div className="relative">
                        <Image src='/images/Project-3.png' width={450} height={450} alt="Map" />
                        <div className="absolute bottom-4 left-4 text-white text-lg p-5">
                            <span className="block text-sm text-[#F61E1E]">Technology</span>
                            <p className="underline">5 Exciting Tech Trends to Watch Out for in 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default index