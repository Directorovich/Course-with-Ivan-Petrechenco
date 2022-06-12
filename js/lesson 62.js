
// function amountOfPages(summary){
//     let str = '';
//     for (let i = 1; i <= summary; i++) {
//         str += i;
//     }
//     let arr;
//     arr = str.slice(summary - (summary+'').length, summary);
//     console.log();
//     return arr;
// }

function amountOfPages(summary){
    let str = '';
    let i;
    for (i = 1; i <= summary; i++) {
        str += i;
        if (str.length === summary) {
            break;
        }
    }
    return i;
}

console.log(amountOfPages(25));
console.log(amountOfPages(5));
console.log(amountOfPages(1095));
console.log(amountOfPages(185));


// function amountOfPages(summary) {
//     let str = [];
//     for (let i = 1; i <= summary; i++) {
//         str.push(i);
//     }
//     let arr;
//     arr = str.slice(0, 25);
//     return arr;
// }
//
// console.log(amountOfPages(25));