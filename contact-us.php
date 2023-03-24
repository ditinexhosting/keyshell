<?php 
$title = 'Home';
$metatags = '';
include 'header.php';
?>

<form action="#" class="contact min-h-[90vh] w-full flex shadow-xl relative pl-0 sm:pl-16" autocomplete="off">
  <div class="absolute inset-0 z-[-1]">
    <img src="https://images.pexels.com/photos/5965914/pexels-photo-5965914.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" alt="Background image" class="object-cover w-full h-full">
  </div>
  <div class="min-h-[90vh] w-full flex flex-col gap-10 px-10 md:px-0 justify-center items-center sm:items-start pt-0 sm:pt-4 backdrop-filter backdrop-blur-sm">
    <div class="one flex flex-col sm:flex-row gap-10">
      <input type="text" placeholder="First Name" id="" class="w-72 sm:w-56 text-indigo-700 font-semibold outline-0 border-0 border-b-2 border-gray-200 bg-transparent" required>
      <input type="text" placeholder="Last Name" id="" class="w-72 sm:w-56 text-indigo-700 font-semibold outline-0 border-0 border-b-2 border-gray-200 bg-transparent" required>
    </div>

    <div class="one flex flex-col sm:flex-row gap-10">
      <input type="text" placeholder="Email" id="" class="w-72 sm:w-56 text-indigo-700 font-semibold outline-0 border-0 border-b-2 border-gray-200 bg-transparent" required>
      <input type="text" placeholder="Phone" id="" class="w-72 sm:w-56 text-indigo-700 font-semibold outline-0 border-0 border-b-2 border-gray-200 bg-transparent" required>
    </div>

    <textarea name="" id="" rows="2" placeholder="Your Message" id="" class="text-indigo-700 font-semibold w-[295px] sm:w-[490px] outline-0 border-0 border-b-2 border-gray-200 bg-transparent" required></textarea>

    <a href="#_" class="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
      <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
      <span class="relative">Request Callback</span>
    </a>
  </div>
</form>

<?php include 'footer.php';?>