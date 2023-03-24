
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php echo $metatags; ?>
    <title><?php echo $title; ?></title>
    <link rel="stylesheet" href="assets\css\global.css">
    <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body class="bg-[whitesmoke]">

  <div class="h-auto w-full bg-gray-200 flex justify-between gap-5 px-6 md:px-11 items-center py-[5px] sm:py-[6px] shadow-lg">
    <div class="flex flex-wrap gap-y-0 gap-x-5 items-start md:items-center">
      <div class="flex items-center gap-2">
        <span><i class="fa-solid fa-phone-volume pt-[2px] text-[#E89B19] text-xs md:text-base"></i></span>
        <p class="font-semibold text-xs md:text-base text-[#333]">+91 8867676785</p>
      </div>

      <div class="flex items-center gap-2">
        <span><i class="fa-solid fa-envelope text-[#E89B19] text-xs md:text-base"></i></span>
        <p class="font-semibold text-xs md:text-base text-[#333]">keyshell3455@gmail.com</p>
      </div>
    </div>

    <div>
      <ul class="flex gap-2 md:gap-4">
        <li><a href="https://twitter.com" aria-label="Twitter" class="bg-white shadow-md rounded-full p-[4px] sm:p-[4px] px-[5px] sm:px-[6px] text-blue-400 hover:text-blue-600"><i class="fab fa-twitter fa-md sm:fa-lg"></i></a></li>
        <li><a href="https://instagram.com" aria-label="instagram" class="bg-white shadow-md rounded-full p-[4px] sm:p-[4px] px-[5px] sm:px-[6px] text-pink-500 hover:text-pink-700"><i class="fab fa-instagram fa-md sm:fa-lg"></i></a></li>
        <li><a href="https://facebook.com" aria-label="facebook" class="bg-white shadow-md rounded-full p-[4px] sm:p-[4px] px-[5px] sm:px-[6px] text-blue-600 hover:text-blue-800"><i class="fab fa-facebook fa-md sm:fa-lg"></i></a></li>
        <li><a href="https://youtube.com" aria-label="youtube" class="bg-white shadow-md rounded-full p-[4px] sm:p-[4px] px-[5px] sm:px-[6px] text-red-600 hover:text-red-800"><i class="fab fa-youtube fa-md sm:fa-lg"></i></a></li>
        <li><a href="https://pinterest.com" aria-label="pinterest" class="bg-white shadow-md rounded-full p-[4px] sm:p-[4px] px-[5px] sm:px-[6px] text-red-400 hover:text-red-600"><i class="fab fa-pinterest fa-md sm:fa-lg"></i></a></li>
      </ul>
    </div>
  </div>

  <header class="bg-white shadow-md px-5 md:px-10">
    <nav class="flex items-center justify-between max-w-6xl py-3">
      <img src="assets/images/logo-min.png" alt="logo" class="h-14 w-44 rounded-lg">
      <div class="flex md:hidden">
        <i class="fa-solid fa-bars text-xl text-indigo-500" id="navbar-toggle"></i>
      </div>
      <ul id="navbar-menu" class="hidden md:flex md:items-center mt-4 md:mt-0 gap-5 font-semibold">
        <li class="border-b-2 border-[#E89B19] px-1 pt-[4px]">
          <a href="index.php" class="text-[#333] text-lg hover:text-gray-500">Home</a>
        </li>
        <li class="px-1">
          <a href="about-us.php" class="text-[#333] text-lg hover:text-gray-500">About</a>
        </li>
        <li class="px-1">
          <a href="#" class="text-[#333] text-lg hover:text-gray-500">Services</a>
        </li>
        <li class="px-1">
          <a href="contact-us.php" class="text-[#333] text-lg hover:text-gray-500">Contact Us</a>
        </li>
      </ul>
    </nav>
  </header>


  <div id="navbar-drawer" class="hidden md:hidden fixed top-0 left-0 w-full h-full bg-[#333] z-50 transition duration-300 ease-in hover:ease-in">
    <div class="flex justify-between items-center p-3 md:p-3 px-5 md:px-0 bg-white">
      <img src="assets/images/logo-min.png" alt="logo" class="h-14 w-44 rounded-lg">
      <i class="fa-solid fa-xmark text-xl text-indigo-500" id="navbar-close"></i>
    </div>

    <nav class="px-3 mt-4 text-[whitesmoke]">
      <a href="index.php" class="block font-semibold py-2 hover:text-gray-300 w-full bg-sky-500/60 px-3 rounded-md">Home</a>
      <a href="about-us.php" class="block font-semibold py-2 hover:text-red-500 px-3">About Us</a>
      <a href="#" class="block font-semibold py-2 hover:text-red-500 px-3">Services</a>
      <a href="contact-us.php" class="block font-semibold py-2 hover:text-red-500 px-3">Contact Us</a>
    </nav>
  </div> 