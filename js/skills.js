document.addEventListener('DOMContentLoaded', () => {
  

  let skillsItems = document.querySelectorAll('.skills-item')

  skillsItems.forEach(item => {
    item.addEventListener('mouseover', () => removeClasses(item) )
    item.addEventListener('mouseleave', () => removeAllClasses() )
  })

  function removeClasses(target){
    skillsItems.forEach(item => {
      item.classList.remove('active')
      item.classList.add('secondary')
    })
    target.classList.add('active')
    target.classList.remove('secondary')
  }

  function removeAllClasses() {
    skillsItems.forEach(item => { 
      item.classList.remove('active')
      item.classList.remove('secondary')
    })
  }

//skills

  let otherProjects = document.querySelectorAll('.project-others-item')

  otherProjects.forEach(div => {

    div.addEventListener('mouseover', () => removeClasses(div))
    div.addEventListener('mouseleave', () => removeAllClasses(div))
  })






})