const MenuSite = document.querySelectorAll('.menu-sites')


function openClose() {
      for (let element of MenuSite) {
        element.classList.toggle('active')
      }
}

