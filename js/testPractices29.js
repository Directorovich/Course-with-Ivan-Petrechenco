

function calculateVolumeAndArea(lengthEdgeCube) {
    if ((lengthEdgeCube > 0) && (lengthEdgeCube % 1 === 0) && (lengthEdgeCube !== null) && (typeof (lengthEdgeCube) == 'number')) {
        let area = lengthEdgeCube * lengthEdgeCube * 6;
        let volume = lengthEdgeCube * lengthEdgeCube * lengthEdgeCube;
        return `Volume cube: ${volume}, area cube ${area} `;
    } else {
        return 'Error';
    }
}

/*
function getCoupeNumber(place) {
    if ((place > 0 && place <= 36) && (place % 1 === 0) && (place !== null) && (typeof (place) == 'number')) {
        let remainder = (place) % 4;
        let numberCoupe = (place - remainder) / 4;
        return numberCoupe + 1;
    } else {
        return 'Error';
    }
}*/

/*function getCoupeNumber(place) {
    if ((place > 0 && place <= 36) && (place % 1 === 0) && (place !== null) && (typeof (place) == 'number')) {

        let numberCoupe = Math.ceil(place / 4);
        return numberCoupe;
    } else {
        return 'Error';
    }
}*/

function getCoupeNumber(place) {
    if (place === 0 || place > 36) {
        return 'Таких мест в вагоне не существует';
    } else if ((place > 0 && place <= 36) && (place % 1 === 0) && (place !== null) && (typeof (place) == 'number')) {

        let numberCoupe = Math.ceil(place / 4);
        return numberCoupe;
    } else {
        return 'Ошибка. Проверьте правильность введенного номера места';
    }

}

function getTimeFromMinutes(time) {
    if (time >= 0 && Number.isInteger(time)) {
        let hours;
        let minutes;
        if (time < 60) {
            hours = 0;
            minutes = time;
        }
        if (time >= 60) {
            hours = Math.floor(time / 60);
            minutes = time % 60;
        }

        if (hours === 0 || hours === 5 || hours === 6 || hours === 7 || hours === 8 || hours === 9 || hours === 10) {
            return `Это ${hours} часов и ${minutes} минут`;
        } else if (hours === 1) {
            return `Это ${hours} час и ${minutes} минут`;
        } else if (hours === 2 || hours === 3 || hours === 4) {
            return `Это ${hours} часа и ${minutes} минут`;
        }
    } else {
        return 'Ошибка, проверьте данные';
    }
}
/*0, 5, 6, 7, 8, 9, 10 - часов
1 час
2, 3, 4 часа*/

function findMaxNumber(a,b,c,d) {
    let arr = [a,b,c,d];
    let bigNumber = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) === 'number') {
            if (arr[i] > bigNumber) {
                bigNumber = arr[i];
            }
        } else {
            return 0;
        }
    }
    return bigNumber;
}

function fib(count) {
    if (typeof(count) === 'number' && Number.isInteger(count) && count > 0) {
        let a = 0;
        let b = 1;
        let arrFib = '0';
        for (let i = 1; i < count; i++) {
            let c = a + b;
            b = a;
            a = c;
            arrFib = arrFib + ' ' + c;
        }
        return arrFib;
    } else {
        return '';
    }
}