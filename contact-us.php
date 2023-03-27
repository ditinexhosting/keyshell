<?php 
$title = 'Home';
$metatags = '';
include 'header.php';
?>

<section>
  <form action="" class="h-[90vh] px-14 flex justify-center items-center md:items-start flex-col gap-8 bg-no-repeat bg-cover bg-center bg-[url('assets/images/contact-us-bgImage-min.jpeg')]">
    <div class="one flex flex-col sm:flex-row gap-8">
      <input type="text" placeholder="First Name" class="pl-3 h-13 w-72 sm:w-64 border-0 rounded-md py-2.5 bg-[whitesmoke]">
      <input type="text" placeholder="Last Name" class="pl-3 h-13 w-72 sm:w-64 border-0 rounded-md py-2.5 bg-[whitesmoke]">
    </div>

    <div class="two flex flex-col sm:flex-row gap-8">
      <input type="text" placeholder="Phone" class="pl-3 h-13 w-72 sm:w-64 border-0 rounded-md py-2.5 bg-[whitesmoke]">
      <input type="text" placeholder="Email" class="pl-3 h-13 w-72 sm:w-64 border-0 rounded-md py-2.5 bg-[whitesmoke]">
    </div>

    <textarea rows="2" placeholder="Your Message" class="pl-3 w-[295px] sm:w-[545px] border-0 rounded-md py-2.5 bg-[whitesmoke]"></textarea>

    <input type="submit" value="Submit" class="h-11 w-32 cursor-pointer rounded-md border-0 bg-gray-600 text-white font-semibold tracking-wider ring-2 ring-offset-2 ring-gray-400 transition-all ease-out duration-300">
  </form>
</section>

<?php include 'footer.php';?>