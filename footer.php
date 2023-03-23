
<footer class="bg-[#333] text-white flex">
    <div class="container mx-auto py-8 px-4 md:px-10 lg:px-20">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="flex-shrink-0">
          <img src="http://127.0.0.1:5500/contents/themes/keyshell/theme-vars/theme-style/img/logo_retina.png" alt="logo" class="h-16 w-44 rounded-lg">
        </div>
        <div class="mt-4 md:mt-0 pl-0">
          <ul class="flex flex-row md:space-x-8 space-y-4 md:space-y-0 justify-center items-start gap-8 sm:gap-14 md:gap-8 font-semibold pb-3">
            <div class="flex flex-col gap-2 pt-4 md:pt-0">
              <h2 class="text-xl border-b-2 px-2 pb-2 border-gray-300">Product</h2>
              <li class="text-center pt-2"><a href="#services" class="text-gray-300 hover:text-white pt-5">Services</a></li>
            </div>

            <div class="flex flex-col gap-2">
              <h2 class="text-xl border-b-2 px-2 pb-2 border-gray-300">Company</h2>
              <li class="text-center pt-2"><a href="#about" class="text-gray-300 hover:text-white">About Us</a></li>
              <li class="text-center"><a href="#contact" class="text-gray-300 hover:text-white">Contact Us</a></li>
            </div>

            <div class="flex flex-col gap-2">
              <h2 class="text-xl border-b-2 px-2 pb-2 border-gray-300">Socials</h2>
              <li class="text-center pt-2"><a href="#about" class="text-gray-300 hover:text-white">Twitter</a></li>
              <li class="text-center"><a href="#contact" class="text-gray-300 hover:text-white">Instagram</a></li>
              <li class="text-center"><a href="#about" class="text-gray-300 hover:text-white">Youtube</a></li>
              <li class="text-center"><a href="#contact" class="text-gray-300 hover:text-white">Pinterest</a></li>
            </div>
          </ul>
        </div>
        <div class="mt-4 md:mt-0 pl-0 md:pl-4">
          <ul class="flex space-x-4 flex-row md:flex-col lg:flex-row justify-center items-center gap-y-1">
            <li><a href="https://twitter.com" class="text-blue-400 pl-4"><i class="fab fa-twitter fa-lg"></i></a></li>
            <li><a href="https://instagram.com" class="text-pink-400"><i class="fab fa-instagram fa-lg"></i></a></li>
            <li><a href="https://facebook.com" class="text-blue-700"><i class="fab fa-facebook fa-lg"></i></a></li>
            <li><a href="https://youtube.com" class="text-red-600"><i class="fab fa-youtube fa-lg"></i></a></li>
            <li><a href="https://pinterest.com" class="text-red-400"><i class="fab fa-pinterest fa-lg"></i></a></li>
          </ul>
        </div>
      </div>
      <div class="text-center mt-8">
        <p class="text-sm font-semibold text-gray-400 tracking-wider">Designed & Developed by Ditinex © 2021 - All Rights Reserved</p>
      </div>
    </div>
  </footer>
  
</body>
<script>
  const navbarMenu = document.getElementById('navbar-menu');
const navbarToggle = document.getElementById('navbar-toggle');
const navbarDrawer = document.getElementById('navbar-drawer');
const navbarClose = document.getElementById('navbar-close');

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('hidden');
  navbarDrawer.classList.toggle('hidden');
});

navbarClose.addEventListener('click', () => {
  navbarMenu.classList.add('hidden');
  navbarDrawer.classList.add('hidden');
});

</script>

</html>