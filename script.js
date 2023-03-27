
const holes = document.querySelectorAll('.hole');
  const scoreBoard = document.querySelector('.score');
  const moles = document.querySelectorAll('.mole');
const startbutton = document.querySelector('.start');
  let lastHole;
  let timeUp = false;
  let score = 0;
  let arr = ["NaCl","NH4","SO4","NO3","Cr2O7"];
  let subvar = ""
  function randomcompound(randnumb) {
    return arr[randnumb];
  }
  function randomTime(min, max) { 
    return Math.round(Math.random() * (max - min) + min);
  }

  function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
      return randomHole(holes);
    }
    lastHole = hole;
    return hole;
  }

  function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
      hole.classList.remove('up');
      if (!timeUp) peep();
    }, time);
  }

  function startGame() {
    startbutton.disabled = true;
    subvar = randomcompound(Math.floor(Math.random()*arr.length)); 
    alert("Look for " + subvar + "'s molar mass!");
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 10000)
     
  }

  function whack(e) {
    if(!e.isTrusted) return; 
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
    startbutton.disabled = false;
  }

  moles.forEach(mole => mole.addEventListener('click', whack));
