const start = prompt("Do you want to play a game with me?")
if (start.toLowerCase() === "yes") {
  const secretNumber = Math.floor(Math.random() * 101);
  console.log(`The secret number is: ${secretNumber}`);

  let userNumber;
  let score = 100;
  let found = false;
  do {
    if (!userNumber) {
      userNumber = parseInt(prompt("Please, enter a new number"));
    } else if (userNumber > secretNumber) {
      userNumber = parseInt(prompt("Please, enter a smaller number"));
    } else {
      userNumber = parseInt(prompt("Please, enter a bigger number"));
    }

    let found = userNumber === secretNumber;
    if (found) {
      alert(`Well done! the number was: ${userNumber} and your score is: ${score}`);
    } else {
      score -= 5;
    }

  } while (!found)
} else {
  alert("Bored :(, see you!")
}
