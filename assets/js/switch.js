
const userEmail = prompt('Insert a user email');
console.log(`The user email is ${userEmail}`);

if (userEmail.endsWith("@ironhack.com") && !userEmail.includes(" ")) {
  let kind;
  switch (userEmail) {
    case 'carlos@ironhack.com':
    case 'julio@ironhack.com':
      kind = 'teacher';
      break;
    case 'moi@ironhack.com':
      kind = 'TA';
      break;
    default:
      kind = 'student';
      break;
  }

  alert(`the user is ${kind}`);
} else {
  alert(`Invalid email ${userEmail}`);
}
