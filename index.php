<?php 
$title = 'Home';
$metatags = '';
include 'header.php';
?>

<section class="hero-section flex flex-col-reverse md:flex-row min-h-[85vh] w-full justify-center items-center">
    <div class="left w-full md:w-1/2 py-3 pb-8 md:pb-0 px-5 sm:px-7 md:px-12">
      <h1 class="text-4xl md:text-5xl font-semibold tracking-wider text-gray-600">DevOps Services and Solutions</h1>
      <p class="text-[#5A5453] text-base md:text-lg pb-10 pt-10 tracking-wider md:pr-5">Our DevOps team helps organizations optimize and streamline their software development lifecycle. We offer a range of services including integration with cloud, continuous integration and continuous delivery (CI/CD), GitOps, containerization, DevSecOps, AI/ML</p>
      <div class="flex h-auto w-full flex justify-center md:justify-start items-center">
          <button class="bg-gray-600 hover:bg-[#5A5453] text-white rounded-tl-2xl rounded-br-2xl rounded-sm px-10 py-3 font-semibold text-lg tracking-wider">Let's Talk<i class="fa-solid fa-arrow-right pl-[5px] text-lg"></i></button>
      </div>
    </div>

    <div class="right w-full md:w-1/2 flex justify-center items-center">
      <img src="assets\images\heroImage.png" alt="DevOps Services and Solutions" class="h-4/5 w-4/5 max-h-[400px] max-w-[400px]">
    </div>
  </section>

  <div class="py-8 flex justify-center items-center">
    <p class="font-bold text-2xl text-[#333] border-b-2 border-[#E89B19] px-4 pb-2">What We Offers <strong class="text-blue-600 pl-1">?</strong></p>
  </div>

  <section class="services py-6 pb-8 px-5 md:px-10">
    <div class="flex justify-center items-center flex-wrap gap-x-10 gap-y-10">
      <div class="w-72 bg-white shadow-md">
          <div class="relative rounded-sm ">
              <div class="flex justify-start items-center gap-3 py-2 px-4">
                  <div class="flex items-center justify-center w-10 h-10 rounded-full  lg:mb-0">
                      <img src="assets\images\python.png" />
                  </div>
                  <h6 class="font-semibold leading-5 text-black">Python</h6>
              </div>

              <div class="flex justify-center items-start min-h-[208px] w-full" style="background-image: url('https://img.freepik.com/premium-photo/grunge-background_196038-9966.jpg?w=740');">
                <div class="max-w-2xl text-center px-3">
                  <h3 class="text-gray-700 text-xl font-bold py-3 pt-7">Core Python & Utility</h3>
                  <p class="text-md">Python is an interpreted, high-level, general-purpose programming language that emphasizes code readability.</p>
                </div>
              </div>
          </div>
      </div>

      <div class="w-72 bg-white shadow-md">
          <div class="relative rounded-sm ">
            <div class="flex justify-start items-center gap-3 py-2 px-4">
                <div class="flex items-center justify-center w-10 h-10 rounded-full  lg:mb-0">
                    <img src="assets\images\aws.png" />
                </div>
                <h6 class="font-semibold leading-5 text-black">AWS</h6>
            </div>

            <div class="flex justify-center items-start min-h-[208px] w-full" style="background-image: url('https://img.freepik.com/premium-photo/grunge-background_196038-9966.jpg?w=740');">
              <div class="max-w-2xl text-center px-3">
                <h3 class="text-gray-700 text-xl font-bold py-3 pt-7">Amazon Web Services</h3>
                <p class="text-md">AWS is the most popular and most widely used cloud platform in the world. This course will teach you design principles, including strategies for networking.</p>
              </div>
            </div>
        </div>
      </div>

      <div class="w-72 bg-white shadow-md">
        <div class="relative rounded-sm ">
            <div class="flex justify-start items-center gap-3 py-2 px-4">
                <div class="flex items-center justify-center w-10 h-10 rounded-full  lg:mb-0">
                    <img src="assets\images\devops.png" />
                </div>
                <h6 class="font-semibold leading-5 text-black">DevOps</h6>
            </div>

            <div class="flex justify-center items-center min-h-[208px] w-full" style="background-image: url('https://img.freepik.com/premium-photo/grunge-background_196038-9966.jpg?w=740');">
              <div class="max-w-2xl text-center px-3">
                <h3 class="text-gray-700 text-xl font-bold py-3 pt-3">Understanding Devops</h3>
                <p class="text-md">DevOps is an IT management where Developers have adopted frameworks such as Agile to enable rapid "sprints" of software development</p>
              </div>
            </div>
        </div>
      </div>

      <div class="w-72 bg-white shadow-md">
        <div class="relative rounded-sm ">
            <div class="flex justify-start items-center gap-3 py-2 px-4">
                <div class="flex items-center justify-center w-10 h-10 rounded-full  lg:mb-0">
                    <img src="assets\images\php.png" />
                </div>
                <h6 class="font-semibold leading-5 text-black">PHP</h6>
            </div>

            <div class="flex justify-center items-start min-h-[208px] w-full" style="background-image: url('https://img.freepik.com/premium-photo/grunge-background_196038-9966.jpg?w=740');">
              <div class="max-w-2xl text-center px-3">
                <h3 class="text-gray-700 text-xl font-bold py-3 pt-7">PHP and its framework</h3>
                <p class="text-md">Get started with the world's most used server technology. This course will get you started in no time, covering installation, forms management etc.</p>
              </div>
            </div>
        </div>
      </div>

      <div class="w-72 bg-white shadow-md">
        <div class="relative rounded-sm ">
            <div class="flex justify-start items-center gap-3 py-2 px-4">
                <div class="flex items-center justify-center w-10 h-10 rounded-full  lg:mb-0">
                    <img src="assets\images\asp.png" />
                </div>
                <h6 class="font-semibold leading-5 text-black">ASP.Net</h6>
            </div>

            <div class="flex justify-center items-start min-h-[208px] w-full" style="background-image: url('https://img.freepik.com/premium-photo/grunge-background_196038-9966.jpg?w=740');">
              <div class="max-w-2xl text-center px-3">
                <h3 class="text-gray-700 text-xl font-bold py-3 pt-7">ASP.Net Core</h3>
                <p class="text-md">ASP.NET Core is cross-platform framework for building web applications and web APIs. You will learn everything about building ASP.NET Core applications.</p>
              </div>
            </div>
        </div>
      </div>

      <div class="w-72 bg-white shadow-md">
        <div class="relative rounded-sm ">
            <div class="flex justify-start items-center gap-3 py-2 px-4">
                <div class="flex items-center justify-center w-10 h-10 rounded-full  lg:mb-0">
                    <img src="assets\images\linux.png" />
                </div>
                <h6 class="font-semibold leading-5 text-black">Redhat</h6>
            </div>

            <div class="flex justify-center items-start min-h-[208px] w-full" style="background-image: url('https://img.freepik.com/premium-photo/grunge-background_196038-9966.jpg?w=740');">
              <div class="max-w-2xl text-center px-3">
                <h3 class="text-gray-700 text-xl font-bold py-3 pt-7">Linux Redhat</h3>
                <p class="text-md">Get and keep your skills up to speed on Linux server solutions. You’ll find easy to follow videos whether you’re looking to learn the fundamentals of Linux.</p>
              </div>
            </div>
        </div>
      </div>

      <div class="w-72 bg-white shadow-md">
        <div class="relative rounded-sm ">
            <div class="flex justify-start items-center gap-3 py-2 px-4">
                <div class="flex items-center justify-center w-10 h-10 rounded-full  lg:mb-0">
                    <img src="assets\images\mean.png" />
                </div>
                <h6 class="font-semibold leading-5 text-black">MEA(R)N</h6>
            </div>

            <div class="flex justify-center items-start min-h-[208px] w-full" style="background-image: url('https://img.freepik.com/premium-photo/grunge-background_196038-9966.jpg?w=740');">
              <div class="max-w-2xl text-center px-3">
                <h3 class="text-gray-700 text-xl font-bold py-3 pt-7">MEA(R)N Stack</h3>
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
        <img src="assets\images\Server.gif" alt="" class="h-96 md:h-72 w-96 md:w-72" />
    </div>
    <div class="w-full md:w-[55%] lg:w-[65%]">
        <h2 class="mb-10 text-3xl max-w-lg md:max-w-2xl text-[#333] font-bold leading-snug lg:text-3xl lg:leading-snug">A <span class="text-[#E89B19]">revolutionary</span> way to manage servers.</h2>
        <div class="grid gap-y-12 gap-x-8 lg:grid-cols-2 grid-rows-2">
            <div>
                <p class="mb-6 border-l-4 border-[#E89B19] pl-3 lg:pl-4 text-2xl leading-10">Faster Deployment
                </p>
                <p class=" text-gray-800 pr-2">DevOps aims at reducing the software development life cycle, which in turn, enables businesses to deploy their products quickly.</p>
            </div>
            <div>
                <p class="mb-6 border-l-4 border-[#E89B19] pl-3 lg:pl-4 text-2xl leading-10">Improved Collaboration</p>
                <p class=" text-gray-800 pr-2">DevOps provides the much-needed atmosphere to development and operational teams for mutual communication and collaboration.</p>
            </div>
            <div>
                <p class="mb-6 border-l-4 border-[#E89B19] pl-3 lg:pl-4 text-2xl leading-10">Promotes Agility </p>
                <p class="text-gray-800 pr-2">With DevOps, it is feasible to acquire the scalability needed to gain a competitive advantage in the market.</p>
            </div>
            <div>
                <p class="mb-6 border-l-4 border-[#E89B19] pl-3 lg:pl-4 text-2xl leading-10">Early Defect Detection</p>
                <p class=" text-gray-800 pr-2">The continuous monitoring and testing environment of DevOps helps in detecting the flaws in the early stages.</p>
            </div>
        </div>
    </div>
