
const MenuSite = document.querySelectorAll('.section-1')
const menuHamburguer = document.querySelectorAll(".navigation-1")




function clicar() {
  for (let item of menuHamburguer){
      item.classList.toggle('active')

}
  

}


function openClose() {
  
      /*Abrir e fechar menu SITES */
      for (let element of MenuSite) {
        element.classList.toggle('active')
      }
}


const swiper = new Swiper('.swiper', {
  
  mousewheel: true,
  keyboard: false,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
  
    320: {
      slidesPerView: 1,
    },
    

    1024: {
      slidesPerView: 2,

    },
    
    1440: {
      slidesPerView: 3,
    },


  },
 

});

const swiperP = new Swiper('.swipeer', {
  
  mousewheel: true,
  keyboard: true,

  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },

  breakpoints: {
  
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 5,
    },
    1440: {
      slidesPerView: 9,
    },


  },
 

});


console.log(menuHamburguer)
