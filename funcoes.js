const MenuSite = document.querySelectorAll('header')
const Diadia = document.querySelectorAll('#menu-direito .menu-dia-a-dia')
const menu_Mobile = document.querySelectorAll('.menu-mobile')
const naviGation = document.querySelectorAll('#navigation-2')
const naviGation1 = document.querySelectorAll('.navigation-1')

function openDiaDia() {
    for(let x of Diadia) {
      x.classList.toggle('active')
    }
}

function openClose() {
  
      /*Abrir e fechar menu SITES */
      for (let element of MenuSite) {
        element.classList.toggle('active')
      }
}

let show = true;

function menuMobile() {
  
  /*Abrir e fechar menu SITES */
  for (let y of menu_Mobile) {
    y.classList.toggle('show')
   
  }

  for (let z of naviGation) {
    z.classList.toggle('show')

  }

  if (show) {
    document.body.style.overflow = "hidden"
    document.body.classList.add('main')
    show = false;
  } else {
    document.body.style.overflow = "initial"
    document.body.classList.remove('main')
    show = true;

  }
  
 

}

function searchMobile() {
  for (let i of naviGation1) {
    i.classList.toggle('search')

  }

}

const backToTopButton = document.querySelector('.subir-topo')

function backToTop() {
  if (window.scrollY >= 370) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function() {
  backToTop()
})

const swiper = new Swiper('.swiper', {
  
  mousewheel: true,
  keyboard: false,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {

    320: {
      slidesPerView: 2,
    },

    375: {
      slidesPerView: 2,
    },

    425: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 3,
    },

    1024: {
      slidesPerView: 3,

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

    375: {
      slidesPerView: 3,
    },

    414: {
      
      slidesPerView: 4,

    },

    425: {
      slidesPerView: 4,
    },

    768: {
      slidesPerView: 5,
    },

    1024: {
      slidesPerView: 6,

    },

    1440: {
      slidesPerView: 7,
    },


  },
 

});


