const movable = window.document.querySelectorAll('.movable')[0];

const viewx = window.innerWidth / 2;
const viewy = window.innerHeight / 2;

window.addEventListener('mousemove', function (e) {

    // setting up mouse positions
    let mousex = e.clientX - viewx;
    let mousey = e.clientY - viewy;

    movable.style.left = `${-mousex / 8}px`; 
    movable.style.top = `${-mousey / 8}px`; 

    requestAnimationFrame(move);
}); 