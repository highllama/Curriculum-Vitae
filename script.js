const responsiveButton = document.getElementById('responsiveHeader')
const mainHeader = document.querySelector('.mainHeader')

responsiveButton.addEventListener('click', () => {
  mainHeader.classList.toggle('displayed')
})



