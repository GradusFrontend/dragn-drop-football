

const body = document.body
const area = document.querySelector('.area')
const ball = document.querySelector('.ball')
const leftGate = document.querySelector('.left_gate')
const rightGate = document.querySelector('.right_gate')
const leftTriangle = document.querySelector('.left_triangle')
const rightTriangle = document.querySelector('.right_triangle')
const topOut = document.querySelector('.top_out')
const bottomOut = document.querySelector('.bottom_out')
const left_score = document.querySelector('#left_score')
const right_score = document.querySelector('#right_score')
let left_score_js = 0
let right_score_js = 0

ball.ondragstart = () => {

    setTimeout(() => {
        ball.style.display = "none"
    }, 0);
}

ball.ondragend = () => {
    // div.style.border = "0px"
    ball.style.display = "block"
}


area.ondragover = (e) => {
    e.preventDefault();
}
area.ondragenter = (e) => {
    e.preventDefault();
}

area.ondrop = (event) => {
    let {x, y} = event

    ball.style.top = y + "px"
    ball.style.left = x + "px"
}

leftGate.ondragenter = () => {
    console.log('right team score!')
    right_score.innerHTML = ++right_score_js

    const defaults = {
        spread: 360,
        ticks: 50,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["star"],
        colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
      };
      
      function shoot() {
        confetti({
          ...defaults,
          particleCount: 40,
          scalar: 1.2,
          shapes: ["star"],
        });
      
        confetti({
          ...defaults,
          particleCount: 10,
          scalar: 0.75,
          shapes: ["circle"],
        });
      }
      
      setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);
}
rightGate.ondragenter = () => {
    console.log('left team score!')
    left_score.innerHTML = ++left_score_js

    const defaults = {
        spread: 360,
        ticks: 50,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["star"],
        colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
      };
      
      function shoot() {
        confetti({
          ...defaults,
          particleCount: 40,
          scalar: 1.2,
          shapes: ["star"],
        });
      
        confetti({
          ...defaults,
          particleCount: 10,
          scalar: 0.75,
          shapes: ["circle"],
        });
      }
      
      setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);
}
leftTriangle.ondragenter = () => {
    console.log('right team got triangle!')
}
rightTriangle.ondragenter = () => {
    console.log('left team got triangle!')
}
topOut.ondragenter = () => {
    console.log('somoene get out!')
}
bottomOut.ondragenter = () => {
    console.log('somoene get out!')
}
