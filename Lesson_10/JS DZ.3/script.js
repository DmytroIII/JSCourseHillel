function promptForNumber() {
  let iteration = 0;
  let userInput;

  while (iteration < 10) {
      userInput = prompt("Введіть число більше 100:");
      
      if (userInput > 100) {
          console.logs(`Ви ввели число більше 100: ${userInput}`);
          return;
      }

      iteration++;

      if (iteration === 10) {
          console.log(`Ви досягли максимальну кількість спроб. Останнє введене число: ${userInput}`);
          return;
      }
  }
}

promptForNumber();
