<?php 
$title = 'Home';
$metatags = '';
include 'header.php';
?>

<section class="hero-section flex flex-col-reverse md:flex-row min-h-[85vh] w-full justify-center items-center">
    <div class="left w-full md:w-1/2 py-3 pb-8 md:pb-0 px-5 sm:px-7 md:px-12">
      <h1 class="text-4xl md:text-5xl font-semibold tracking-wider text-gray-600">DevOps Services and Solutions</h1>
      <p class="text-[#5A5453] text-md sm:text-base md:text-lg py-10 tracking-wider md:pr-5">Our DevOps team helps organizations optimize and streamline their software development lifecycle. We offer a range of services including integration with cloud, continuous integration and continuous delivery (CI/CD), GitOps, containerization, DevSecOps, AI/ML</p>
      <div class="flex h-auto w-full flex justify-center md:justify-start items-center">
          <a href="#show" class="bg-gray-600 hover:bg-[#5A5453] text-white rounded-tl-2xl rounded-br-2xl rounded-sm px-10 py-3 font-semibold text-lg tracking-wider">Let's Talk<i class="fa-solid fa-arrow-right pl-[5px] text-lg"></i></a>
      </div>
    </div>
    <div class="right w-full md:w-1/2 flex justify-center items-center">
      <img src="assets/images/heroImage.avif" alt="DevOps Services and Solutions" class="h-[390px] lg:h-[420px] w-[390px] lg:w-[420px]" loading="eager">
    </div>
