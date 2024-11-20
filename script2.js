const cards = [...document.querySelectorAll('.card')],
      container = document.querySelector('.container'),
      arrows = [...document.querySelectorAll('.arrow')]

let angle = 0,
    chgtCard = 0,
    canChange = true, //prevent spam
    prevX,
    prevY,
    timeElapsed = 50

window.onLoad = animateCards() 


// first card animation when the page is loaded
function animateCards(){  
  cards.forEach((card,idx) => {
    setTimeout(function(){
      
      let divClassName
      
      if(idx % 2 === 0) {
    divClassName = "card-on-left"
    }
      else{
    divClassName = "card-on-right"        
      }
      
      card.classList.remove(divClassName)
        setTimeout(function(){
          card.classList.add("card-centered")
        }, 150 + cards.length * 150)
    }, timeElapsed)
    
    timeElapsed += 150
  })
}


function changeCard(direction){
  // direction : -1 => left / 1 => right
  
  canChange = false
  cards.forEach(card => {
    
    let pos = parseInt(card.dataset.pos,10)    
    let formerPos = pos    
    pos += direction
        
    card.dataset.pos = pos
    
    if(pos === 0){
      setTimeout(function(){
        card.dataset.pos = 24
        canChange = true
      }, 500)
    }
    
    else if(pos === 25){
      setTimeout(function(){
        card.dataset.pos = 1
        canChange = true
      }, 500)
      
    }
  })
  

}


// -A- change cards with wheel
container.addEventListener('wheel', e  =>{
    
  if(canChange){
    const direction = Math.sign(e.deltaY)
    chgtCard += direction
    
    Math.abs(chgtCard) > 5 && (
      changeCard(direction),
      chgtCard = 0)
  }
})


// -B- change cards with touches
container.addEventListener('touchstart', (e) => {
  e.preventDefault()
  prevX = e.touches[0].clientX
  prevY = e.touches[0].clientY
})

container.addEventListener('touchmove', (e) => {
  e.preventDefault()
  if(canChange){
    let direction
    let newX = e.touches[0].clientX
    let newY = e.touches[0].clientY
    let deltaX = Math.abs(newX - prevX)
    let deltaY = Math.abs(newY - prevY)
    if(deltaX > 10 || deltaY > 10){
      deltaX > deltaY ? ( direction = Math.sign(newX - prevX),
        prevX = newX) 
      : (direction = Math.sign(newY - prevY),
        prevY = newY)
    changeCard(direction)
    }
  }
})


// -C- change cards with arrows
arrows.forEach(arrow => arrow.addEventListener('click', e => changeCard(parseInt(e.target.dataset.dir) )))

const heartsContainer = document.querySelector('.hearts-container');

// Function to create a heart element
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '♥';

  // Randomize initial horizontal position, size, and animation duration
  heart.style.left = `${Math.random() * 100}vw`; // Random horizontal position
  heart.style.animationDuration = `${Math.random() * 2 + 2}s`; // Fall speed
  heart.style.fontSize = `${Math.random() * 1.5 + 1}rem`; // Random size
  heart.style.opacity = Math.random() * 0.8 + 0.2; // Random transparency

  heartsContainer.appendChild(heart);

  // Remove the heart after animation ends
  heart.addEventListener('animationend', () => {
    heart.remove();
  });
}

// Generate hearts continuously
setInterval(createHeart, 300);
