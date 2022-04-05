
const MenuSite = document.querySelectorAll('.section-1')


function openClose() {
  
      /*Abrir e fechar menu SITES */
      for (let element of MenuSite) {
        element.classList.toggle('active')
      }
}