</section>

  <div class="py-8 flex justify-center items-center">
    <p class="font-semibold text-2xl text-[#333] border-b-2 border-[#E89B19] px-4 pb-2">What We Offers <strong class="text-blue-600 pl-1">?</strong></p>
  </div>

  <section class="services py-6 pb-8 px-5 md:px-10">
    <div class="flex justify-center items-center flex-wrap gap-x-10 gap-y-10">
      <div class="w-72 bg-white shadow-md">
          <div class="rounded-sm ">
              <div class="flex justify-start items-center gap-3 py-2 px-4">
                  <div class="flex items-center justify-center w-10 h-10 rounded-full  lg:mb-0">
                      <img src="assets/images/python.webp" class="w-10 h-10" alt="python" loading="lazy"/>
                  </div>
                  <h3 class="font-semibold leading-5 text-black">Python</h6>
              </div>
              <div class="flex justify-center items-start min-h-[208px] w-full bg-no-repeat bg-cover bg-center bg-[url('assets/images/white-blue-image.avif')]">
                <div class="max-w-2xl text-center px-3">
                  <h4 class="text-gray-700 text-xl font-bold py-3 pt-7">Core Python & Utility</h3>
                  <p class="text-md">Python is an interpreted, high-level, general-purpose programming language that emphasizes code readability.</p>
                </div>
              </div>
          </div>
      </div>

      <div class="w-72 bg-white shadow-md">
          <div class="rounded-sm ">
            <div class="flex justify-start items-center gap-3 py-2 px-4">
                <div class="flex items-center justify-center w-10 h-10 rounded-full  lg:mb-0">
                    <img src="assets/images/aws.webp" class="w-8 h-8" alt="aws" loading="lazy"/>
                </div>
                <h3 class="font-semibold leading-5 text-black">AWS</h3>
            </div>
            <div class="flex justify-center items-start min-h-[208px] w-full bg-no-repeat bg-cover bg-center bg-[url('assets/images/white-blue-image.avif')]">
              <div class="max-w-2xl text-center px-3">
                <h4 class="text-gray-700 text-xl font-bold py-3 pt-7">Amazon Web Services</h4>
                <p class="text-md">AWS is the most popular and most widely used cloud platform in the world. This course will teach you design principles, including strategies for networking.</p>
              </div>
            </div>
        </div>
      </div>

      <div class="w-72 bg-white shadow-md">
        <div class="rounded-sm ">
            <div class="flex justify-start items-center gap-3 py-2 px-4">
                <div class="flex items-center justify-center w-10 h-10 rounded-full  lg:mb-0">
                    <img src="assets/images/devops.webp" class="w-10 h-10" alt="devops" loading="lazy"/>
                </div>
                <h3 class="font-semibold leading-5 text-black">DevOps</h3>
            </div>
            <div class="flex justify-center items-center min-h-[208px] w-full bg-no-repeat bg-cover bg-center bg-[url('assets/images/white-blue-image.avif')]">
              <div class="max-w-2xl text-center px-3">
                <h4 class="text-gray-700 text-xl font-bold py-3 pt-3">Understanding Devops</h4>
                <p class="text-md">DevOps is an IT management where Developers have adopted frameworks such as Agile to enable rapid "sprints" of software development</p>
              </div>
            </div>
        </div>
      </div>

      <div class="w-72 bg-white shadow-md">
        <div class="rounded-sm ">
            <div class="flex justify-start items-center gap-3 py-2 px-4">
                <div class="flex items-center justify-center w-10 h-10 rounded-full  lg:mb-0">
                    <img src="assets/images/php.webp" class="w-[46.72px] h-8" alt="php" loading="lazy"/>
                </div>
                <h3 class="font-semibold leading-5 text-black">PHP</h3>
            </div>
            <div class="flex justify-center items-start min-h-[208px] w-full bg-no-repeat bg-cover bg-center bg-[url('assets/images/white-blue-image.avif')]">
              <div class="max-w-2xl text-center px-3">
                <h4 class="text-gray-700 text-xl font-bold py-3 pt-7">PHP and its framework</h4>
                <p class="text-md">Get started with the world's most used server technology. This course will get you started in no time, covering installation, forms management etc.</p>
              </div>
            </div>
        </div>
      </div>

      <div class="w-72 bg-white shadow-md">
        <div class="rounded-sm ">
            <div class="flex justify-start items-center gap-3 py-2 px-4">
                <div class="flex items-center justify-center w-10 h-10 rounded-full  lg:mb-0">
                    <img src="assets/images/asp.webp" class="w-10 h-10" alt="asp.net" loading="lazy"/>
                </div>
                <h3 class="font-semibold leading-5 text-black">ASP.Net</h3>
            </div>
            <div class="flex justify-center items-start min-h-[208px] w-full bg-no-repeat bg-cover bg-center bg-[url('assets/images/white-blue-image.avif')]">
              <div class="max-w-2xl text-center px-3">
                <h4 class="text-gray-700 text-xl font-bold py-3 pt-7">ASP.Net Core</h4>
                <p class="text-md">ASP.NET Core is cross-platform framework for building web applications and web APIs. You will learn everything about building ASP.NET Core applications.</p>
              </div>
            </div>
        </div>
      </div>

      <div class="w-72 bg-white shadow-md">
        <div class="rounded-sm ">
            <div class="flex justify-start items-center gap-3 py-2 px-4">
                <div class="flex items-center justify-center w-10 h-10 rounded-full  lg:mb-0">
                    <img src="assets/images/linux.webp" class="w-10 h-10" alt="linux" loading="lazy"/>
                </div>
                <h3 class="font-semibold leading-5 text-black">Redhat</h3>
            </div>
            <div class="flex justify-center items-start min-h-[208px] w-full bg-no-repeat bg-cover bg-center bg-[url('assets/images/white-blue-image.avif')]">
              <div class="max-w-2xl text-center px-3">
                <h4 class="text-gray-700 text-xl font-bold py-3 pt-7">Linux Redhat</h4>
                <p class="text-md">Get and keep your skills up to speed on Linux server solutions. You’ll find easy to follow videos whether you’re looking to learn the fundamentals of Linux.</p>
              </div>
            </div>
        </div>
      </div>

      <div class="w-72 bg-white shadow-md">
        <div class="rounded-sm ">
            <div class="flex justify-start items-center gap-3 py-2 px-4">
                <div class="flex items-center justify-center w-10 h-10 rounded-full  lg:mb-0">
                    <img src="assets/images/mean.webp" class="w-10 h-8" alt="mearn" loading="lazy"/>
                </div>
                <h3 class="font-semibold leading-5 text-black">MEA(R)N</h3>
            </div>
            <div class="flex justify-center items-start min-h-[208px] w-full bg-no-repeat bg-cover bg-center bg-[url('assets/images/white-blue-image.avif')]">
              <div class="max-w-2xl text-center px-3">
                <h4 class="text-gray-700 text-xl font-bold py-3 pt-7">MEA(R)N Stack</h4>
                <p class="text-md">Do you want to build advanced applications that render quickly and that are easy to maintain? This course will teach you how to build a full stack application from scratch.</p>
              </div>
            </div>
        </div>
      </div>
  </div>
