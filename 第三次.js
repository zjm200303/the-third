const person = {
    name:'Noel',
    age:'54',
    address:{
        city:'Manchester',
        area:'Salford',
    },
    title:['singer',{year:2021,title:'Knebworth'}]
}


const { name: Name } = person;

const { age } = person
let { age: year } = person

const { address: { city } } = person

const { address: { area } } = person
var mountain = area

const { title: [title1] } = person;

let obj = { title: ['singer', { year: 2021, title: 'Knebworth' }] };
let { title: [x, { title }] } = obj;
var title2 = title

let title3 = title2
title3 = title2.slice(0, 2) + title2.charAt(3


console.log(name) 
console.log(year) 
console.log(city) 
console.log(area) 
console.log(title1) 
console.log(title2) 
console.log(title3)









function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));

function factorial(n) {
    for (let i = n - 1; i >= 1; i--) {
        n *= i;
    }
    return n;
}
console.log(factorial(5));
//我以为要自己整个不一样的，就没按课件来。。。错错