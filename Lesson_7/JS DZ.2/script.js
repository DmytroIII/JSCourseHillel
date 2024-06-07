

function countAverege (array) {
  const numberArray = [];
  for (let i=0; i< array.length; i+=1) {
    if (typeof array[i] === "number") {
      numberArray.push(array[i]);
    }
  }

  let summ = 0;
  for (let i=0; i<numberArray.length; i++){
    summ += numberArray[i];
  }
  return summ/numberArray.length;
}