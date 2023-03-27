<?php 
$title = 'Home';
$metatags = '';
include 'header.php';
?>

    <section class="min-h-[60vh] md:min-h-[82vh] bg-no-repeat bg-cover bg-center bg-[url('assets/images/aboutUs-bgImage-min.webp')]">
        <div class="min-h-[65vh] md:min-h-[82vh] w-full flex flex-col justify-center items-center gap-8 sm:gap-12 px-4 md:px-16 lg:px-32">
          <h2 class="text-center font-bold text-3xl sm:text-4xl text-[#D8D8D8] tracking-wider">Welcome to Keyshell</h2>
          <p class="text-center text-md sm:text-xl font-semibold leading-relaxed text-gray-200 max-w-xl">In Keyshell, we spread knowledge and help youngsters familiarize themselves with the latest technologies. Experienced professionals provide the best technical education with advanced resources.Certified workshops and placement assistance are our key features.</p>
          <a href="#" class="relative z-10 px-6 py-3 font-medium text-white group">
            <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-yellow-400 group-hover:bg-yellow-500 group-hover:skew-x-12"></span>
            <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#E89B19] group-hover:bg-yellow-600 group-hover:-skew-x-12"></span>
            <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
            <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
             <span class="relative z-10">Our Services</span>
            </a>
        </div>
    </section>

    <div class="Text h-auto w-full py-10">
        <h2 class="text-center font-bold text-2xl md:text-4xl text-[#333]">Empower Your Learning with Keyshell</h2>
    </div>

    <section class="pt-5 px-5 sm:px-10 lg:px-20">
        <div class="min-h-[350px] w-full flex flex-col md:flex-row justify-center items-center gap-x-5 lg:gap-x-0">
            <div class="left h-[320px] sm:h-[350px] w-full md:w-2/5 flex justify-center items-center">
                <img src="assets/images/code-typing.webp" alt="variety" class="h-[290px] sm:h-[320px] w-[290px] sm:w-[320px]" loading="lazy">
            </div>

            <div class="right min-h-[240px] md:h-[350px] w-full md:w-2/5 flex justify-center items-center">
                <p class="font-semibold text-lg md:text-xl text-[#333] max-w-[350px]">We offer a wide range of courses in various programming languages, from beginner to advanced levels. Whether you're just starting out or looking to deepen your knowledge, we have something for everyone.</p>
            </div>
        </div>
    </section>

    <section class="py-5 px-5 sm:px-10 lg:px-20">
        <div class="min-h-[350px] w-full flex flex-col-reverse md:flex-row justify-center items-center gap-x-5 lg:gap-x-0">
            <div class="left min-h-[240px] md:h-[350px] w-full md:w-2/5 flex justify-center items-center">
                <p class="font-semibold text-lg sm:text-xl text-[#333] max-w-[350px]">At Keyshell, our mission is to make high-quality coding education accessible to everyone, regardless of their background or experience level. Our team is made up of dedicated and experienced educators, developers, and designers.</p>
            </div>

            <div class="right h-[350px] w-full md:w-2/5 flex justify-center items-center">
                <img src="assets/images/quality.webp" alt="variety" class="h-[290px] sm:h-[320px] w-[290px] sm:w-[320px]" loading="lazy">
            </div>
        </div>
    </section>

<?php include 'footer.php';?>