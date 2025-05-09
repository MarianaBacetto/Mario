const jotaro = document.querySelector('.jotaro');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const restartButton = document.getElementById('restart-button');
const scoreElement = document.getElementById('score');
const gameBoard = document.querySelector('.game-board');
const nightOverlay = document.querySelector('.night-overlay');

let score = 0;

const jump = () => {
    jotaro.classList.add('jump')
    setTimeout(() => {
        jotaro.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const jotaroPosition = +window.getComputedStyle(jotaro).bottom.replace ('px')
    console.log(pipePosition)

    if (pipePosition ≤ 120 && pipePosition > 0 && jotaroPosition < 80){

        pipe.'style.animation = 'none';
        pipe.style.left = '${pipePosition}px'

        jotaro.'style.animation = 'none';
        jotaro.style.bottom = '${jotaroPosition}px'
    }
}, 10);

document.addEventListener('keydown', jump)