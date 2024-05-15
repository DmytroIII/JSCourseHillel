
let theSameNumber = (inputNumber) => {
    let array = inputNumber.toString().split("");
    if (array[0] === array[1] && array[1] === array[2]) {
       console.log("Числа всі однакові")
    } else {
        console.log("Числа не всі однакові")
    }
} 

theSameNumber(545);
theSameNumber(777);

let theSameNumberAll = (inputNumber) => {
    let array = inputNumber.toString().split("");
    if (array[0] === array[1] || array[1] === array[2] || array[0] === array[2]) {
       console.log("Е числа однакові")
    } else {
        console.log("Немає однакових чисел")
    }
}

theSameNumberAll(545);
theSameNumberAll(356);