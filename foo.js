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

// console.log( solution4(list, compl) )
// console.log( solution4(list2, compl2) )
// console.log( solution4(list3, compl3) )
// console.log( solution4(list4, compl4) )


// 꼼수
function solution5(list, compl) {
    let lists = list.sort()
    let compls = compl.sort()
    for(let i = 0; i < lists.length; i++) {
        if(lists[i] !== compls[i]) {
            return lists[i] 
        }
    }
    console.log(lists, compls)
}


console.log( solution5(list, compl) )



// 선생님이 고쳐준거 
function solution4(list, compl) {
    let overlap = list.map(item => {
        return {
            name : item,
            count: 1,
        }
    }).reduce((a, b) => {
        a[b.name] = (a[b.name] || 0) + b.count
        return a
    }, {});

    compl.forEach( com => {
        overlap[com] = overlap[com] - 1;
    });

    return Object.keys(overlap).filter(k => overlap[k] > 0)[0];
}


//선생님 답
function solution(participant, completion) {
    let answer = ''
    let cc = completion.reduce( (acc, c) => {
        if(acc[c]){
            acc[c] = acc[c] + 1;
        } else{
            acc[c] = 1;
        } return acc;}, {});

    participant.forEach(p => {
        let c = cc[p];
        if(!c || c === 0) {
            answer = p;
        } else
            cc[p] = c - 1
    });
    return answer;  
}




// $$$$$$$$$$$$$$$$$$$$$$

let arrrr = [5, 9, 7, 10]

function solution6(arr, num) {
    let arr2 = arr.sort( (a, b) => a - b );
    let result = arr2.filter(n => n % num === 0)

    return result
}

console.log( solution6(arrrr, 5) ) 


// ########################

// function solution7(n, m) {
//     let result = '';
//     for(let i = 0; i < n; i++) {
//         result += '\n';
//         for(let i = 0; i < m; i++) {
//             result += '*';
//         }
        
//     }
//     return result;
// }

// console.log(solution7(3,5))