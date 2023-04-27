const index = () => {
    return (
        <div className="flex justify-between flex-col md:flex-row">
            <div className="flex-1 p-5">
                <div className="flex justify-between items-center">
                    <h3 className="text-4xl text-[#F61E1E] font-bold">About team <br /> Keyshell</h3>
                    <div className="border-2 rounded-full p-2 border-black">
                        <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="12.728" y="15.2928" width="4" height="43" transform="rotate(-45 12.728 15.2928)" fill="#1C1C1C" />
                            <rect x="42.2842" y="18.2635" width="4" height="28" fill="#1C1C1C" />
                            <rect x="18.2637" y="46.2842" width="4" height="28" transform="rotate(-90 18.2637 46.2842)" fill="#1C1C1C" />
                        </svg>
                    </div>
                </div>
                <p className="text-gray-700 mt-5">
                    Welcome to our IT company, where we specialize in providing cutting-edge solutions that can transform your business. Our team of experts is passionate about empowering businesses of all sizes with innovative technology that can help them stay ahead of the competition.<br /><br />
                    From custom software development to cloud computing and cybersecurity solutions, we offer a wide range of services that are tailored to meet the unique needs of each of our clients. Whether you're looking to streamline your operations, increase efficiency, or enhance your online presence, we've got you covered.<br /><br />
                    At our IT company, we pride ourselves on delivering high-quality solutions that are backed by exceptional customer service. We work closely with our clients to understand their business goals and objectives, and then develop customized solutions that help them achieve those goals.
                </p>
            </div>
            <div className="flex flex-1 p-5">
                <div>
                    <h3 className="text-4xl text-[#F61E1E] font-bold">What makes us special</h3>
                    <p className="text-gray-700 mt-5 py-5">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.<br /> <br />
                        Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>
                <div className="text-black flex flex-col gap-10">
                    <div className="text-center">
                        <h3 className="text-5xl font-bold">
                            30k
                            <sup className="text-[#F61E1E] font-extrabold">+</sup>
                        </h3>
                        <spna className='text-sm mt-7' >Project Completed</spna>
                    </div>
                    <div className="text-center">
                        <h3 className="text-5xl font-bold">
                            70k
                        </h3>
                        <spna className='text-sm mt-7' >Clients</spna>
                    </div>
                    <div className="text-center">
                        <h3 className="text-5xl font-bold">
                            100k
                        </h3>
                        <spna className='text-sm mt-7' >Customers</spna>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index