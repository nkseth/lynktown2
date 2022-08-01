import { Button } from '@mui/material';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const { pathname } = useRouter();
  return (
    <header className='bg-primaryColor pt-5 pb-4 sm:pt-0 sm:pb-0 sm:h-24'>
      <div className='container mx-auto flex h-full items-center justify-center md:justify-between'>
        <div>
          <Link href='/' className=''>
            <div className='cursor-pointer w-[187.67px] h-[56px]'>
              <svg
                wclassName='w-full h-full'
                viewBox='0 0 432 129'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M110.63 43.7298C110.597 43.2678 110.648 42.8037 110.78 42.3598C110.925 41.9962 111.204 41.7025 111.56 41.5398C112.116 41.318 112.703 41.1864 113.3 41.1498C114.297 41.0497 115.298 41.0063 116.3 41.0198C117.302 41.0053 118.303 41.0487 119.3 41.1498C119.888 41.1809 120.467 41.3128 121.01 41.5398C121.194 41.6133 121.361 41.7241 121.501 41.8652C121.64 42.0063 121.749 42.1747 121.82 42.3598C121.983 42.7971 122.048 43.2647 122.01 43.7298L120.68 89.9998H128.81C129.233 89.9815 129.656 90.0356 130.06 90.1598C130.197 90.1913 130.325 90.2512 130.437 90.3357C130.549 90.4201 130.642 90.5271 130.71 90.6498C130.875 90.9247 130.961 91.2394 130.96 91.5598C131 91.9531 131.02 92.4431 131.02 93.0298C131.02 93.6198 131.02 94.0998 130.96 94.4998C130.958 94.8293 130.872 95.1528 130.71 95.4398C130.562 95.6789 130.33 95.8538 130.06 95.9298C129.652 96.0315 129.231 96.0753 128.81 96.0598H116.29C115.29 96.0598 114.57 96.0598 113.99 95.9898C113.549 95.9769 113.114 95.8784 112.71 95.6998C112.438 95.5654 112.228 95.3332 112.12 95.0498C112.029 94.6527 111.978 94.2472 111.97 93.8398L110.63 43.7298ZM144.43 78.9198L133.22 45.9198C133.03 45.3298 132.88 44.7998 132.75 44.3198C132.631 43.8727 132.567 43.4125 132.56 42.9498C132.541 42.5989 132.628 42.2505 132.81 41.9498C133.034 41.6537 133.357 41.4479 133.72 41.3698C134.298 41.2153 134.892 41.128 135.49 41.1098C136.24 41.0598 137.18 41.0398 138.32 41.0398C139.46 41.0398 140.38 41.0398 141.07 41.1098C141.637 41.1219 142.197 41.2406 142.72 41.4598C143.114 41.6232 143.434 41.9257 143.62 42.3098C143.85 42.819 144.008 43.3574 144.09 43.9098L148.79 69.3898H149.47L154.14 43.9098C154.226 43.3485 154.384 42.8007 154.61 42.2798C154.789 41.9016 155.098 41.6 155.48 41.4298C155.993 41.2144 156.544 41.1055 157.1 41.1098C157.81 41.0598 158.74 41.0398 159.9 41.0398C161.06 41.0398 161.99 41.0398 162.74 41.1098C163.338 41.1288 163.932 41.216 164.51 41.3698C164.873 41.4479 165.196 41.6537 165.42 41.9498C165.621 42.2431 165.72 42.5947 165.7 42.9498C165.692 43.4146 165.618 43.8759 165.48 44.3198C165.33 44.7798 165.17 45.3198 164.98 45.9198L153.86 79.1498L153.46 93.8698C153.456 94.2802 153.392 94.6879 153.27 95.0798C153.228 95.2215 153.156 95.3526 153.059 95.4646C152.963 95.5766 152.844 95.667 152.71 95.7298C152.296 95.9103 151.851 96.0088 151.4 96.0198C150.84 96.0198 150.09 96.0898 149.13 96.0898C148.17 96.0898 147.42 96.0898 146.86 96.0198C146.419 96.0069 145.984 95.9084 145.58 95.7298C145.306 95.5979 145.095 95.3648 144.99 95.0798C144.895 94.6832 144.841 94.2776 144.83 93.8698L144.43 78.9198ZM169.88 43.7298C169.847 43.2691 169.891 42.806 170.01 42.3598C170.112 42.0122 170.345 41.718 170.66 41.5398C171.132 41.3181 171.64 41.1858 172.16 41.1498C173.036 41.0433 173.918 40.9931 174.8 40.9998C175.61 40.9998 176.3 40.9998 176.86 41.0698C177.336 41.0911 177.808 41.1786 178.26 41.3298C178.562 41.4143 178.839 41.5685 179.07 41.7798C179.283 41.9917 179.426 42.264 179.48 42.5598L191.09 75.6398H191.34L189.88 43.7098C189.844 43.2496 189.885 42.7867 190 42.3398C190.126 41.9842 190.384 41.6906 190.72 41.5198C191.209 41.2988 191.734 41.1667 192.27 41.1298C193.176 41.0289 194.088 40.9855 195 40.9998C196.002 40.9853 197.003 41.0287 198 41.1298C198.579 41.1577 199.148 41.2898 199.68 41.5198C200.036 41.6825 200.315 41.9762 200.46 42.3398C200.597 42.7826 200.648 43.2477 200.61 43.7098L199.15 92.8998C199.136 93.3464 199.086 93.7912 199 94.2298C198.925 94.6015 198.752 94.9467 198.5 95.2298C198.194 95.5458 197.806 95.7708 197.38 95.8798C196.748 96.0286 196.099 96.0959 195.45 96.0798C194.803 96.094 194.156 96.0404 193.52 95.9198C193.288 95.876 193.068 95.7793 192.879 95.6371C192.69 95.4948 192.537 95.311 192.43 95.0998L192.37 95.1698L179.76 61.4498H179.41L179.16 93.8698C179.152 94.2772 179.102 94.6827 179.01 95.0798C178.931 95.3514 178.752 95.5834 178.51 95.7298C178.163 95.9087 177.78 96.0078 177.39 96.0198C176.91 96.0198 176.27 96.0898 175.46 96.0898C174.65 96.0898 173.78 96.0898 173.22 96.0198C172.788 96.0051 172.364 95.9066 171.97 95.7298C171.696 95.5979 171.485 95.3648 171.38 95.0798C171.285 94.6832 171.231 94.2776 171.22 93.8698L169.88 43.7298ZM220.22 72.6598L225.92 43.9998C226.024 43.481 226.192 42.9771 226.42 42.4998C226.623 42.1136 226.936 41.7967 227.32 41.5898C227.827 41.345 228.378 41.2023 228.94 41.1698C229.62 41.0998 230.52 41.0698 231.62 41.0698C232.963 41.0251 234.307 41.146 235.62 41.4298C235.993 41.4597 236.342 41.6282 236.597 41.902C236.853 42.1759 236.996 42.5354 237 42.9098C237 43.1898 237 43.4398 237 43.6598C236.979 43.8796 236.939 44.0971 236.88 44.3098C236.88 44.5298 236.78 44.7598 236.72 44.9998C236.66 45.2398 236.59 45.4598 236.5 45.7498L228.87 72.6598L235.94 91.4598C236.233 92.2398 236.453 92.8798 236.6 93.3798C236.747 93.7777 236.831 94.196 236.85 94.6198C236.851 94.856 236.807 95.0903 236.72 95.3098C236.591 95.5198 236.393 95.6788 236.16 95.7598C235.78 95.8973 235.383 95.9847 234.98 96.0198C234.46 96.0198 233.77 96.0898 232.92 96.0898C232.328 96.0995 231.737 96.0661 231.15 95.9898C230.763 95.9201 230.393 95.7776 230.06 95.5698C229.776 95.3547 229.532 95.0905 229.34 94.7898C229.12 94.3641 228.923 93.9268 228.75 93.4798L220.22 72.6598ZM207.67 43.7298C207.635 43.2671 207.689 42.8019 207.83 42.3598C207.898 42.1778 208.003 42.0114 208.137 41.8706C208.271 41.7297 208.432 41.6172 208.61 41.5398C209.165 41.3157 209.753 41.1839 210.35 41.1498C212.346 40.9736 214.354 40.9736 216.35 41.1498C216.938 41.1834 217.516 41.3152 218.06 41.5398C218.428 41.6953 218.719 41.9901 218.87 42.3598C219.028 42.7983 219.093 43.2649 219.06 43.7298L217.69 93.8698C217.699 94.2789 217.645 94.687 217.53 95.0798C217.488 95.2259 217.412 95.3604 217.31 95.473C217.208 95.5856 217.081 95.6735 216.94 95.7298C216.536 95.9084 216.101 96.0069 215.66 96.0198C215.1 96.0198 214.34 96.0898 213.39 96.0898C212.44 96.0898 211.67 96.0898 211.08 96.0198C210.642 96.0072 210.21 95.9086 209.81 95.7298C209.536 95.5979 209.325 95.3648 209.22 95.0798C209.12 94.6841 209.066 94.278 209.06 93.8698L207.67 43.7298Z'
                  fill='white'
                />
                <path
                  d='M250.49 47.9H244.77C244.346 47.9141 243.922 47.8703 243.51 47.77C243.248 47.7052 243.02 47.5447 242.87 47.32C242.722 47.0061 242.637 46.6664 242.62 46.32C242.62 45.9 242.62 45.32 242.62 44.72C242.62 44.12 242.62 43.56 242.62 43.15C242.64 42.804 242.725 42.4648 242.87 42.15C243.017 41.9167 243.245 41.7457 243.51 41.67C243.923 41.5746 244.346 41.5309 244.77 41.54H267.17C267.581 41.5292 267.991 41.573 268.39 41.67C268.667 41.7371 268.907 41.9092 269.06 42.15C269.229 42.4557 269.315 42.8005 269.31 43.15C269.31 43.56 269.37 44.08 269.37 44.72C269.37 45.36 269.37 45.9 269.31 46.32C269.319 46.6698 269.232 47.0155 269.06 47.32C268.904 47.5517 268.664 47.7132 268.39 47.77C267.992 47.872 267.581 47.9157 267.17 47.9H261.44L260.22 93.73C260.211 94.0706 260.151 94.4078 260.04 94.73C259.943 94.9973 259.746 95.2161 259.49 95.34C259.082 95.5224 258.646 95.6308 258.2 95.66C257.65 95.66 256.9 95.72 255.97 95.72C255.04 95.72 254.28 95.72 253.73 95.66C253.289 95.6447 252.855 95.5463 252.45 95.37C252.317 95.3098 252.199 95.2214 252.104 95.1108C252.009 95.0003 251.939 94.8703 251.9 94.73C251.799 94.3445 251.746 93.9483 251.74 93.55L250.49 47.9ZM276.12 52C276.061 50.4995 276.32 49.0035 276.88 47.61C277.442 46.2762 278.338 45.1089 279.48 44.22C280.861 43.196 282.431 42.4552 284.1 42.04C286.33 41.4681 288.628 41.199 290.93 41.24C293.209 41.1986 295.483 41.4677 297.69 42.04C299.371 42.4471 300.952 43.1885 302.34 44.22C303.515 45.1033 304.433 46.2838 305 47.64C305.568 49.0314 305.83 50.5284 305.77 52.03L304.88 86.03C304.848 87.3852 304.559 88.7221 304.03 89.97C303.472 91.2289 302.622 92.3363 301.55 93.2C300.278 94.2029 298.82 94.9438 297.26 95.38C295.211 95.9542 293.088 96.2237 290.96 96.18C288.819 96.2213 286.684 95.9518 284.62 95.38C283.056 94.9395 281.592 94.1991 280.31 93.2C279.249 92.3323 278.41 91.2253 277.86 89.97C277.324 88.7133 277.032 87.3659 277 86L276.12 52ZM286 86.26C285.966 87.0161 286.036 87.7733 286.21 88.51C286.37 89.0553 286.666 89.5509 287.07 89.95C287.527 90.3104 288.061 90.5603 288.63 90.68C290.145 90.9865 291.705 90.9865 293.22 90.68C293.783 90.5689 294.309 90.3179 294.75 89.95C295.171 89.5644 295.47 89.0638 295.61 88.51C295.81 87.7777 295.891 87.018 295.85 86.26L295 51C295.003 50.2424 294.899 49.4882 294.69 48.76C294.551 48.2682 294.277 47.8249 293.9 47.48C293.556 47.1702 293.128 46.9684 292.67 46.9C291.537 46.6866 290.373 46.6866 289.24 46.9C288.777 46.9724 288.344 47.1734 287.99 47.48C287.626 47.8321 287.36 48.2734 287.22 48.76C287.015 49.4887 286.914 50.2429 286.92 51L286 86.26ZM312.91 44.26C312.789 43.8318 312.789 43.3782 312.91 42.95C312.986 42.767 313.099 42.6016 313.242 42.464C313.385 42.3264 313.554 42.2195 313.74 42.15C314.342 41.8941 314.986 41.7518 315.64 41.73C316.47 41.65 317.53 41.6 318.82 41.6C319.842 41.591 320.863 41.6344 321.88 41.73C322.478 41.7542 323.067 41.8828 323.62 42.11C323.807 42.1801 323.977 42.2883 324.12 42.4277C324.263 42.5672 324.375 42.7348 324.45 42.92C324.609 43.3491 324.694 43.8023 324.7 44.26L326.62 86.53H327.54L333.54 44.26C333.582 43.8147 333.672 43.3754 333.81 42.95C333.927 42.5966 334.169 42.2979 334.49 42.11C334.94 41.8878 335.429 41.7586 335.93 41.73C336.783 41.6346 337.641 41.5911 338.5 41.6C339.398 41.5906 340.297 41.634 341.19 41.73C341.72 41.7539 342.24 41.8831 342.72 42.11C343.054 42.2879 343.305 42.5894 343.42 42.95C343.589 43.3702 343.704 43.8105 343.76 44.26L349.76 86.53H350.68L352.57 44.26C352.583 43.8153 352.657 43.3746 352.79 42.95C352.938 42.5805 353.22 42.2805 353.58 42.11C354.106 41.885 354.668 41.7563 355.24 41.73C356.214 41.6351 357.192 41.5917 358.17 41.6C359.152 41.5925 360.133 41.6359 361.11 41.73C361.721 41.7539 362.323 41.8824 362.89 42.11C363.073 42.1864 363.239 42.3008 363.375 42.4455C363.511 42.5903 363.615 42.7622 363.68 42.95C363.815 43.3738 363.835 43.8256 363.74 44.26L355.6 93.57C355.524 93.9695 355.393 94.3565 355.21 94.72C355.029 95.0107 354.759 95.2351 354.44 95.36C353.999 95.5361 353.534 95.644 353.06 95.68C352.49 95.68 351.76 95.74 350.86 95.74C349.66 95.74 348.68 95.72 347.92 95.68C347.3 95.6598 346.686 95.5624 346.09 95.39C345.702 95.2612 345.357 95.0296 345.09 94.72C344.852 94.3731 344.685 93.9821 344.6 93.57L338.78 57.57H338.14L332.36 93.57C332.284 93.9798 332.127 94.3706 331.9 94.72C331.639 95.0361 331.292 95.269 330.9 95.39C330.333 95.5659 329.744 95.6635 329.15 95.68C328.44 95.68 327.51 95.74 326.37 95.74C325.23 95.74 324.51 95.74 323.86 95.68C323.338 95.6416 322.824 95.534 322.33 95.36C321.983 95.2419 321.683 95.018 321.47 94.72C321.266 94.3588 321.111 93.9721 321.01 93.57L312.91 44.26ZM370.98 44.26C370.95 43.8098 370.991 43.3577 371.1 42.92C371.202 42.5778 371.436 42.2902 371.75 42.12C372.204 41.8884 372.701 41.7555 373.21 41.73C374.077 41.6353 374.948 41.5919 375.82 41.6C376.61 41.6 377.28 41.6 377.82 41.67C378.286 41.6882 378.747 41.7724 379.19 41.92C379.49 42.0004 379.765 42.1552 379.99 42.37C380.198 42.5802 380.338 42.8487 380.39 43.14L391.8 75.64H392.05L390.61 44.26C390.58 43.8098 390.621 43.3577 390.73 42.92C390.853 42.5738 391.103 42.2876 391.43 42.12C391.909 41.8896 392.429 41.757 392.96 41.73C393.837 41.6361 394.718 41.5927 395.6 41.6C396.568 41.5921 397.536 41.6355 398.5 41.73C399.074 41.7489 399.638 41.8815 400.16 42.12C400.334 42.1954 400.491 42.3051 400.622 42.4425C400.752 42.58 400.854 42.7424 400.92 42.92C401.051 43.3538 401.102 43.8079 401.07 44.26L399.73 92.59C399.717 93.0307 399.664 93.4692 399.57 93.9C399.5 94.2713 399.33 94.6168 399.08 94.9C398.781 95.213 398.4 95.4349 397.98 95.54C397.361 95.6845 396.726 95.7483 396.09 95.73C395.453 95.7441 394.816 95.6904 394.19 95.57C393.961 95.5299 393.745 95.4366 393.56 95.2976C393.374 95.1586 393.223 94.9779 393.12 94.77L393.06 94.84L380.68 61.7H380.34L380.1 93.57C380.092 93.9675 380.042 94.3631 379.95 94.75C379.874 95.0181 379.699 95.2471 379.46 95.39C379.12 95.5679 378.744 95.667 378.36 95.68C377.89 95.68 377.25 95.74 376.46 95.74C375.67 95.74 374.81 95.74 374.26 95.68C373.835 95.6658 373.417 95.5672 373.03 95.39C372.762 95.2584 372.555 95.0295 372.45 94.75C372.358 94.3631 372.308 93.9675 372.3 93.57L370.98 44.26Z'
                  fill='white'
                />
                <path
                  d='M114.36 121.46C113.696 121.473 113.037 121.34 112.43 121.07C111.899 120.824 111.446 120.436 111.12 119.95C110.786 119.41 110.612 118.785 110.62 118.15H112.53C112.539 118.608 112.717 119.046 113.03 119.38C113.366 119.675 113.79 119.848 114.236 119.874C114.682 119.899 115.123 119.775 115.49 119.52C115.624 119.39 115.731 119.235 115.804 119.063C115.877 118.891 115.915 118.707 115.915 118.52C115.915 118.333 115.877 118.149 115.804 117.977C115.731 117.805 115.624 117.65 115.49 117.52C115.204 117.255 114.862 117.057 114.49 116.94L113.16 116.47C112.502 116.254 111.903 115.888 111.41 115.4C110.993 114.923 110.778 114.303 110.81 113.67C110.784 113.117 110.927 112.57 111.22 112.1C111.515 111.661 111.927 111.315 112.41 111.1C112.956 110.856 113.547 110.73 114.145 110.73C114.743 110.73 115.334 110.856 115.88 111.1C116.362 111.317 116.774 111.663 117.07 112.1C117.373 112.575 117.536 113.126 117.54 113.69H115.6C115.598 113.316 115.451 112.957 115.19 112.69C115.051 112.546 114.883 112.433 114.696 112.359C114.51 112.284 114.31 112.251 114.11 112.26C113.749 112.24 113.393 112.354 113.11 112.58C112.974 112.687 112.866 112.827 112.797 112.985C112.727 113.144 112.697 113.317 112.71 113.49C112.701 113.642 112.723 113.795 112.777 113.938C112.83 114.081 112.913 114.211 113.02 114.32C113.267 114.544 113.556 114.717 113.87 114.83L115.1 115.27C115.566 115.441 116.017 115.648 116.45 115.89C116.862 116.134 117.206 116.478 117.45 116.89C117.716 117.344 117.845 117.865 117.82 118.39C117.822 118.92 117.684 119.441 117.42 119.9C117.145 120.378 116.739 120.766 116.25 121.02C115.666 121.32 115.017 121.471 114.36 121.46V121.46ZM129.16 121.46C128.266 121.494 127.381 121.27 126.61 120.817C125.839 120.363 125.215 119.698 124.81 118.9C124.385 118.029 124.173 117.069 124.19 116.1C124.169 115.134 124.382 114.177 124.81 113.31C125.208 112.534 125.81 111.881 126.55 111.42C127.344 110.974 128.239 110.74 129.15 110.74C130.061 110.74 130.956 110.974 131.75 111.42C132.495 111.875 133.098 112.53 133.49 113.31C133.918 114.177 134.131 115.134 134.11 116.1C134.127 117.069 133.915 118.029 133.49 118.9C133.089 119.671 132.488 120.321 131.75 120.78C130.966 121.241 130.07 121.477 129.16 121.46V121.46ZM129.16 119.75C129.586 119.764 130.01 119.682 130.4 119.509C130.79 119.335 131.135 119.076 131.41 118.75C131.963 117.966 132.26 117.03 132.26 116.07C132.26 115.11 131.963 114.174 131.41 113.39C131.136 113.062 130.791 112.802 130.401 112.628C130.011 112.455 129.587 112.373 129.16 112.39C128.731 112.373 128.303 112.455 127.91 112.628C127.516 112.801 127.168 113.062 126.89 113.39C126.337 114.174 126.04 115.11 126.04 116.07C126.04 117.03 126.337 117.966 126.89 118.75C127.169 119.076 127.518 119.336 127.911 119.509C128.304 119.682 128.731 119.764 129.16 119.75V119.75ZM145.29 121.46C144.384 121.482 143.491 121.249 142.71 120.79C141.994 120.331 141.422 119.68 141.06 118.91C140.675 118.027 140.476 117.074 140.476 116.11C140.476 115.146 140.675 114.193 141.06 113.31C141.419 112.536 141.991 111.88 142.71 111.42C143.486 110.948 144.382 110.712 145.29 110.74C146.343 110.695 147.377 111.025 148.21 111.67C148.996 112.321 149.504 113.247 149.63 114.26H147.63C147.531 113.741 147.251 113.273 146.84 112.94C146.383 112.598 145.821 112.425 145.25 112.45C144.838 112.435 144.429 112.518 144.055 112.692C143.681 112.866 143.354 113.125 143.1 113.45C142.591 114.251 142.321 115.181 142.321 116.13C142.321 117.079 142.591 118.009 143.1 118.81C143.355 119.134 143.682 119.393 144.055 119.567C144.429 119.741 144.838 119.824 145.25 119.81C145.814 119.841 146.372 119.687 146.84 119.37C147.245 119.057 147.525 118.611 147.63 118.11H149.63C149.494 119.094 148.986 119.989 148.21 120.61C147.364 121.223 146.332 121.523 145.29 121.46V121.46ZM156.29 121.28V110.91H158.1V121.28H156.29ZM164.48 121.28L168.1 110.91H170.1L173.73 121.28H171.8L171.01 118.88H167.14L166.34 121.28H164.48ZM167.68 117.4H170.55L169.11 113.09L167.68 117.4ZM180.14 121.28V110.91H182V119.8H186.38V121.28H180.14ZM201.49 121.28V110.91H205.49C206.342 110.849 207.185 111.121 207.84 111.67C208.109 111.908 208.322 112.203 208.464 112.533C208.605 112.864 208.672 113.221 208.66 113.58C208.687 114.148 208.506 114.706 208.15 115.15C207.831 115.527 207.406 115.799 206.93 115.93C207.49 116.044 207.989 116.361 208.33 116.82C208.699 117.282 208.897 117.858 208.89 118.45C208.895 118.824 208.822 119.195 208.676 119.54C208.53 119.884 208.313 120.194 208.04 120.45C207.37 121.018 206.507 121.305 205.63 121.25L201.49 121.28ZM203.3 115.28H205.2C205.622 115.306 206.039 115.174 206.37 114.91C206.511 114.776 206.621 114.612 206.692 114.431C206.763 114.249 206.793 114.054 206.78 113.86C206.787 113.674 206.755 113.488 206.684 113.315C206.613 113.143 206.506 112.988 206.37 112.86C206.034 112.583 205.604 112.446 205.17 112.48H203.3V115.28ZM203.3 119.75H205.3C205.747 119.778 206.189 119.639 206.54 119.36C206.694 119.221 206.816 119.049 206.895 118.857C206.975 118.665 207.011 118.458 207 118.25C207.01 118.037 206.972 117.825 206.891 117.628C206.81 117.431 206.687 117.254 206.53 117.11C206.175 116.822 205.726 116.676 205.27 116.7H203.27L203.3 119.75ZM219.3 121.47C218.607 121.486 217.92 121.332 217.3 121.02C216.708 120.713 216.22 120.236 215.9 119.65C215.536 118.929 215.36 118.127 215.39 117.32V110.92H217.2V117.34C217.147 117.988 217.344 118.632 217.75 119.14C217.952 119.345 218.196 119.504 218.466 119.605C218.735 119.707 219.023 119.75 219.31 119.73C219.594 119.747 219.878 119.703 220.144 119.601C220.409 119.499 220.65 119.342 220.85 119.14C221.267 118.637 221.472 117.991 221.42 117.34V110.92H223.23V117.32C223.261 118.131 223.074 118.935 222.69 119.65C222.355 120.238 221.854 120.715 221.25 121.02C220.667 121.304 220.028 121.454 219.38 121.46L219.3 121.47ZM232.76 121.29V117.6L229.44 110.92H231.44L233.63 115.71L235.81 110.92H237.81L234.49 117.6V121.29H232.76ZM244.14 121.29V110.91H246V121.28L244.14 121.29ZM252.97 121.29V110.91H254.78L259.43 118.21V110.91H261.25V121.28H259.43L254.86 114V121.29H252.97ZM272.59 121.47C271.726 121.485 270.876 121.253 270.14 120.8C269.436 120.349 268.875 119.707 268.52 118.95C268.135 118.067 267.936 117.114 267.936 116.15C267.936 115.186 268.135 114.233 268.52 113.35C268.901 112.566 269.493 111.905 270.23 111.44C271.032 110.968 271.95 110.729 272.88 110.75C273.913 110.711 274.93 111.017 275.77 111.62C276.54 112.216 277.067 113.073 277.25 114.03H275.25C275.119 113.571 274.828 113.174 274.43 112.91C273.976 112.615 273.441 112.468 272.9 112.49C272.467 112.466 272.034 112.543 271.636 112.717C271.238 112.891 270.887 113.156 270.61 113.49C270.031 114.267 269.744 115.223 269.8 116.19C269.735 117.146 270.015 118.093 270.59 118.86C270.861 119.168 271.197 119.411 271.575 119.572C271.952 119.733 272.36 119.807 272.77 119.79C273.139 119.816 273.508 119.761 273.854 119.63C274.199 119.499 274.512 119.294 274.77 119.03C275.26 118.472 275.554 117.77 275.61 117.03H273.1V115.61H277.44V121.31H275.77L275.62 119.95C275.319 120.422 274.907 120.813 274.42 121.09C273.874 121.35 273.274 121.477 272.67 121.46L272.59 121.47ZM295.94 121.47C295.287 121.484 294.638 121.354 294.04 121.09C293.526 120.843 293.09 120.459 292.78 119.98C292.482 119.478 292.33 118.904 292.34 118.32C292.333 117.673 292.521 117.039 292.88 116.5C293.278 115.92 293.833 115.466 294.48 115.19C294.227 114.89 294.021 114.553 293.87 114.19C293.747 113.871 293.686 113.532 293.69 113.19C293.683 112.746 293.802 112.309 294.032 111.929C294.262 111.548 294.594 111.241 294.99 111.04C295.46 110.813 295.978 110.703 296.5 110.72C297.027 110.702 297.551 110.819 298.02 111.06C298.412 111.266 298.735 111.582 298.95 111.97C299.171 112.363 299.275 112.81 299.25 113.26H297.6C297.613 113.121 297.596 112.982 297.551 112.85C297.507 112.718 297.435 112.597 297.341 112.494C297.247 112.391 297.132 112.31 297.005 112.254C296.877 112.198 296.739 112.169 296.6 112.17C296.458 112.163 296.316 112.184 296.182 112.232C296.048 112.28 295.925 112.354 295.82 112.45C295.728 112.545 295.656 112.658 295.608 112.782C295.56 112.906 295.537 113.037 295.54 113.17C295.543 113.44 295.623 113.704 295.77 113.93C295.963 114.246 296.184 114.543 296.43 114.82L299.2 117.69C299.4 117.35 299.61 116.96 299.83 116.52L300.14 115.87H302L301.51 116.87C301.183 117.566 300.802 118.235 300.37 118.87L302.65 121.23H300.49L299.38 120.07C298.942 120.507 298.417 120.847 297.84 121.07C297.257 121.312 296.632 121.437 296 121.44L295.94 121.47ZM294.1 118.2C294.097 118.429 294.14 118.656 294.228 118.868C294.316 119.079 294.446 119.271 294.61 119.43C294.992 119.762 295.485 119.937 295.99 119.92C296.391 119.923 296.788 119.843 297.156 119.684C297.525 119.526 297.856 119.293 298.13 119L295.51 116.29C295.089 116.463 294.721 116.742 294.44 117.1C294.247 117.422 294.157 117.795 294.18 118.17L294.1 118.2ZM320.64 121.49C319.979 121.502 319.324 121.369 318.72 121.1C318.184 120.857 317.727 120.469 317.4 119.98C317.069 119.439 316.899 118.814 316.91 118.18H318.82C318.825 118.637 319 119.075 319.31 119.41C319.484 119.579 319.691 119.709 319.919 119.794C320.146 119.878 320.388 119.914 320.63 119.9C321.042 119.919 321.448 119.796 321.78 119.55C321.92 119.425 322.03 119.271 322.103 119.098C322.176 118.925 322.209 118.737 322.2 118.55C322.211 118.366 322.183 118.182 322.118 118.009C322.052 117.837 321.951 117.68 321.82 117.55C321.531 117.289 321.19 117.091 320.82 116.97L319.49 116.5C318.829 116.284 318.227 115.917 317.73 115.43C317.321 114.949 317.11 114.331 317.14 113.7C317.111 113.157 317.249 112.618 317.535 112.155C317.821 111.692 318.241 111.327 318.74 111.11C319.276 110.853 319.866 110.726 320.46 110.74C321.061 110.725 321.657 110.852 322.2 111.11C322.683 111.324 323.096 111.671 323.39 112.11C323.693 112.585 323.856 113.136 323.86 113.7H322C321.998 113.326 321.851 112.967 321.59 112.7C321.454 112.555 321.287 112.441 321.102 112.367C320.918 112.293 320.719 112.26 320.52 112.27C320.159 112.252 319.803 112.366 319.52 112.59C319.281 112.811 319.138 113.118 319.123 113.444C319.108 113.769 319.222 114.088 319.44 114.33C319.684 114.554 319.969 114.727 320.28 114.84L321.52 115.28C321.983 115.451 322.431 115.658 322.86 115.9C323.271 116.145 323.615 116.489 323.86 116.9C324.118 117.356 324.243 117.876 324.22 118.4C324.223 118.929 324.088 119.449 323.83 119.91C323.547 120.385 323.139 120.773 322.65 121.03C322.053 121.333 321.389 121.48 320.72 121.46L320.64 121.49ZM330.8 121.31V110.91H337.27V112.44H332.61V115.28H336.84V116.76H332.61V119.76H337.27V121.29L330.8 121.31ZM344.08 121.31V110.91H346V119.8H350.38V121.28L344.08 121.31ZM356.96 121.31V110.91H358.78V119.8H363.16V121.28L356.96 121.31ZM369.85 121.31V110.91H371.67V121.28L369.85 121.31ZM378.68 121.31V110.91H380.49L385.15 118.21V110.91H387V121.28H385.19L380.57 114V121.29L378.68 121.31ZM398.3 121.49C397.45 121.513 396.611 121.286 395.888 120.839C395.165 120.391 394.589 119.741 394.23 118.97C393.827 118.1 393.629 117.149 393.65 116.19C393.631 115.218 393.833 114.253 394.24 113.37C394.621 112.583 395.218 111.921 395.96 111.46C396.757 110.985 397.672 110.745 398.6 110.77C399.633 110.731 400.65 111.037 401.49 111.64C402.26 112.236 402.787 113.093 402.97 114.05H400.97C400.839 113.591 400.548 113.194 400.15 112.93C399.696 112.635 399.161 112.488 398.62 112.51C398.187 112.487 397.754 112.566 397.357 112.739C396.959 112.913 396.608 113.177 396.33 113.51C395.751 114.287 395.464 115.243 395.52 116.21C395.462 117.167 395.746 118.113 396.32 118.88C396.588 119.189 396.923 119.433 397.298 119.594C397.674 119.755 398.082 119.829 398.49 119.81C398.858 119.834 399.228 119.779 399.573 119.648C399.918 119.517 400.231 119.313 400.49 119.05C400.973 118.489 401.264 117.788 401.32 117.05H398.82V115.63H403.15V121.33H401.48L401.34 119.97C401.038 120.445 400.622 120.837 400.13 121.11C399.582 121.363 398.983 121.483 398.38 121.46L398.3 121.49Z'
                  fill='white'
                />
                <path
                  d='M49.87 106.81H93.34'
                  stroke='white'
                  stroke-width='5.5'
                  stroke-miterlimit='10'
                  stroke-linecap='round'
                />
                <path
                  d='M6.76997 118C7.6555 119.057 8.76135 119.909 10.0102 120.494C11.259 121.08 12.6207 121.386 14 121.39H86.5C87.8623 121.371 89.2046 121.058 90.4351 120.473C91.6656 119.888 92.7553 119.045 93.63 118C94.5288 116.924 95.2018 115.678 95.609 114.336C96.0161 112.994 96.1491 111.584 96 110.19L88.22 38.09C88.1608 37.5338 87.9043 37.0172 87.4971 36.6338C87.0898 36.2504 86.5587 36.0255 86 36H70.13V26.61C70.13 15.1 61.19 5.75 50.2 5.75C39.21 5.75 30.27 15.1 30.27 26.61V36H14.44C13.8629 36.0127 13.3109 36.2382 12.89 36.6333C12.4692 37.0283 12.2092 37.5649 12.16 38.14L4.37997 110.24C4.24042 111.627 4.38 113.029 4.79046 114.362C5.20092 115.694 5.87398 116.931 6.76997 118V118ZM34.87 26.6C34.87 17.76 41.75 10.6 50.2 10.6C58.65 10.6 65.53 17.8 65.53 26.6V36H34.87V26.6ZM92.19 109.35L92.42 111.49C92.5093 112.237 92.4425 112.994 92.2239 113.713C92.0053 114.433 91.6396 115.099 91.15 115.67C90.682 116.232 90.0965 116.684 89.4348 116.995C88.773 117.306 88.0511 117.468 87.32 117.47H13.08C12.3496 117.469 11.6282 117.309 10.9665 117C10.3048 116.69 9.71888 116.24 9.24997 115.68C8.76415 115.105 8.40233 114.437 8.18723 113.716C7.97212 112.995 7.90837 112.237 7.99997 111.49L15.7 39.86H29.79V56.43C29.769 56.7522 29.8143 57.0752 29.9231 57.3792C30.032 57.6831 30.202 57.9615 30.4228 58.1971C30.6435 58.4327 30.9102 58.6205 31.2065 58.7489C31.5027 58.8773 31.8221 58.9435 32.145 58.9435C32.4678 58.9435 32.7872 58.8773 33.0835 58.7489C33.3797 58.6205 33.6464 58.4327 33.8672 58.1971C34.0879 57.9615 34.258 57.6831 34.3668 57.3792C34.4757 57.0752 34.521 56.7522 34.5 56.43V39.86H65.89V56.43C65.89 57.0559 66.1386 57.6562 66.5812 58.0988C67.0238 58.5414 67.6241 58.79 68.25 58.79C68.8759 58.79 69.4762 58.5414 69.9187 58.0988C70.3613 57.6562 70.61 57.0559 70.61 56.43V39.86H84.7L91.7 104.42L92.19 109.35Z'
                  fill='white'
                  stroke='white'
                  stroke-width='0.5'
                  stroke-miterlimit='10'
                />
                <path
                  d='M68.6699 95.3001C67.7886 96.1772 66.7392 96.8671 65.5846 97.3286C64.43 97.7901 63.1941 98.0135 61.951 97.9855C60.708 97.9575 59.4834 97.6786 58.3507 97.1656C57.2181 96.6525 56.2008 95.916 55.3599 95.0001L52.1299 91.4801C50.9968 90.2326 50.2053 88.7135 49.8321 87.07C49.4589 85.4266 49.5167 83.7146 49.9999 82.1001L55.5599 88.1001L57.2099 89.8401L58.8299 91.5801C59.25 92.0373 59.758 92.4052 60.3234 92.6617C60.8889 92.9182 61.5002 93.0581 62.1209 93.073C62.7417 93.088 63.359 92.9776 63.9362 92.7486C64.5133 92.5196 65.0384 92.1766 65.4799 91.7401C65.9324 91.3063 66.2928 90.786 66.5399 90.2101C66.7939 89.6289 66.9331 89.0041 66.9499 88.3701C66.9568 87.7391 66.8484 87.1121 66.6299 86.5201C66.4029 85.9302 66.0633 85.3901 65.6299 84.9301L63.9999 83.1801L56.7799 75.4101C58.3854 75.0175 60.0667 75.0618 61.6493 75.5383C63.2319 76.0148 64.6581 76.9063 65.7799 78.1201L68.9999 81.6001C70.7295 83.4819 71.6617 85.9614 71.6001 88.5167C71.5386 91.0719 70.4881 93.5036 68.6699 95.3001V95.3001ZM45.8099 74.1901L57.1999 86.4601C57.4059 86.6927 57.6576 86.8804 57.9394 87.0114C58.2211 87.1424 58.5269 87.2138 58.8375 87.2213C59.1481 87.2289 59.457 87.1722 59.7447 87.055C60.0325 86.9378 60.293 86.7625 60.5099 86.5401C60.9525 86.0813 61.2064 85.4729 61.2212 84.8357C61.236 84.1984 61.0107 83.5789 60.5899 83.1001L49.1999 70.8701C48.994 70.6374 48.7423 70.4497 48.4605 70.3187C48.1787 70.1878 47.873 70.1163 47.5624 70.1088C47.2517 70.1013 46.9429 70.1579 46.6551 70.2751C46.3674 70.3923 46.1069 70.5676 45.8899 70.7901C45.4565 71.2455 45.2082 71.8461 45.1934 72.4746C45.1786 73.1032 45.3984 73.7147 45.8099 74.1901V74.1901ZM40.8099 72.3701L49.6799 81.8801C48.0793 82.2895 46.3978 82.2585 44.8134 81.7902C43.229 81.3219 41.8008 80.4339 40.6799 79.2201L37.4099 75.7301C35.6823 73.8394 34.7546 71.3527 34.8218 68.7925C34.8889 66.2322 35.9456 63.7976 37.7699 62.0001C38.6519 61.1229 39.7022 60.4333 40.8576 59.9727C42.013 59.5122 43.2497 59.2902 44.4932 59.32C45.7367 59.3499 46.9613 59.6311 48.0933 60.1467C49.2252 60.6623 50.2412 61.4016 51.0799 62.3201L54.3099 65.8401C55.4442 67.0813 56.2426 68.5917 56.6294 70.228C57.0162 71.8643 56.9785 73.5724 56.5199 75.1901L47.6599 65.6801C47.2401 65.2189 46.7304 64.8483 46.1623 64.5911C45.5941 64.3339 44.9794 64.1954 44.3558 64.1842C43.7322 64.1729 43.1129 64.2892 42.5359 64.5258C41.9588 64.7624 41.4362 65.1143 40.9999 65.5601C40.1035 66.4578 39.5876 67.6666 39.5597 68.935C39.5318 70.2034 39.9939 71.4337 40.8499 72.3701H40.8099Z'
                  fill='white'
                />
                <path
                  d='M32.82 108.64H38.54C39.1792 108.64 39.7922 108.386 40.2442 107.934C40.6961 107.482 40.95 106.869 40.95 106.23C40.95 105.591 40.6961 104.978 40.2442 104.526C39.7922 104.074 39.1792 103.82 38.54 103.82H32.82C32.1809 103.82 31.5679 104.074 31.1159 104.526C30.6639 104.978 30.41 105.591 30.41 106.23C30.41 106.869 30.6639 107.482 31.1159 107.934C31.5679 108.386 32.1809 108.64 32.82 108.64V108.64Z'
                  fill='white'
                />
                <path
                  d='M413.228 43.7519V45.2118H410.825V52.77H409.017V45.2118H406.613V43.7519H413.228ZM424.38 43.7519V52.77H422.572V46.9043L420.155 52.77H418.786L416.357 46.9043V52.77H414.548V43.7519H416.602L419.471 50.4573L422.339 43.7519H424.38Z'
                  fill='white'
                />
              </svg>
            </div>
          </Link>
        </div>
        {pathname === '/' && (
          <div className='hidden md:block'>
            <Button
              className=' !bg-white !text-primaryColor !p-2 !w-[173px] !hover:bg-white !rounded-xl'
              startIcon={
                <svg
                  width='30'
                  height='30'
                  viewBox='0 0 30 30'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle cx='15' cy='15' r='15' fill='#6A5B40' />
                  <path
                    d='M20.4238 14.134C21.0905 14.5189 21.0905 15.4811 20.4238 15.866L13.0392 20.1295C12.3725 20.5144 11.5392 20.0333 11.5392 19.2635L11.5392 10.7365C11.5392 9.96667 12.3725 9.48555 13.0392 9.87045L20.4238 14.134Z'
                    fill='white'
                  />
                </svg>
              }
            >
              Watch Demo
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
