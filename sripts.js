window.addEventListener('scroll', onScroll)

function onScroll(){
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activeMenuOnTheCurrentSection(home)
  activeMenuOnTheCurrentSection(services)
  activeMenuOnTheCurrentSection(about)
  activeMenuOnTheCurrentSection(contact)
  
}

function activeMenuOnTheCurrentSection(section){
  const targetLine = scrollY + innerHeight/2;

  // Verificar se passou da linha
  // Quais são os dados necessários ?  
  
    //Ver onde o topo do elemento está
  const sectionTop = section.offsetTop;
    //Ver a altura do elemento
  const sectionHeight = section.offsetHeight;   
  
  //O topo da seção chegou ou passou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

  //console.log('O topo da seção passou da linha ?', sectionTopReachOrPassedTargetLine);

  // Verificar se a base está abaixo da linha alvo 
  const sectionEndsAt = sectionTop + sectionHeight;

  
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;
  
  
  //console.log('O fundo da sessão passou da linha ? ' ,sectionEndPassedTargetLine);

  // Limites da sessão 
  const sectionBoundaries = sectionTopReachOrPassedTargetLine &&!sectionEndPassedTargetLine

  const sectionID = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionID}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}
















function showNavOnScroll(){
  if(scrollY > 75){
    navigation.classList.add('scroll');
  } else{
    navigation.classList.remove('scroll');
  }
}

function showBackToTopButtonOnScroll(){
  if(scrollY > 550){
    backToTopButton.classList.add('show');
  } else{
    backToTopButton.classList.remove('show');
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
  #about .content img,
  #contact,
  #contact header,
  #contact content,
  #contact img`);