</section>

<section class="px-5 md:px-10 lg:px-32 py-10">
    <div class="min-h-[61vh] w-full bg-no-repeat bg-cover bg-center shadow-xl bg-[url('assets/images/white-bg.avif')]">
      <div class="top min-h-[15vh] w-full rounded-b-[50px] pb-2 px-5 md:px-2 bg-no-repeat bg-cover bg-center bg-[url('assets/images/blue-image.jpg')]">
        <h2 class="text-center font-bold text-2xl text-emerald-300/90 py-4 pb-4 block md:hidden">Get In Touch</h2>

        <div class="flex flex-col md:flex-row px-5 gap-y-3 gap-x-6 justify-start md:justify-evenly items-start py-3 md:py-3 pb-5 md:pb-1">
          <div class="one flex gap-3.5 md:gap-2 justify-center items-start">
            <i class="fa-sharp fa-solid fa-phone text-lg text-[#E89B19]"></i>
            <h3 class="font-semibold text-md text-[whitesmoke]">+918129571359</h3>
          </div>
          <div class="two flex gap-4 md:gap-2 justify-center items-start pl-0 md:pl-8">
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

      <div class="bottom min-h-[50vh] w-full flex flex-col gap-8 flex justify-center items-center py-8">
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
                <a href="#_" class="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block">
                  <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                  <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                  <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                  <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                  <span class="relative">Contact Me!</span>
                </a>
            </div>
      </div>
    </div>
</section>

  <?php include 'footer.php';?>