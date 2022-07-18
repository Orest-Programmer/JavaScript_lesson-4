"use stric"

function alert(array){
    console.log(array);
    console.log('\n----------------------------------------------');
}

function getFatulyName(obj){
    return obj.fucultyName;
}

let studentArr = [];

let Student_id1 = {yearOfStuding: 2018, fucultyName: 'Computer Since'};

let Student_id2 = {yearOfStuding: 2019, fucultyName: 'Physics'};

let Student_id3 = {yearOfStuding: 2017, fucultyName: 'Advocat'};

let Student_id4 = {yearOfStuding: 2013, fucultyName: 'Medical'};

let Student_id5 = {yearOfStuding: 2014, fucultyName: 'Some Since'};

let Student_id6 = {yearOfStuding: 2011, fucultyName: 'Historycal'};

let Student_id7 = {yearOfStuding: 2016, fucultyName: 'Computer Since'};

let Student_id8 = {yearOfStuding: 2011, fucultyName: 'Web design'};

let Student_id9 = {yearOfStuding: 2018, fucultyName: 'Designer'};

let Student_id10 = {yearOfStuding: 2022, fucultyName: 'Builder'};

studentArr.push(Student_id1, Student_id2, Student_id3, Student_id4, Student_id5, Student_id6, Student_id7, Student_id8, Student_id9, Student_id10);

alert(studentArr);

// Only fucultyName
let fucultyNameArr = [];
for(let i = 0; i < studentArr.length; i++){
    fucultyNameArr.push(studentArr[i].fucultyName);
}
alert(fucultyNameArr);

let sumOfStuding = 0;

for(let i = 0; i < studentArr.length; i++){
    sumOfStuding += studentArr[i].yearOfStuding;
}

console.log('Sum of Studing = ' + sumOfStuding);
