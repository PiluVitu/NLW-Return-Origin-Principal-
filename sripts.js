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

  ScrollReveal().reveal('.container');
