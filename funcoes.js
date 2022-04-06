
const MenuSite = document.querySelectorAll('.section-1')


function openClose() {
  
      /*Abrir e fechar menu SITES */
      for (let element of MenuSite) {
        element.classList.toggle('active')
      }
}


const swiper = new Swiper('.swiper', {
    
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
    

  },
  mousewheel: true,
  keyboard: true
});


const SWW = new Swiper('.swipeer', {
    
  slidesPerView: 5,
  pagination: {
    el: '.swiper-paginatioon'
    

  },
  mousewheel: true,
  keyboard: true
});
