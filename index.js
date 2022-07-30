import '/style.scss'

import { Header } from './src/components/header/header';
import { Footer } from './src/components/footer/footer';

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 4,
    spaceBetween: 15,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev.fa-solid',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});

const allEvents = document.getElementById('allEvents');

allEvents.onclick = () => window.location.href = '/';

Header.getHeader();
Footer.getFooter();
