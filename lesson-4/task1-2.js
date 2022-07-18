"use stric"

function alert(array){
    console.log(array + "\n---------------------------------------------------------------");
}

function compareNumbersMinToMax(number1, number2){
    return number1 - number2;
}

function compareNumbersMaxToMin(number1, number2){
    return number2 - number1;
}



let arrNumbers = [4, 12, 45, -12, 0, 42, -17, 8, -26, 10, -11, -3, 23, 154, 26, 74, -27, 54, -94, 34];
alert(arrNumbers);

// sort from min to max
arrNumbers.sort(compareNumbersMinToMax);
alert(arrNumbers);

// sort from max to min
arrNumbers.sort(compareNumbersMaxToMin);
alert(arrNumbers);

// return positive num
let positiveNumber = arrNumbers.filter(function(number){
    return number >= 0;
});
alert(positiveNumber);

// return negative num
let negativeNumber = arrNumbers.filter(function(number){
    return number < 0;
});
alert(negativeNumber);
