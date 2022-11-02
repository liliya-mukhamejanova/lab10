// lab10

let lab1 = [5, 5, 5, 5, 10, 10];
let lab2 = [5, 5, 5, 5, 5, 5, 10];
let lab3 = [5, 10, 10, 15];
let lab4_5 = [10, 5, 5, 5, 4, 5, 10, 10, 10, 10, 5];
let lab6 = [5, 5, 10, 5, 5, 10];
let lab8 = [5, 10, 10, 10, 5];

function get_sum (lab1) {
let sum1 = 0;
for (let i = 0; i < lab1.length; i++) {
sum1 += lab1[i];
}
return sum1;
}

function get_sum (lab2) {
let sum2 = 0;
for (let i = 0; i < lab2.length; i++) {
sum2 += lab2[i];
}
return sum2;
}

function get_sum (lab3) {
let sum3 = 0;
for (let i = 0; i < lab3.length; i++) {
sum3 += lab3[i];
}
return sum3;
}

function get_sum (lab4_5) {
let sum4_5 = 0;
for (let i = 0; i < lab4_5.length; i++) {
sum4_5 += lab4_5[i];
}
return sum4_5;
}

function get_sum (lab6) {
let sum6 = 0;
for (let i = 0; i < lab6.length; i++) {
sum6 += lab6[i];
}
return sum6;
}

function get_sum (lab8) {
let sum8 = 0;
for (let i = 0; i < lab8.length; i++) {
sum8 += lab8[i];
}
return sum8;
}

let sum1 = get_sum(lab1);
let sum2 = get_sum(lab2);
let sum3 = get_sum(lab3);
let sum4_5 = get_sum(lab4_5);
let sum6 = get_sum(lab6);
let sum8 = get_sum(lab8);
console.log(sum1, sum2, sum3, sum4_5, sum6, sum8);

let sums = [sum1, sum2, sum3, sum4_5, sum6, sum8];
let quiz1 = 38;
let total_score = 60*(sum1/40 + sum2/40 + sum3/40 + sum4_5/80 + sum6/40 + sum8/40)/6 + 40*quiz1/40;

function main(lab1, lab2, lab3, lab4_5, lab6, lab8) 
{
obj = {
lab1: [5, 5, 5, 5, 10, 10],
lab2: [5, 5, 5, 5, 5, 5, 10],
lab3: [5, 10, 10, 15],
lab4_5: [10, 5, 5, 5, 4, 5, 10, 10, 10, 10, 5],
lab6: [5, 5, 10, 5, 5, 10],
lab8: [5, 10, 10, 10, 5],
sums: [sum1, sum2, sum3, sum4_5, sum6, sum8],
quiz1: 38,
total_score: 60*(sum1/40 + sum2/40 + sum3/40 + sum4_5/80 + sum6/40 + sum8/40)/6 + 40*quiz1/40,
}
return obj;
}

results = main(lab1, lab2, lab3, lab4_5, lab6, lab8);
console.log(results);