</div>
  </section>

  <section class="min-h-[60vh] w-full px-5 sm:px-10 md:px-0 pr-5 sm:pr-10 md:pr-11 lg:pr-16 py-14 flex flex-col md:flex-row">
    <div class="flex justify-center items-center min-h-[400px] w-full md:w-[45%] lg:w-[35%]">
        <img src="assets/images/Server-amico.webp" alt="server" class="h-96 md:h-72 w-96 md:w-72" loading="lazy"/>
    </div>
    <div class="w-full md:w-[55%] lg:w-[65%]">
        <h2 class="mb-10 text-3xl max-w-lg md:max-w-2xl text-[#333] font-bold leading-snug lg:text-3xl lg:leading-snug">A <span class="text-[#E89B19]">revolutionary</span> way to manage servers.</h2>
        <div class="grid gap-y-12 gap-x-8 lg:grid-cols-2 grid-rows-2">
            <div>
                <h2 class="mb-6 border-l-4 border-[#E89B19] pl-3 lg:pl-4 text-2xl leading-10">Faster Deployment
                </h2>
                <p class=" text-gray-800 pr-2">DevOps aims at reducing the software development life cycle, which in turn, enables businesses to deploy their products quickly.</p>
            </div>
            <div>
                <h2 class="mb-6 border-l-4 border-[#E89B19] pl-3 lg:pl-4 text-2xl leading-10">Improved Collaboration</h2>
                <p class=" text-gray-800 pr-2">DevOps provides the much-needed atmosphere to development and operational teams for mutual communication and collaboration.</p>
            </div>
            <div>
                <h2 class="mb-6 border-l-4 border-[#E89B19] pl-3 lg:pl-4 text-2xl leading-10">Promotes Agility </h2>
                <p class="text-gray-800 pr-2">With DevOps, it is feasible to acquire the scalability needed to gain a competitive advantage in the market.</p>
            </div>
            <div>
                <h2 class="mb-6 border-l-4 border-[#E89B19] pl-3 lg:pl-4 text-2xl leading-10">Early Defect Detection</h2>
                <p class=" text-gray-800 pr-2">The continuous monitoring and testing environment of DevOps helps in detecting the flaws in the early stages.</p>
            </div>
        </div>
    </div>
</section>

<section class="flex justify-center items-center flex-col gap-7 py-9 md:py-12 pb-8 md:pb-16">
  <h1 class="font-semibold text-2xl text px-4 border-b-2 border-[#E89B19] pb-2">Solutions</h1>
  <img src="assets/images/cloud-graph-min.avif" alt="solutions" class="h-[300px] sm:h-[400px] lg:h-[450px] w-[355px] sm:w-[630px] md:w-[720px] lg:w-[850px]" loading="lazy">
</section>

<section class="flex justify-center items-center pt-4">
  <h1 class="font-semibold text-2xl text px-4 border-b-2 border-[#E89B19] pb-2">Data Insights</h1>
</section>

