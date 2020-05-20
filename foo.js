function solution1(num) {
    const num2 = parseInt(num);
    return num2 % 2 === 0 ? 'even' : 'odd' 
}

solution1(3);




//////////////////////////////////////////////////////



function solution2(a, b) {
    if(a <= 12 && b <= 31) {
        const week = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'set'];
        const day = new Date('2016-' + a + '-' + b).getDay();
        return week[day]
    } else {
        return '12월이 넘었거나 31일이 넘었음.'
    }
}

solution2(5, 24);



//////////////////////////////////////////////////////



function solution3(n) {
    let num = parseInt(n);
    let result = [];
    const su = '수';
    const bak = '박';
    if(num <= 100000) {
        for(let i = 0; i <= num; i++) {
            result.push(su, bak);
        }
        return result.slice(0, num).toString().replace(/,/g, '');
    }
}

solution3(11);


function sol(nn) {
    let result = '';
    
    for(let i = 1; i <= nn; i++) {
        i % 2 === 0 ? result += '박' : result += '수';
    }
    return result;
}

sol(11)


function sol2(num) {
    return [... new Array(num).keys()].map(i => i % 2 === 0 ? '박':'수').join();
}

sol2(10);


//////////////////////////////////////////////////////


const list = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
const compl = ['josipa', 'filipa', 'marina', 'nikola'];

const list2 = ['leo', 'kiki', 'eden'];
const compl2 = ['eden', 'kiki'];


const list3 = ['mislav', 'stanko', 'mislav', 'ana'];
const compl3 = ['stanko', 'ana', 'mislav'];

const list4 = ['mislav', 'stanko', 'mislav', 'ana', 'ana', 'ana', 'stanko', 'stanko'];
const compl4 = ['stanko', 'ana', 'mislav'];


function solution4(list, compl) {
    let result = [];
    let person = list.filter(v => {
        return !compl.includes(v);
    })

    let overlap = list.map(item => {
        return {
            count: 1,
            name: item
        }
    }).reduce((a, b) => {
        a[b.name] = (a[b.name] || 0) + b.count
        return a
    }, {});

    let dd = Object.keys(overlap).filter(item => overlap[item] > 1 )

    result.push(...dd, ...person);
    return result;
}

solution4(list, compl)
solution4(list2, compl2)
solution4(list3, compl3)
solution4(list4, compl4)