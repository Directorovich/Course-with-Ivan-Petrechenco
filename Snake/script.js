const button = document.querySelector('.btn');
let timerId;
let counter = 0;

const box = document.querySelector('.box');
box.tabIndex = 0;
let pos = 0;
let x = 0;
let y = 0;

let idRight;
let idLeft;
let idUp;
let idDown;

//let id = setInterval(frame, 10);

box.addEventListener('keydown', function (e) {
    if (e.code === 'ArrowRight') {
        clearInterval(idDown);
        clearInterval(idLeft);
        clearInterval(idUp);
        idRight = setInterval(() => {
            x += 5;
            box.style.top = y + 'px';
            box.style.left = x + 'px';
        }, 100)
    } else if (e.code === 'ArrowLeft')
    {
        clearInterval(idDown);
        clearInterval(idRight);
        clearInterval(idUp);
        idLeft = setInterval(() => {
            x -= 5;
            box.style.top = y + 'px';
            box.style.left = x + 'px';
        }, 100)
    } else if (e.code === 'ArrowUp')
    {
        clearInterval(idDown);
        clearInterval(idLeft);
        clearInterval(idRight);
        idUp = setInterval(() => {
            y -= 5;
            box.style.top = y + 'px';
            box.style.left = x + 'px';
        }, 100)
    } else if (e.code === 'ArrowDown') {
        clearInterval(idRight);
        clearInterval(idLeft);
        clearInterval(idUp);
        idDown = setInterval(() => {
            y += 5;
            box.style.top = y + 'px';
            box.style.left = x + 'px';
        }, 100)
    };



})

// function frame () {
//     if (pos === 300) {
//         clearInterval(id);
//     } else {
//         pos++;
//         box.style.top = pos + 'px';
//         box.style.left = pos + 'px';
//     }
// }

// function logger (text){
//     console.log(text);
//     counter++;
//     if (counter === 4) {
//         clearInterval(timerId);
//     }
// }

