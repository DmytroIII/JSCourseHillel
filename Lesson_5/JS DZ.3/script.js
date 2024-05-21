

const count = prompt("Введіть ціле число N")

for (let i=1; i<=100; i+=1) {
  if(i**2 < count) {
    console.log(i)
  }
}