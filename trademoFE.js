"use strict";

function generateNumberdArray(n){
  const arr = new Array(n+1);
  for(let i=0;i<=n;i++){
    arr[i]=i;
  }
  arr[1] = 0;
  return arr;
}

function sieveOfEratosthenes(lastNumber){
  // create a array of numbers greater than 2
  const numberdArray = generateNumberdArray(lastNumber);

  for(let i=2; i*i <= lastNumber; i++){
    if(numberdArray[i]){
      for(let j=i+i; j <= lastNumber; j = j+i){
          numberdArray[j] = 0;
      }
    }
  }

  // log all prime numbers in numbered Array
  numberdArray.forEach((num)=>{
    num && console.log(num);
  })
}

sieveOfEratosthenes(40);