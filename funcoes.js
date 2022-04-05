const MenuSite = document.querySelectorAll('.section-1')


function openClose() {
      for (let element of MenuSite) {
        element.classList.toggle('active')
      }
}

