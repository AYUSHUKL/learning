//All about array

const A = ['a','b','c'];
const b = new Array('s','s','s');
console.log(A);
console.log(b);
console.log(A.length);
console.log(A[A.length-1]);

//exercise

const calcAge  = function(birthyear){
    return 2022-birthyear ;
}
const years = ['1992','1993','1995']

console.log(calcAge(years[1]));



function calcTip(bill){

    // const bill = ['125','555','44'];
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20 ;  
}
const bills = ['125','555','44'];
const tips = [calcTip(bills[0]),calcTip(bills[1])];
const total = [bills[0] + tips[0]] ;

console.log(bills,tips,total);

