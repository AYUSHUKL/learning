//first

const calcTip = function(bill){
    return  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20 ;

}

const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const total = [];

for(i = 0 ; i < bills.length-1 ; i++){

    tips.push(calcTip(bills[i]));
    total.push(tips[i]+bills[i]);

}
console.log(tips , total);

//second
console.log('-----second-----')


const calcAverage = function(arr){
    let sum = 0;
      for(let i=0; i<arr.length ; i++){
      sum = sum + arr[i];}
      return sum / arr.length;
}
console.log(`Average of array ${calcAverage([1,2,3,4,5])}`);
