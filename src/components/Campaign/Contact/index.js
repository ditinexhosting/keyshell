import Image from 'next/image';
import { useState } from 'react';
const index = () => {
  const [callIcon, setCallIcon] = useState('block');
  const [mailIcon, setMailIcon] = useState('none');
  const handelHover = (e) => {
    if (e.target.id === 'mail') {
      setCallIcon('none');
      setMailIcon('block');
    } else {
      setCallIcon('block');
      setMailIcon('none');
    }
  };
  return (
    <section className="mb-32 text-black mt-20" id="contact">
      <div className="mb-9 md:mb-20 flex">
        <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold">
          Let’s start something new together
        </h1>
        <div>
          <div className="bg-primary rounded-full animate-[spin_5s_linear_infinite]">
            <svg
              className="w-20 h-20 md:w-[150px] md:h-[150px]"
              viewBox="0 0 128 128"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M71.1938 8.33239L70.6594 11.3201C70.5378 11.4452 70.3443 11.5733 70.0788 11.7044C69.8133 11.8354 69.4708 11.9309 69.0513 11.9908C68.6326 12.0469 68.129 12.0223 67.5407 11.917C67.0485 11.829 66.6125 11.6597 66.2327 11.4093C65.8529 11.1588 65.5411 10.8391 65.2971 10.4503C65.0577 10.0582 64.8977 9.61094 64.8169 9.10841C64.74 8.60656 64.7542 8.06147 64.8594 7.47315L65.041 6.45802C65.1442 5.88123 65.312 5.37554 65.5445 4.94094C65.7777 4.50249 66.0661 4.14337 66.4098 3.86358C66.7535 3.58379 67.1408 3.39314 67.5717 3.29164C68.007 3.18698 68.4747 3.17935 68.9746 3.26877C69.5975 3.38019 70.1031 3.58174 70.4914 3.87342C70.8797 4.1651 71.1594 4.52068 71.3304 4.94015C71.5059 5.35647 71.5802 5.80627 71.5533 6.28955L70.8438 6.16265C70.8498 5.81848 70.7933 5.49092 70.6744 5.17996C70.5561 4.86515 70.3509 4.59234 70.0589 4.36153C69.7707 4.1314 69.3728 3.97095 68.8652 3.88016C68.4576 3.80725 68.0808 3.81723 67.7348 3.91011C67.3927 4.00367 67.0892 4.16963 66.8244 4.40796C66.5595 4.6463 66.3366 4.94968 66.1556 5.3181C65.9753 5.68268 65.8429 6.10145 65.7583 6.57441L65.5746 7.60109C65.4866 8.09327 65.4687 8.5484 65.5209 8.96647C65.5769 9.38522 65.6968 9.75785 65.8804 10.0844C66.0641 10.4109 66.3056 10.6802 66.6049 10.8925C66.905 11.1009 67.2549 11.2409 67.6548 11.3125C68.0816 11.3888 68.4522 11.4134 68.7666 11.3863C69.081 11.3592 69.3385 11.3061 69.5392 11.2269C69.7444 11.1445 69.8963 11.0606 69.9949 10.9751L70.3818 8.81214L68.1266 8.40875L68.2349 7.80313L71.1938 8.33239Z"
                fill="black"
              />
              <path
                d="M78.7297 13.4402L78.5376 14.0246L73.9787 12.5261L74.1708 11.9416L78.7297 13.4402ZM76.8488 4.48917L74.1847 12.5938L73.5 12.3687L76.1641 4.26412L76.8488 4.48917ZM79.4391 9.36823L79.247 9.9527L75.2559 8.64077L75.448 8.0563L79.4391 9.36823ZM81.1738 5.91088L80.9799 6.50092L76.4489 5.01151L76.6428 4.42147L81.1738 5.91088Z"
                fill="black"
              />
              <path
                d="M87.3248 7.973L83.5114 15.6045L82.872 15.285L86.6854 7.65347L87.3248 7.973ZM89.9403 9.27992L89.6627 9.83552L83.7975 6.90475L84.0752 6.34916L89.9403 9.27992Z"
                fill="black"
              />
              <path
                d="M97.8562 13.723L92.7375 20.5481L92.1609 20.1157L97.2796 13.2906L97.8562 13.723Z"
                fill="black"
              />
              <path
                d="M106.355 20.6721L100.129 26.5041L99.6322 25.9739L101.599 17.4116L96.2796 22.3945L95.7869 21.8685L102.013 16.0364L102.506 16.5624L100.547 25.1332L105.867 20.1504L106.355 20.6721Z"
                fill="black"
              />
              <path
                d="M114.58 30.4872L107.171 34.7177L106.817 34.0969L114.225 29.8664L114.58 30.4872ZM116.03 33.0262L115.49 33.3342L112.239 27.6405L112.778 27.3325L116.03 33.0262Z"
                fill="black"
              />
              <path
                d="M116.605 42.5779L115.744 42.8829C115.18 43.0823 114.644 43.1892 114.135 43.2035C113.632 43.2202 113.169 43.1478 112.747 42.9863C112.327 42.8285 111.962 42.5888 111.653 42.267C111.345 41.9453 111.106 41.5451 110.936 41.0664C110.771 40.5987 110.706 40.141 110.742 39.6931C110.78 39.2488 110.912 38.8313 111.138 38.4404C111.364 38.0495 111.677 37.6984 112.077 37.3871C112.48 37.0746 112.963 36.8185 113.527 36.6191L114.388 36.3141C114.952 36.1147 115.486 36.0085 115.991 35.9955C116.501 35.9849 116.967 36.0603 117.389 36.2218C117.811 36.3833 118.176 36.6249 118.484 36.9466C118.793 37.2683 119.03 37.663 119.196 38.1306C119.365 38.6093 119.431 39.0708 119.394 39.515C119.356 39.9593 119.224 40.3768 118.998 40.7677C118.771 41.1586 118.456 41.5085 118.052 41.8174C117.651 42.125 117.169 42.3785 116.605 42.5779ZM115.505 42.209L116.378 41.9001C116.853 41.732 117.26 41.5256 117.601 41.2808C117.942 41.0398 118.21 40.7649 118.403 40.4562C118.597 40.1512 118.712 39.8204 118.748 39.4639C118.783 39.1075 118.732 38.7341 118.594 38.3437C118.459 37.9644 118.267 37.6492 118.016 37.3981C117.766 37.147 117.469 36.9622 117.124 36.8438C116.781 36.729 116.4 36.6817 115.98 36.7018C115.562 36.7256 115.115 36.8215 114.64 36.9896L113.767 37.2985C113.288 37.468 112.877 37.6757 112.533 37.9217C112.194 38.1701 111.926 38.4493 111.73 38.7594C111.536 39.0681 111.421 39.3988 111.385 39.7516C111.349 40.1081 111.399 40.476 111.533 40.8553C111.672 41.2493 111.867 41.5719 112.118 41.823C112.368 42.0741 112.665 42.257 113.008 42.3718C113.355 42.4852 113.737 42.5282 114.154 42.5008C114.576 42.4757 115.026 42.3785 115.505 42.209Z"
                fill="black"
              />
              <path
                d="M123.097 50.5534L123.224 51.2628L117.537 52.2801C116.906 52.3929 116.357 52.3541 115.891 52.1637C115.424 51.9734 115.047 51.6718 114.759 51.2591C114.471 50.8502 114.279 50.3746 114.182 49.8325C114.082 49.2749 114.096 48.7545 114.224 48.2713C114.352 47.7882 114.602 47.3783 114.975 47.0419C115.348 46.7093 115.849 46.4866 116.48 46.3738L122.167 45.3565L122.293 46.0602L116.606 47.0775C116.118 47.1648 115.725 47.3342 115.429 47.5856C115.133 47.837 114.932 48.1467 114.827 48.5147C114.723 48.8826 114.709 49.2858 114.788 49.7241C114.865 50.1586 115.017 50.5303 115.243 50.8391C115.469 51.1479 115.764 51.3689 116.13 51.502C116.495 51.6351 116.921 51.658 117.41 51.5706L123.097 50.5534Z"
                fill="black"
              />
              <path
                d="M118.6 60.3202L118.614 61.0407C118.038 60.9932 117.539 60.8446 117.116 60.5949C116.697 60.3452 116.372 59.9998 116.141 59.5589C115.91 59.1179 115.788 58.5831 115.776 57.9543C115.767 57.47 115.85 57.0289 116.026 56.6309C116.202 56.2368 116.455 55.8959 116.786 55.6082C117.12 55.3204 117.522 55.0958 117.992 54.9344C118.461 54.773 118.985 54.6867 119.563 54.6755L120.629 54.6549C121.207 54.6438 121.732 54.7098 122.204 54.8531C122.679 54.9963 123.09 55.2072 123.435 55.4857C123.78 55.7643 124.049 56.1009 124.24 56.4958C124.431 56.8906 124.531 57.3379 124.541 57.8378C124.553 58.4432 124.452 58.9687 124.238 59.4143C124.027 59.8599 123.718 60.2136 123.309 60.4754C122.9 60.7412 122.403 60.909 121.818 60.9789L121.804 60.2583C122.264 60.1947 122.652 60.0661 122.969 59.8725C123.285 59.6788 123.524 59.4144 123.686 59.0792C123.852 58.7478 123.93 58.338 123.92 57.8498C123.912 57.4515 123.829 57.0975 123.671 56.788C123.513 56.4785 123.289 56.2172 123 56.004C122.714 55.7907 122.373 55.6293 121.976 55.5197C121.58 55.4141 121.139 55.3659 120.655 55.3753L119.577 55.3961C119.108 55.4051 118.678 55.4681 118.286 55.5851C117.893 55.7021 117.555 55.8688 117.27 56.0853C116.985 56.3057 116.765 56.5717 116.611 56.8833C116.457 57.1949 116.384 57.548 116.391 57.9424C116.401 58.4462 116.489 58.8645 116.656 59.1973C116.826 59.5339 117.074 59.7929 117.397 59.9742C117.721 60.1554 118.122 60.2708 118.6 60.3202Z"
                fill="black"
              />
              <path
                d="M120.472 70.0779L119.865 69.9788L120.7 64.8609L121.307 64.9599L120.472 70.0779ZM125.056 65.7436L116.636 64.3702L116.752 63.6589L125.172 65.0323L125.056 65.7436ZM124.155 71.2663L115.735 69.8929L115.851 69.1816L124.271 70.555L124.155 71.2663Z"
                fill="black"
              />
              <path
                d="M108.665 97.9772L106.34 96.0262C106.292 95.8585 106.278 95.6269 106.296 95.3314C106.315 95.0358 106.402 94.6913 106.559 94.2977C106.719 93.9066 106.991 93.4822 107.375 93.0244C107.697 92.6413 108.061 92.3475 108.467 92.1428C108.873 91.9382 109.306 91.8268 109.764 91.8089C110.224 91.7965 110.691 91.8803 111.167 92.0605C111.641 92.2437 112.106 92.5274 112.564 92.9115L113.354 93.5744C113.803 93.9511 114.158 94.3484 114.419 94.7664C114.683 95.1869 114.851 95.6159 114.923 96.0533C114.994 96.4906 114.967 96.9214 114.84 97.3456C114.714 97.7753 114.488 98.1847 114.162 98.5737C113.755 99.0584 113.328 99.3966 112.882 99.5881C112.436 99.7796 111.988 99.8451 111.539 99.7846C111.091 99.7295 110.664 99.57 110.258 99.306L110.721 98.754C111.017 98.9305 111.329 99.0446 111.658 99.0963C111.99 99.1504 112.329 99.1083 112.674 98.9699C113.017 98.8346 113.354 98.5694 113.686 98.1744C113.952 97.8572 114.131 97.5255 114.223 97.1792C114.312 96.8359 114.319 96.4901 114.244 96.1417C114.169 95.7934 114.017 95.449 113.788 95.1086C113.561 94.7707 113.264 94.4474 112.896 94.1385L112.097 93.4681C111.714 93.1467 111.328 92.9046 110.94 92.7417C110.549 92.5818 110.166 92.5002 109.791 92.497C109.417 92.4937 109.063 92.569 108.73 92.7229C108.4 92.8793 108.104 93.1131 107.843 93.4243C107.564 93.7565 107.358 94.0656 107.225 94.3517C107.092 94.6379 107.01 94.8877 106.979 95.1011C106.948 95.3201 106.945 95.4936 106.97 95.6217L108.654 97.0342L110.126 95.2792L110.598 95.6746L108.665 97.9772Z"
                fill="black"
              />
              <path
                d="M100.208 102.203L99.7972 101.745L103.37 98.5419L103.781 99L100.208 102.203ZM108.904 105.039L103.209 98.6866L103.746 98.2056L109.44 104.558L108.904 105.039ZM103.383 104.85L102.972 104.392L106.1 101.587L106.511 102.045L103.383 104.85ZM105.514 108.078L105.099 107.615L108.651 104.432L109.065 104.894L105.514 108.078Z"
                fill="black"
              />
              <path
                d="M100.815 112.21L96.0785 105.114L96.673 104.717L101.41 111.813L100.815 112.21ZM98.3837 113.833L98.0389 113.316L103.492 109.676L103.837 110.192L98.3837 113.833Z"
                fill="black"
              />
              <path
                d="M90.7056 118.417L87.3237 110.585L87.9853 110.299L91.3673 118.131L90.7056 118.417Z"
                fill="black"
              />
              <path
                d="M80.1427 122.41L78.2258 114.097L78.9338 113.934L85.3505 119.934L83.7127 112.832L84.415 112.67L86.3319 120.983L85.6296 121.145L79.2015 115.147L80.8393 122.249L80.1427 122.41Z"
                fill="black"
              />
              <path
                d="M67.5338 124.56L67.5997 116.029L68.3145 116.034L68.2486 124.565L67.5338 124.56ZM64.6101 124.537L64.6149 123.916L71.1713 123.967L71.1665 124.588L64.6101 124.537Z"
                fill="black"
              />
              <path
                d="M56.0139 120.222L56.1817 119.323C56.2914 118.736 56.4676 118.218 56.7101 117.771C56.9481 117.326 57.2426 116.962 57.5937 116.678C57.941 116.393 58.3311 116.198 58.7642 116.092C59.1972 115.986 59.6633 115.98 60.1625 116.073C60.6502 116.164 61.0787 116.338 61.4482 116.593C61.8139 116.848 62.1091 117.172 62.334 117.563C62.5589 117.955 62.7059 118.402 62.7751 118.904C62.8436 119.409 62.823 119.956 62.7133 120.543L62.5455 121.442C62.4357 122.029 62.26 122.545 62.0181 122.988C61.7718 123.435 61.473 123.8 61.1219 124.085C60.7708 124.369 60.3788 124.564 59.9457 124.67C59.5127 124.775 59.0523 124.783 58.5646 124.692C58.0655 124.599 57.6331 124.424 57.2674 124.169C56.9018 123.914 56.6065 123.591 56.3817 123.199C56.1568 122.807 56.012 122.359 55.9474 121.854C55.882 121.353 55.9041 120.809 56.0139 120.222ZM56.8844 119.454L56.7144 120.364C56.6219 120.86 56.5963 121.316 56.6376 121.733C56.6751 122.149 56.779 122.518 56.9494 122.84C57.1159 123.161 57.3445 123.427 57.6353 123.636C57.926 123.845 58.2749 123.988 58.6819 124.064C59.0774 124.138 59.4466 124.129 59.7894 124.038C60.1323 123.947 60.4412 123.783 60.7163 123.544C60.9875 123.304 61.2196 122.998 61.4125 122.625C61.6015 122.251 61.7423 121.816 61.8349 121.321L62.0048 120.411C62.0981 119.912 62.1244 119.452 62.0838 119.031C62.0386 118.613 61.9312 118.241 61.7616 117.915C61.5912 117.594 61.3626 117.328 61.0757 117.12C60.785 116.911 60.4418 116.769 60.0463 116.695C59.6355 116.618 59.2586 116.625 58.9158 116.716C58.5729 116.807 58.2659 116.972 57.9947 117.212C57.7227 117.455 57.4942 117.764 57.3089 118.139C57.1191 118.517 56.9776 118.955 56.8844 119.454Z"
                fill="black"
              />
              <path
                d="M45.9579 121.861L45.2803 121.616L47.2489 116.184C47.4672 115.582 47.7756 115.126 48.1741 114.818C48.5725 114.509 49.0226 114.334 49.5241 114.291C50.022 114.247 50.5298 114.319 51.0477 114.507C51.5802 114.7 52.0235 114.973 52.3776 115.325C52.7318 115.678 52.9612 116.1 53.0658 116.591C53.1668 117.08 53.1081 117.626 52.8899 118.228L50.9213 123.66L50.2492 123.416L52.2178 117.985C52.3868 117.518 52.4368 117.094 52.3676 116.712C52.2985 116.329 52.1309 116 51.865 115.725C51.599 115.45 51.2567 115.237 50.838 115.085C50.423 114.935 50.0253 114.88 49.6449 114.921C49.2645 114.962 48.9253 115.107 48.6272 115.356C48.3291 115.605 48.0955 115.963 47.9265 116.429L45.9579 121.861Z"
                fill="black"
              />
              <path
                d="M39.6604 113.02L39.0306 112.67C39.361 112.196 39.7405 111.84 40.169 111.6C40.5956 111.363 41.0576 111.256 41.555 111.278C42.0524 111.3 42.5759 111.464 43.1254 111.77C43.5487 112.005 43.8881 112.299 44.1435 112.651C44.3956 113.002 44.5628 113.392 44.6453 113.822C44.7258 114.256 44.7177 114.717 44.621 115.204C44.5243 115.691 44.3354 116.187 44.0543 116.692L43.5357 117.624C43.2546 118.129 42.9335 118.549 42.5725 118.885C42.2095 119.224 41.8209 119.473 41.4064 119.631C40.992 119.789 40.5661 119.852 40.1286 119.818C39.6912 119.785 39.254 119.647 38.8171 119.404C38.288 119.109 37.8848 118.757 37.6073 118.348C37.328 117.943 37.1781 117.497 37.1575 117.012C37.1336 116.525 37.2385 116.011 37.4722 115.47L38.1019 115.821C37.9256 116.25 37.8415 116.65 37.8496 117.021C37.8577 117.392 37.9659 117.732 38.1744 118.04C38.3775 118.35 38.6925 118.624 39.1191 118.861C39.4673 119.055 39.8149 119.161 40.1621 119.18C40.5092 119.199 40.8477 119.137 41.1775 118.994C41.5054 118.854 41.8165 118.641 42.1107 118.353C42.4016 118.063 42.6647 117.707 42.9003 117.284L43.4245 116.342C43.6524 115.932 43.8145 115.528 43.9108 115.13C44.007 114.732 44.0333 114.356 43.9895 114.001C43.9423 113.644 43.8229 113.32 43.6311 113.03C43.4393 112.74 43.171 112.499 42.8263 112.307C42.386 112.062 41.9801 111.928 41.6087 111.905C41.2319 111.883 40.8838 111.966 40.5642 112.155C40.2446 112.344 39.9433 112.632 39.6604 113.02Z"
                fill="black"
              />
              <path
                d="M30.4909 109.858L30.8812 109.382L34.8897 112.672L34.4993 113.147L30.4909 109.858ZM31.9407 115.997L37.3529 109.403L37.91 109.86L32.4978 116.455L31.9407 115.997ZM27.6152 112.447L33.0274 105.853L33.5845 106.31L28.1723 112.905L27.6152 112.447Z"
                fill="black"
              />
              <path
                d="M12.2849 85.8308L15.1345 84.7859C15.3038 84.8279 15.512 84.9304 15.7591 85.0936C16.0062 85.2568 16.2613 85.5044 16.5245 85.8365C16.7841 86.1698 17.0167 86.6171 17.2225 87.1782C17.3946 87.6476 17.4682 88.1095 17.4434 88.5638C17.4186 89.0181 17.2998 89.4486 17.087 89.8553C16.8691 90.2597 16.5636 90.6235 16.1703 90.9466C15.7757 91.266 15.2978 91.5286 14.7367 91.7344L13.7685 92.0894C13.2184 92.2911 12.697 92.4011 12.2045 92.4195C11.7083 92.4392 11.2527 92.3711 10.8378 92.2154C10.4229 92.0597 10.063 91.8213 9.75808 91.5004C9.44817 91.1772 9.20581 90.7772 9.03098 90.3005C8.81313 89.7063 8.73225 89.1681 8.78836 88.6857C8.84446 88.2033 9.01053 87.7825 9.28657 87.4233C9.55759 87.0618 9.90856 86.7709 10.3395 86.5504L10.5876 87.2271C10.2874 87.3954 10.033 87.6094 9.82441 87.8689C9.61219 88.1298 9.48004 88.4445 9.42797 88.8131C9.37455 89.178 9.4366 89.6025 9.61411 90.0866C9.75666 90.4754 9.95526 90.7957 10.2099 91.0477C10.4632 91.296 10.7595 91.4744 11.0989 91.5829C11.4383 91.6915 11.8127 91.731 12.2221 91.7016C12.6278 91.6734 13.0562 91.5767 13.5073 91.4113L14.4866 91.0522C14.956 90.8801 15.3581 90.6661 15.6928 90.4102C16.0262 90.1507 16.2875 89.8593 16.4769 89.536C16.6662 89.2128 16.7771 88.8684 16.8095 88.5029C16.8382 88.1387 16.7827 87.7659 16.6428 87.3845C16.4935 86.9774 16.3279 86.645 16.146 86.3871C15.9641 86.1293 15.7884 85.9337 15.6188 85.8004C15.4443 85.6647 15.2952 85.5758 15.1716 85.5337L13.1086 86.2902L13.8973 88.4412L13.3197 88.653L12.2849 85.8308Z"
                fill="black"
              />
              <path
                d="M12.8393 76.4401L13.4414 76.3133L14.4303 81.0091L13.8283 81.1359L12.8393 76.4401ZM6.0375 82.5551L14.3856 80.797L14.5341 81.5022L6.18602 83.2604L6.0375 82.5551ZM8.96044 77.8678L9.56247 77.741L10.4282 81.852L9.82622 81.9788L8.96044 77.8678ZM5.09927 78.1001L5.70703 77.9721L6.68994 82.6393L6.08218 82.7673L5.09927 78.1001Z"
                fill="black"
              />
              <path
                d="M3.83601 71.8349L12.351 71.3086L12.3951 72.0221L3.88011 72.5484L3.83601 71.8349ZM3.65563 68.9167L4.27554 68.8784L4.68003 75.4225L4.06012 75.4608L3.65563 68.9167Z"
                fill="black"
              />
              <path
                d="M3.52297 59.9845L11.9972 60.9687L11.9141 61.6846L3.43982 60.7003L3.52297 59.9845Z"
                fill="black"
              />
              <path
                d="M5.31255 48.8885L13.4754 51.3683L13.2642 52.0635L4.86435 54.6373L11.8387 56.7561L11.6292 57.4457L3.4663 54.9658L3.6758 54.2762L12.0791 51.6913L5.10476 49.5725L5.31255 48.8885Z"
                fill="black"
              />
              <path
                d="M9.65899 36.991L17.0202 41.3031L16.6589 41.92L9.29767 37.6078L9.65899 36.991ZM11.1368 34.4682L11.6728 34.7821L8.3587 40.4396L7.82279 40.1256L11.1368 34.4682Z"
                fill="black"
              />
              <path
                d="M19.2092 29.0929L19.9029 29.6881C20.3565 30.0772 20.7162 30.4888 20.9821 30.9228C21.2476 31.3512 21.4154 31.7886 21.4855 32.2347C21.5582 32.678 21.532 33.1135 21.4068 33.5414C21.2816 33.9693 21.0537 34.3759 20.723 34.7613C20.4 35.1378 20.0353 35.422 19.6289 35.6137C19.225 35.8025 18.7973 35.8962 18.3456 35.8947C17.894 35.8932 17.4337 35.7968 16.9647 35.6055C16.4928 35.4117 16.0301 35.1202 15.5765 34.7311L14.8827 34.1359C14.4291 33.7468 14.0709 33.3365 13.8079 32.905C13.5446 32.4681 13.3778 32.0265 13.3077 31.5803C13.2376 31.1342 13.2651 30.6971 13.3903 30.2693C13.5155 29.8414 13.7396 29.4392 14.0626 29.0627C14.3932 28.6773 14.7605 28.3902 15.1643 28.2014C15.5682 28.0126 15.996 27.9189 16.4476 27.9204C16.8993 27.9219 17.3598 28.021 17.8291 28.2178C18.2955 28.4121 18.7555 28.7038 19.2092 29.0929ZM19.4374 30.2306L18.7348 29.6278C18.3524 29.2997 17.9703 29.0491 17.5886 28.8761C17.2095 28.7001 16.838 28.6052 16.474 28.5915C16.1126 28.5748 15.7685 28.6399 15.4418 28.7868C15.1151 28.9337 14.8169 29.1643 14.5473 29.4785C14.2853 29.7839 14.1079 30.1077 14.0149 30.45C13.922 30.7923 13.91 31.1423 13.9789 31.4999C14.0503 31.8546 14.1993 32.2089 14.4258 32.5627C14.6549 32.9137 14.9606 33.2532 15.3431 33.5813L16.0457 34.1841C16.4311 34.5147 16.8162 34.7678 17.2008 34.9434C17.585 35.1135 17.9606 35.2067 18.3275 35.2229C18.6914 35.2366 19.0355 35.1715 19.3597 35.0276C19.6864 34.8808 19.9808 34.6546 20.2428 34.3493C20.5149 34.032 20.6975 33.7023 20.7904 33.36C20.8833 33.0177 20.8941 32.6692 20.8226 32.3145C20.7482 31.9573 20.5952 31.6047 20.3636 31.2568C20.1316 30.9033 19.8229 30.5613 19.4374 30.2306Z"
                fill="black"
              />
              <path
                d="M22.811 19.5558L23.3613 19.0906L27.0911 23.5026C27.5047 23.9919 27.746 24.4861 27.8151 24.9852C27.8841 25.4844 27.8122 25.9621 27.5993 26.4182C27.3895 26.8718 27.0742 27.2764 26.6536 27.632C26.221 27.9977 25.7637 28.2462 25.2814 28.3777C24.7992 28.5091 24.3192 28.498 23.8415 28.3443C23.3667 28.1881 22.9226 27.8654 22.509 27.3762L18.7792 22.9641L19.3251 22.5026L23.0549 26.9147C23.3752 27.2935 23.7183 27.5482 24.0844 27.6786C24.4504 27.8091 24.8189 27.8275 25.1899 27.7339C25.5608 27.6402 25.9163 27.4497 26.2564 27.1622C26.5935 26.8772 26.8391 26.5596 26.9932 26.2094C27.1473 25.8592 27.1904 25.4928 27.1227 25.1102C27.055 24.7275 26.861 24.3468 26.5407 23.9679L22.811 19.5558Z"
                fill="black"
              />
              <path
                d="M33.6642 18.449L34.282 18.0779C34.5275 18.6003 34.6473 19.107 34.6416 19.5981C34.6338 20.0858 34.4963 20.5397 34.2293 20.9599C33.9622 21.3801 33.5591 21.7521 33.02 22.0759C32.6048 22.3253 32.1808 22.473 31.748 22.5187C31.3186 22.5625 30.8969 22.5128 30.4828 22.3697C30.0667 22.2232 29.6717 21.9866 29.2977 21.6598C28.9237 21.3331 28.5879 20.922 28.2902 20.4264L27.741 19.5122C27.4433 19.0167 27.2391 18.5287 27.1283 18.0485C27.0155 17.5648 26.9938 17.1039 27.0633 16.6658C27.1327 16.2276 27.2909 15.8273 27.5379 15.4647C27.785 15.1022 28.1228 14.7921 28.5514 14.5347C29.0704 14.2229 29.5764 14.0488 30.0695 14.0123C30.5605 13.9726 31.0214 14.0648 31.4523 14.289C31.8865 14.5112 32.2796 14.8583 32.6316 15.3304L32.0138 15.7015C31.7295 15.3346 31.4246 15.0621 31.0989 14.884C30.7732 14.706 30.4248 14.6305 30.0537 14.6575C29.6839 14.6791 29.2898 14.8156 28.8712 15.0671C28.5297 15.2723 28.2642 15.5206 28.0747 15.8121C27.8853 16.1036 27.7702 16.4279 27.7296 16.785C27.6869 17.1388 27.7169 17.5149 27.8196 17.9134C27.9256 18.31 28.1034 18.7159 28.3528 19.1311L28.908 20.0553C29.1494 20.4571 29.4185 20.7989 29.7154 21.0808C30.0124 21.3627 30.3256 21.5732 30.6553 21.7124C30.9883 21.8496 31.3284 21.9073 31.6754 21.8857C32.0224 21.8641 32.365 21.7517 32.7032 21.5485C33.1351 21.289 33.4539 21.0042 33.6594 20.6939C33.8662 20.3782 33.9675 20.0349 33.9633 19.6637C33.9591 19.2926 33.8594 18.8877 33.6642 18.449Z"
                fill="black"
              />
              <path
                d="M40.8591 12.1146L41.0774 12.6898L36.2293 14.5297L36.011 13.9545L40.8591 12.1146ZM34.8122 10.317L37.8393 18.2931L37.1655 18.5488L34.1384 10.5727L34.8122 10.317ZM40.0439 8.33151L43.0709 16.3077L42.3971 16.5634L39.3701 8.58723L40.0439 8.33151Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
          <div className="flex justify-between">
            <div className="flex flex-col gap-5 ">
              <a
                id="phone"
                className="text-primary font-bold text-2xl cursor-pointer"
                onMouseEnter={handelHover}
              >
                +91 8867676785
              </a>
              <a
                id="mail"
                className="text-primary font-bold text-2xl cursor-pointer"
                onMouseEnter={handelHover}
              >
                keyshell3455@gmail.com
              </a>
            </div>
            <div>
              <div className="border-2 rounded-full p-2 border-black">
                <svg
                  width="38"
                  style={{ display: callIcon }}
                  height="38"
                  viewBox="0 0 38 38"
                  fill="#000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.7299 3.1793C22.3767 3.12867 22.0219 3.2331 21.7397 3.45778C21.4495 3.68562 21.2682 4.01473 21.2288 4.38339C21.1452 5.12863 21.6829 5.80267 22.4272 5.88653C27.5598 6.4593 31.5492 10.4576 32.1263 15.6063C32.2036 16.2961 32.7823 16.8167 33.473 16.8167C33.525 16.8167 33.5755 16.8135 33.6275 16.8072C33.9886 16.7676 34.3103 16.5888 34.5373 16.304C34.7628 16.0192 34.8653 15.6648 34.8243 15.3025C34.1053 8.87856 29.1335 3.8929 22.7299 3.1793ZM22.8285 8.69248C22.0748 8.55325 21.3825 9.03425 21.239 9.76999C21.0955 10.5057 21.578 11.2241 22.3113 11.3681C24.5189 11.7984 26.2234 13.5073 26.6555 15.7224V15.724C26.7785 16.3616 27.3398 16.8252 27.9863 16.8252C28.0731 16.8252 28.1598 16.8173 28.2481 16.8015C28.9813 16.6543 29.4638 15.9376 29.3204 15.2003C28.6754 11.8918 26.1288 9.33646 22.8285 8.69248ZM25.3333 23.8934C26.0481 23.4813 26.8555 23.0158 27.8739 23.2324C28.7964 23.427 31.9406 25.9792 32.8015 26.8636C33.3661 27.4427 33.6798 28.0408 33.7287 28.6389C33.8139 30.9854 30.6255 33.6641 30.0452 33.998C29.2741 34.5534 28.3769 34.8334 27.3693 34.8334C26.3396 34.8334 25.1917 34.5407 23.9397 33.9569C17.1466 31.1215 6.76943 20.9492 4.02572 14.2088C2.88724 11.6994 2.87935 9.62981 4.00679 8.07446C4.4562 7.34504 7.01857 4.29605 9.31288 4.39257C9.92311 4.44478 10.516 4.75807 11.0979 5.32768C11.9777 6.19 14.466 9.34342 14.6584 10.269C14.8713 11.2975 14.4045 12.1155 13.9898 12.8339C13.9013 12.9883 13.7822 13.1715 13.6516 13.3723C13.1561 14.1342 12.4965 15.1484 12.7299 15.7958C14.4029 19.9033 18.2678 23.4871 22.377 25.1706C23.0125 25.4016 24.0261 24.7373 24.7856 24.2396C24.9835 24.1099 25.1641 23.9916 25.3163 23.9033L25.3333 23.8934Z"
                    fill="#1C1C1C"
                  />
                </svg>
                <svg
                  style={{ display: mailIcon }}
                  width="38"
                  height="38"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 9.00005L10.2 13.65C11.2667 14.45 12.7333 14.45 13.8 13.65L20 9"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 9.17681C3 8.45047 3.39378 7.78123 4.02871 7.42849L11.0287 3.5396C11.6328 3.20402 12.3672 3.20402 12.9713 3.5396L19.9713 7.42849C20.6062 7.78123 21 8.45047 21 9.17681V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V9.17681Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden w-fit mt-5 relative">
            <Image
              src="/images/map-image.png"
              width={450}
              height={450}
              alt="Map"
            />
            <div className="absolute top-16 left-9">
              <svg
                width="70"
                height="80"
                viewBox="0 0 84 98"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.916504 40.8692C0.916504 18.6366 19.4953 0.666748 41.9682 0.666748C64.5044 0.666748 83.0832 18.6366 83.0832 40.8692C83.0832 52.0726 79.0087 62.4736 72.3024 71.2894C64.9041 81.0137 55.7853 89.4863 45.5211 96.1368C43.172 97.6738 41.0519 97.7898 38.4737 96.1368C28.1511 89.4863 19.0323 81.0137 11.6973 71.2894C4.98609 62.4736 0.916504 52.0726 0.916504 40.8692ZM28.4386 42.121C28.4386 49.569 34.5162 55.4268 41.9682 55.4268C49.425 55.4268 55.5611 49.569 55.5611 42.121C55.5611 34.7311 49.425 28.5881 41.9682 28.5881C34.5162 28.5881 28.4386 34.7311 28.4386 42.121Z"
                  fill="#F61E1E"
                />
              </svg>
            </div>
            <div className="absolute bottom-4 left-4 text-white text-lg p-5 transition-all opacity-0 hover:opacity-100">
              <span className="block text-sm text-primary">Location</span>
              <p className="underline">
                1st floor Carnival Infopark Phase1 Infopark, Kakkanad, Kochi,
                Kerala 682042, India
              </p>
            </div>
          </div>
        </div>
        <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
          <form>
            <div className="floating-form">
              <div className="relative mb-[50px]">
                <input className="floating-input" type="text" placeholder=" " />
                <label>Name</label>
              </div>
              <div className="relative mb-[50px]">
                <input className="floating-input" type="text" placeholder=" " />
                <label>Email</label>
              </div>
              <div className="relative mb-[50px]">
                <input className="floating-input" type="text" placeholder=" " />
                <label>Phone</label>
              </div>
              <div className="relative mb-[50px]">
                <input className="floating-input" type="text" placeholder=" " />
                <label>Subject</label>
              </div>

              <div className="relative mb-[50px]">
                <textarea
                  className="floating-input floating-textarea"
                  placeholder=" "
                ></textarea>
                <label>Message</label>
              </div>
              <div className="float-right">
                <button className="rounded-full bg-primary p-3 px-7 font-bold text-lg text-white flex justify-center items-center gap-4 shadow-md hover:shadow-2xl transition-all">
                  Get a <br />
                  Quote
                  <svg
                    className="animate-[spin_2s_linear_infinite]"
                    width="42"
                    height="39"
                    viewBox="0 0 42 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.7572 1.57911C19.9824 0.52425 21.4878 0.524246 21.713 1.5791L23.7901 11.3047C23.9337 11.9771 24.6974 12.3073 25.2857 11.9514L34.3928 6.4418C35.3387 5.86956 36.3767 7.02861 35.704 7.9059L29.83 15.5664C29.3714 16.1646 29.7142 17.0358 30.4574 17.161L40.6181 18.8731C41.7298 19.0605 41.7298 20.658 40.6181 20.8453L30.4574 22.5574C29.7142 22.6826 29.3714 23.5539 29.83 24.152L35.704 31.8125C36.3766 32.6898 35.3387 33.8489 34.3928 33.2766L25.2857 27.767C24.6974 27.4111 23.9337 27.7413 23.7901 28.4137L21.713 38.1393C21.4878 39.1942 19.9824 39.1942 19.7572 38.1393L17.6801 28.4137C17.5365 27.7413 16.7728 27.4111 16.1845 27.767L7.07743 33.2766C6.13154 33.8489 5.09355 32.6898 5.76624 31.8125L11.6402 24.152C12.0988 23.5539 11.756 22.6826 11.0128 22.5574L0.852148 20.8453C-0.259639 20.658 -0.259639 19.0605 0.852148 18.8731L11.0128 17.161C11.756 17.0358 12.0988 16.1646 11.6402 15.5664L5.76625 7.9059C5.09355 7.02861 6.13155 5.86956 7.07743 6.44181L16.1845 11.9514C16.7728 12.3073 17.5365 11.9771 17.6801 11.3047L19.7572 1.57911Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default index;
