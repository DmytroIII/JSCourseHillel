

/* var userName = prompt("Ім'я користувача");
alert(`Hello, ${userName}! How are you?`); */

/* var userName = prompt("Введіть трьохзначне число");
alert(`Hello, ${userName}! How are you?`); */

let theSameNumber = (inputNumber) => {
    let array = inputNumber.toString().split("");

    if (array[0] === array[1] && array[1] === array[2]) {
       console.log("Числа однакові")
    } else {
        console.log("Числа НЕ однакові")
    }

}

theSameNumber(345);
theSameNumber(333);