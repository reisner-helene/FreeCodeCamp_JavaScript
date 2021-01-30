function sumAll(myArray) {
  
  let min = Math.min(myArray[0], myArray[1]);
  let max = Math.max(myArray[0], myArray[1]);
  var result = 0;

  for (let i = min; i <= max; i++){
    console.log(i, "<= i", result, "<= result");
    result += i;
  }

  return result;
}

console.log(sumAll([10, 15]));