<section class="px-5 px-10 lg::px-20 py-16 pt-12 flex justify-center items-center" id="show">
  <div class="cont min-h-[60vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div class="card h-44 md:h-[315px] w-full md:w-[330px] flex flex-col gap-5 p-5 bg-[#98AD06] row-span-1 md:row-span-2">
      <h1 class="font-semibold text-white">Global DevOps Market Forecast (2017-23)</h1>
      <div class="line1 flex items-center gap-5">
        <i class="fa-solid fa-arrow-right-long text-white"></i>
        <p class="font-semibold text-white">USD 9.41 billion by 2023</p>
      </div>
      <div class="line1 flex items-center gap-5">
        <i class="fa-solid fa-arrow-right-long text-white"></i>
        <p class="font-semibold text-white">18.7% CAGR</p>
      </div>
    </div>
    <div class="card h-36 w-full md:w-[330px] flex flex-col gap-2 p-5 bg-[#F4770B]">
      <h1 class="font-semibold text-3xl text-white">83%</h1>
      <h2 class="text-white font-semibold">Of organizations have already implemented Devops as of 2021</h2>
    </div>
    <div class="card h-36 w-full md:w-[330px] flex flex-col gap-2 p-5 bg-[#664EEF]">
      <h1 class="font-semibold text-3xl text-white">42%</h1>
      <h2 class="text-white font-semibold">Sharing DevOps culture across multiple teams within a department</h2>
    </div>
    <div class="card h-36 w-full md:w-[330px] flex flex-col gap-2 p-5 bg-[#DAC27D]">
      <h1 class="font-semibold text-3xl text-white">22%</h1>
      <h2 class="text-white font-semibold">Minimize time on unplanned work and rework with DevOps Practices</h2>
    </div>
    <div class="card h-36 w-full md:w-[330px] flex flex-col gap-2 p-5 bg-[#A94719]">
      <h1 class="font-semibold text-3xl text-white">200X</h1>
      <h2 class="text-white font-semibold">Deployment frequency of time with Devops compared to those without</h2>
    </div>
    <div class="card h-36 w-full md:w-[330px] flex flex-col gap-2 p-5 bg-[#21C49C]">
      <h1 class="font-semibold text-3xl text-white">20%</h1>
      <h2 class="text-white font-semibold">Expected CAGR of DevOps Platform market during 2018-22</h2>
    </div>
    <div class="card h-36 w-full md:w-[330px] flex flex-col gap-2 p-5 bg-[#FCA310]">
      <h1 class="font-semibold text-3xl text-white">440X</h1>
      <h2 class="text-white font-semibold">Faster lead time for changes with DevOps principles</h2>
    </div>
    <div class="card h-36 w-full md:w-[330px] flex flex-col gap-2 p-5 bg-[#F31702]">
      <h1 class="font-semibold text-3xl text-white">24X</h1>
      <h2 class="text-white font-semibold">Frequency of faster recovery from failure and minimized downtime with DevOps</h2>
    </div>
  </div>
</section>

<section class="flex justify-center items-center pt-4">
  <h1 class="font-semibold text-2xl text px-4 border-b-2 border-[#E89B19] pb-2">Industry Use Cases</h1>
</section>

<section class="px-5 sm:px-10 lg:px-20 py-14">
  <div class="main min-h-[60vh] flex flex-wrap justify-center items-center gap-10">
    <div class="card flex flex-col gap-6 justify-start items-center h-96 w-72 shadow-lg hover:shadow-xl px-5 pt-5" data-aos="flip-left" data-aos="fade-up" data-aos-anchor-placement="top-center">
      <img src="assets/images/supply-chain.webp" alt="supply chain" class="h-16 w-16 p-1 rounded-full" loading="lazy">
      <h1 class="font-semibold text-2xl">Supply Chain</h1>
      <p class="text-center">Partnered with a San Diego based banking and finance institution to make a smooth transition to agile Cloud infrastructure. This, in turn, improved the scalability and automated infrastructure provisioning.</p>
    </div>
    <div class="card flex flex-col gap-6 justify-start items-center h-96 w-72 shadow-lg hover:shadow-xl px-5 pt-5" data-aos="flip-left" data-aos="fade-up" data-aos-anchor-placement="top-center">
      <img src="assets/images/healthcare.webp" alt="healthcare" class="h-16 w-16 p-1 rounded-full" loading="lazy">
      <h1 class="font-semibold text-2xl">Healthcare</h1>
      <p class="text-center">Worked with a leading healthcare institution to help them manage their operations with our expert DevOps monitoring and support to identify and fix issues and bugs across the range of their internal.</p>
    </div>
    <div class="card flex flex-col gap-6 justify-start items-center h-96 w-72 shadow-lg hover:shadow-xl px-5 pt-5" data-aos="flip-left" data-aos="fade-up" data-aos-anchor-placement="top-center">
      <img src="assets/images/manufacturing.webp" alt="manufacturing" class="h-16 w-16 p-1 rounded-full" loading="lazy">
      <h1 class="font-semibold text-2xl">Manufacturing</h1>
      <p class="text-center">Provided Devops consulting to a leading manufacturing giant to help them evolve their business using cloud. We reachitected their portfolio using our proven RAPADIT framework.</p>
    </div>
    <div class="card flex flex-col gap-6 justify-start items-center h-96 w-72 shadow-lg hover:shadow-xl px-5 pt-5" data-aos="flip-left" data-aos="fade-up" data-aos-anchor-placement="top-center">
      <img src="assets/images/travel.webp" alt="travel" class="h-16 w-16 p-1 rounded-full" loading="lazy">
      <h1 class="font-semibold text-2xl">Travel</h1>
      <p class="text-center">Provided Devops consulting to a leading manufacturing giant to help them evolve their business using cloud. We reachitected their portfolio using our proven RAPADIT framework.</p>
    </div>
    <div class="card flex flex-col gap-6 justify-start items-center h-96 w-72 shadow-lg hover:shadow-xl px-5 pt-5" data-aos="flip-left" data-aos="fade-up" data-aos-anchor-placement="top-center">
      <img src="assets/images/hospitality.webp" alt="hospitality" class="h-16 w-16 p-1 rounded-full" loading="lazy">
      <h1 class="font-semibold text-2xl">Hospitality</h1>
      <p class="text-center">Provided Devops consulting to a leading manufacturing giant to help them evolve their business using cloud. We reachitected their portfolio using our proven RAPADIT framework.</p>
    </div>
    <div class="card flex flex-col gap-6 justify-start items-center h-96 w-72 shadow-lg hover:shadow-xl px-5 pt-5" data-aos="flip-left" data-aos="fade-up" data-aos-anchor-placement="top-center">
      <img src="assets/images/finance.webp" alt="finance" class="h-16 w-16 p-1 rounded-full" loading="lazy">
      <h1 class="font-semibold text-2xl">Finance</h1>
      <p class="text-center">Provided Devops consulting to a leading manufacturing giant to help them evolve their business using cloud. We reachitected their portfolio using our proven RAPADIT framework.</p>
    </div>
  </div>
</section>

<section class="flex justify-center items-center flex-col gap-12 py-9 md:py-14 pb-8 md:pb-16">
  <h1 class="font-semibold text-2xl text px-4 border-b-2 border-[#E89B19] pb-2 text-center">DevOps Tools and Platforms</h1>
  <img src="assets/images/devops-tools-and-automation.webp" alt="solutions" class="h-[300px] sm:h-[400px] lg:h-[450px] w-[355px] sm:w-[630px] md:w-[720px] lg:w-[850px]" loading="lazy">
</section>

<section class="next px-5 md:px-10 lg:px-32 py-10" id="contact">
    <form class="min-h-[61vh] w-full bg-no-repeat bg-cover bg-center shadow-xl bg-[url('assets/images/white-bg.avif')]">
      <div class="top min-h-[15vh] w-full rounded-b-[50px] pb-2 px-5 md:px-2 bg-no-repeat bg-cover bg-center bg-[url('assets/images/blue-image-min.jpg')]">
        <h2 class="text-center font-bold text-2xl text-emerald-300/90 py-4 pb-4 block md:hidden">Get In Touch</h2>
        <div class="flex flex-col md:flex-row px-5 gap-y-3 gap-x-6 justify-start md:justify-evenly items-start py-3 md:py-3 pb-5 md:pb-1">
          <div class="one flex gap-3.5 md:gap-2 justify-center items-start">
            <i class="fa-sharp fa-solid fa-phone text-lg text-[#E89B19]"></i>
            <h3 class="font-semibold text-md text-[whitesmoke]">+918129571359</h3>
          </div>
          <div class="two flex gap-3.5 md:gap-2 justify-center items-start pl-0 md:pl-8">
            <i class="fa-solid fa-location-dot text-xl text-[#E89B19]"></i>
            <h3 class="font-semibold text-md max-w-md text-[whitesmoke]">First floor Carnival Infopark Phase1 Infopark, Kakkanad, Kochi, Kerala 682042, India</h3>
          </div>
          <div class="three flex gap-3.5 md:gap-2 justify-center items-start">
            <i class="fa-solid fa-envelope text-lg text-[#E89B19]"></i>
            <h3 class="font-semibold text-md text-[whitesmoke]">keyshell3455@gmail.com</h3>
          </div>
        </div>
        <h2 class="text-center font-bold text-2xl text-emerald-300/90 py-4 pb-4 hidden md:block">Get In Touch</h2>
      </div>

      <div class="bottom min-h-[50vh] w-full flex flex-col gap-5 md:gap-8 flex justify-center items-center py-8">
            <div class="flex gap-5 lg:gap-10 flex-col sm:flex-row">
                <input type="text" required placeholder="Name" class="w-[300px] sm:w-64 md:w-72 lg:w-80 border-0 bg-[#F5F5F5] shadow-md py-2 sm:py-3">
                <input type="text" required placeholder="Subject" class="w-[300px] sm:w-64 md:w-72 lg:w-80 border-0 bg-[#F5F5F5] shadow-md py-2 sm:py-3">
            </div>
            <div class="flex gap-5 lg:gap-10 flex-col sm:flex-row">
                <input type="email" required placeholder="Email" class="w-[300px] sm:w-64 md:w-72 lg:w-80 border-0 bg-[#F5F5F5] shadow-md py-2 sm:py-3">
                <input type="text" required placeholder="Phone" class="w-[300px] sm:w-64 md:w-72 lg:w-80 border-0 bg-[#F5F5F5] shadow-md py-2 sm:py-3">
            </div>
            <textarea placeholder="Your Message" class="w-[300px] sm:w-[535px] md:w-[595px] lg:w-[680px] border-0 bg-[#F5F5F5] shadow-md py-2 sm:py-3"></textarea>
            <div class="w-full flex justify-center items-center">
                <input type="submit" class="h-11 w-32 bg-gray-600 rounded-md font-semibold text-[whitesmoke] hover:bg-gray-700 cursor-pointer">
            </div>
      </div>
    </form>
  </section>

  <?php include 'footer.php';?>