const button = document.querySelector('.btn');
let timerId;
let counter = 0;

function myAnimation () {
    const box = document.querySelector('.box');
    let pos = 0;

    let id = setInterval(frame, 10)
    function frame () {
        if (pos === 300) {
            clearInterval(timerId);
        } else {
            pos++;
            box.style.top = pos + 'px';
            box.style.left = pos + 'px';
        }
    }
}

button.addEventListener('click', () => {
    myAnimation();
});


// function logger (text){
//     console.log(text);
//     counter++;
//     if (counter === 4) {
//         clearInterval(timerId);
//     }
// }

