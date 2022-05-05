function onScroll(){
  if(scrollY > 75){
    navigation.classList.add('scroll');
  } else{
    navigation.classList.remove('scroll');
  }
}

function openMenu(){
  document.body.classList.add('menuExpended')
}

function closeMenu(){
  document.body.classList.remove('menuExpended')
  }

  let scrollPage = {
    
  }

  ScrollReveal({
    origin: 'top',
    distance:'30px',
    duration: 1100,
  }).reveal(`
  #home header,
  #home .content, 
  #home img, 
  #home .stats, 
  #services, 
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content,
  #about .content img`);
