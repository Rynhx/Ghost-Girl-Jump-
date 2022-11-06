const girl = document.querySelector('.girl');
const ghost = document.querySelector('.ghost');

const jump = () => {
    girl.classList.add('jump');

    setTimeout(() => {
        girl.classList.remove('jump');
    }, 500 );

}

const loop = setInterval(() => {

    console.log('loop')

    const ghostPosition = ghost.offsetLeft;
    const girlPosition = +window.getComputedStyle(girl).bottom.replace('px','');

    console.log(girlPosition);

    if (ghostPosition < 120 && ghostPosition > 0 && girlPosition < 80 ) {

        ghost.style.animation = 'none';
        ghost.style.left = `${ghostPosition}px`;

        girl.style.animation = 'none';
        girl.style.bottom = `${girlPosition}px`;

        girl.src = './Imagens/gameover.png';
        girl.style.width = '75px'
        girl.style.marginLeft = '60px'

        



    
    }

},10);



document.addEventListener('keydown', jump);