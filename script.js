// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Burger Menu
  const burger = document.getElementById('burger');
  const navMenu = document.getElementById('nav-menu');

  burger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Modal
  const modal = document.getElementById('modal');
  const modalOpen = document.getElementById('modal-open');
  const modalClose = document.getElementById('modal-close');

  modalOpen.addEventListener('click', () => {
    modal.classList.add('active');
  });

  modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  // Tabs
  const tabsButtons = document.querySelectorAll('.tabs__button');
  const tabsContents = document.querySelectorAll('.tabs__content');

  tabsButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabsButtons.forEach(b => b.classList.remove('active'));
      tabsContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
    });
  });

  // Filter
  const filterButtons = document.querySelectorAll('.filter__button');
  const categoryItems = document.querySelectorAll('.categories__item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.dataset.filter;
      categoryItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Slider
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slider__item');
  const prevBtn = document.querySelector('.slider__prev');
  const nextBtn = document.querySelector('.slider__next');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  showSlide(currentSlide);

  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  // Accordion
  const accordionHeaders = document.querySelectorAll('.accordion__header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      content.classList.toggle('active');
    });
  });
});
