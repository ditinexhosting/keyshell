<?php 
$title = 'Services';
$metatags = '';
include 'header.php';
?>

<section class="px-5 sm:px-10 lg:px-20 py-14">
    <div class="container min-h-[60vh] flex flex-col md:flex-row justify-center items-center gap-x-10 gap-y-8 sm:gap-y-0">
        <div class="left min-h-96 md:min-h-[60vh] w-full md:w-2/5 flex justify-center items-center">
            <img src="assets/images/Service 24_7-pana.svg" alt="24/7" class="h-80 w-80">
        </div>

        <div class="right flex justify-center items-center min-h-[250px] md:min-h-[60vh] w-full md:w-2/5">
            <h3 class="font-semibold text-lg lg:text-xl text-[#333]">We provide server support for various companies. Experienced server admins, contribute support to Linux, Windows, and AWS servers. 24*7 services are available. Our experienced techs will provide server hardening, 24/7 server monitoring & rescue, backup monitoring, and audits.</h3>
        </div>
    </div>
</section>

<section class="flex justify-center items-center py-5">
  <h1 class="font-semibold text-2xl text px-4 border-b-2 border-[#E89B19] pb-2">Services That We Provide</h1>
</section>

<section class="services px-5 sm:px-10 lg:px-20">
    <div class="main flex min-h-[60vh] flex-wrap justify-center items-center gap-x-3.5 md:gap-x-6 lg:gap-x-10 py-14">
        <div class="card flex flex-col gap-6 h-52 w-72 px-5">
            <img src="assets/images/git.webp" alt="git" class="h-24 w-40" loading="lazy">
            <h1 class="font-semibold text-lg">Installation and Initial Server Setup Assistance</h1>
        </div>

        <div class="card flex flex-col gap-6 h-52 w-72 px-5">
            <img src="assets/images/server.webp" alt="hardening" class="h-24 w-24" loading="lazy">
            <h1 class="font-semibold text-lg">Server Hardening</h1>
        </div>

        <div class="card flex flex-col gap-6 h-52 w-72 px-5">
            <img src="assets/images/cloud-computing.webp" alt="optimization" class="h-24 w-24" loading="lazy">
            <h1 class="font-semibold text-lg">Server Optimization</h1>
        </div>

        <div class="card flex flex-col gap-6 h-52 w-72 px-5">
            <img src="assets/images/cpanel.svg" alt="migration" class="h-24 w-24" loading="lazy">
            <h1 class="font-semibold text-lg">Migration Assistance</h1>
        </div>

        <div class="card flex flex-col gap-6 h-52 w-72 px-5">
            <img src="assets/images/optimization.webp" alt="monitoring" class="h-24 w-24" loading="lazy">
            <h1 class="font-semibold text-lg">Server Monitoring</h1>
        </div>

        <div class="card flex flex-col gap-6 h-52 w-72 px-5">
            <img src="assets/images/chatbot.webp" alt="automation" class="h-24 w-24" loading="lazy">
            <h1 class="font-semibold text-lg">Automate the server using tools such as Ansible, chef</h1>
        </div>

        <div class="card flex flex-col gap-6 h-52 w-72 px-5">
            <img src="assets/images/hacker.webp" alt="hacking" class="h-24 w-24" loading="lazy">
            <h1 class="font-semibold text-lg">Hack & Spamming Issue Investigation</h1>
        </div>

        <div class="card flex flex-col gap-6 h-52 w-72 px-5">
            <img src="assets/images/training.webp" alt="training" class="h-24 w-24" loading="lazy">
            <h1 class="font-semibold text-lg">Industrial Training</h1>
        </div>

        <div class="card flex flex-col gap-6 h-52 w-72 px-5">
            <img src="assets/images/app-development.webp" alt="app development" class="h-24 w-24" loading="lazy">
            <h1 class="font-semibold text-lg">App development</h1>
        </div>

        <div class="card flex flex-col gap-6 h-52 w-72 px-5">
            <img src="assets/images/world-wide-web.webp" alt="web development" class="h-24 w-24" loading="lazy">
            <h1 class="font-semibold text-lg">Web development</h1>
        </div>
    </div>
</section>

<?php include 'footer.php';?>