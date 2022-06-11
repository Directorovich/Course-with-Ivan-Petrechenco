const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let shopsArea = [];
    let area = 0;
    data.shops.forEach((item, i) => {
        shopsArea[i] = item.length * item.width;
    });
    shopsArea.forEach((a, i) => {
        area = area + a;
    })
    let shopsVolume = area * data.height;
    let cost = shopsVolume * data.moneyPer1m3;
    console.log("areas " + shopsArea);
    console.log("area " + area);
    console.log("Volume " + shopsVolume);
    console.log("cost " + cost);
    if (data.budget >= cost){
        return "Бюджета достаточно";
    } else {
        return "Бюджета недостаточно";
    }

}

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', "Takesii"];

function sortStudentsByGroups(arrr) {
    let arr = [...arrr]
    arr.sort();
    let groups = [];
    let end;
    for (let i = 0; i < 3; i++) {
        let group = [];
        for (let j = 0; j < 3; j++) {
            group[j] = arr.shift();
        }
        groups[i] = group;
    }
    if (arr.length > 0) {
        end = `Оставшиеся студенты: ${arr.join(', ')}`;
    } else {
        end = `Оставшиеся студенты: -`;
    }
    groups[3] = end;
    return groups;
}
console.log(sortStudentsByGroups(students));

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [], b = [], c = [], rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
}

sortStudentsByGroups(students);


const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ?  answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + +(sDish.price.slice(0, -1)) < average) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors = [{name: 'Mike', age: 32}];
    return copy;
}

transferWaitors(restorantData);
let div = document.createElement('div');
div.insertAdjacentElement();

function factorial(n) {
    if (n > 0 && n % 1 === 0 && typeof(n) == 'number') {
        let result = 0;
        if (n===1) {
            return n;
        } else {
            result += n * factorial(n-1);
            return result;
        }
    } else {
        return 'not good';
    }
}
