let search = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick = () =>{
  search.classList.toggle('active');
  cart.classList.remove('active');
  user.classList.remove('active');
  navbar.classList.remove('active');
}

let cart = document.querySelector('.cart');
document.querySelector('#cart-icon').onclick = () =>{
  cart.classList.toggle('active');
  search.classList.remove('active');
  user.classList.remove('active');
  navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick = () =>{
  navbar.classList.toggle('active');
  user.classList.remove('active');
  search.classList.remove('active');
  cart.classList.remove('active');
}
let user = document.querySelector('.user');
document.querySelector('#user-icon').onclick = () =>{
  user.classList.toggle('active');
  search.classList.remove('active');
  cart.classList.remove('active');
  navbar.classList.remove('active');
}
window.onscroll = () =>{
  search.classList.remove('active');
  cart.classList.remove('active');
  user.classList.remove('active');
  navbar.classList.remove('active');
}

// Navbar scroll
let header = document.querySelector('.header');

window.addEventListener('scroll', () =>{
  header.classList.toggle('shadow', window.scrollY > 0);
});

// main.js (ต่อจากโค้ดปุ่มของคุณได้เลย)
var swiper = new Swiper(".new-arrival", {
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0:    { slidesPerView: 1 },  // เดิมใส่ 0 ทำให้ไม่แสดง
    568:  { slidesPerView: 2 },
    768:  { slidesPerView: 2 },
    1020: { slidesPerView: 3 },
  },
});
