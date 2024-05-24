
const number = prompt("Введіть ціле число N")

let numberCount= 0;

for (let i=1; i<=number; i+=1) {
  if(count % i === 0) {
    numberCount +=1;
  }
}

if (numberCount === 2) {
  alert("Це просте число")
} else {
  alert("Це не просте число")
}

