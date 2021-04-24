

let mobileLinksOpener = document.querySelector('.social_links-mobile-click')
let mobileLinksContainer = document.querySelector('.social_links')

mobileLinksOpener.addEventListener('click', (e) => {
  console.log(e)
  mobileLinksContainer.classList.toggle('mobile-active')
  e.target.classList.toggle('mobile-active')

})