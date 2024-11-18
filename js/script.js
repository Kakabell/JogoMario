
const mario = document.querySelector('.mario');
const tunel = document.querySelector('.tunel');



const pulo = () => {
    mario.classList.add('pulo');
    
    setTimeout(() => {
        
        mario.classList.remove('pulo');
    
    }, 500)
}

const loop = setInterval(()=>{
    const tunelPosition = tunel.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);
    
    if (tunelPosition <= 92 && tunelPosition > 0 && marioPosition < 65) {
        tunel.style.animation = 'none';
        tunel.style.left = `${tunelPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src='./img/gameover.png';
        mario.style.marginbottom = '0px';
        /* mario.style.width = '75px'; */

        clearInterval(loop);
    }

}, 10)

document.addEventListener('keydown', pulo);