
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (plan) {
        let str = `Мне ${plan.age} и я владею языками: `
        plan.skills.languages.forEach(function (l){
            str += `${l.toUpperCase()} `
        })
        return str;
    }
};

function showExperience(plan) {
    let {exp} = plan.skills;
    return exp;
}

function showProgrammingLangs(plan) {
    let obj = plan.skills.programmingLangs;
    let allData = '';
    for (let key in obj) {
        allData += `Язык ${key} изучен на ${obj[key]}`;
    }
    return allData;
}

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.length > 0) {
        return `Семья состоит из: ${arr.join(' ')} `;
    } else {
        return 'Семья пуста';
    }
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    for (let key of arr) {
        console.log(key.toLowerCase());
    }
}

function reverse(str) {
    if (typeof (str) != 'string') {
        return 'Ошибка!';
    }
    let newArr = [];
    let arrReverse = '';

    str.map((l) => {newArr.unshift(l)});

    return newArr;
}

console.log(reverse(someString));
