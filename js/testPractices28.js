
/*for (let i = 3; i < 11; i++) {
    if ( i % 2 !==0) continue;
    console.log(i);
}*/


/*
for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}*/

/*const lines = 5;
let result = '';
let l = 1;

for (let i = 1; i <= lines; i++) {

    for (let j = lines; j >= i; j--) {
        result += ' ';
    }
    for (let k = 0; k<l; k++) {
        result += '*';
    }
    l= l+2

    result += '\n';
}*/


// Место для третьей задачи
function getMathResult(x, y) {
    let str = x;
    let c = x;
    if (typeof(y) != 'number'||y<=0){
        return x;
    } else {
        for (let i = 1; i<y; i++) {
            x = c*(i+1);
            str += `---${x}`;
        }
    }
    return str;
}

console.log(getMathResult(5, 3));
console.log(getMathResult(3, 10));
console.log(getMathResult(10, 5));
console.log(getMathResult(10, '5'));
console.log(getMathResult(10, 0));
console.log(getMathResult(20, -5));
