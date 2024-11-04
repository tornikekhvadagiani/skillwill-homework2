// მოცემულია მასივი [{name: 'Temo', age: 25},{name: 'Lasha', age: 21}, {name: 'Ana', age: 28}]
//     ● დაწერე ფუნქცია, რომელიც პარამეტრად
//     მიიღებს user - ების მასივს და დააბრუნებს
//     ყველაზე პატარა ასაკის მქონე ადამიანის
//     სახელს

const users = [
  { name: "Temo", age: 25 },
  { name: "Lasha", age: 21 },
  { name: "Ana", age: 28 },
];
function findYoungestUser(users) {
  let youngest = users[0];

  for (const user of users) {
    if (user.age < youngest.age) {
      youngest = user;
    }
  }

  return youngest.name;
}

console.log(findYoungestUser(users));

// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს user ობიექტს და დააბრუნებს
// იგივე მნიშვნელობების მქონე ახალ
// (განსხვავებულ) ობიექტს
function copyUsers(user) {
  const newUser = {};
  Object.entries(user).forEach(([key, value]) => (newUser[key] = value));
  return newUser;
}
const userCopy = copyUsers(users);
console.log(userCopy);

// დაწერე პროგრამა, სადაც ორი a და b
// მომხმარებლები აგორებენ კამათელს
// მანამ, სანამ არ გაგორდება, რომელიც
// უფრო ნაკლებ ცდაში გააგორებს სამიანს ის
// არის გამარჯვებული
function rollDice() {
  return Math.floor(Math.random() * 6) + 1; // აგორებს 1-დან 6-მდე
}

function startGame() {
  let aAttempts = 0;
  let bAttempts = 0;
  let aRoll, bRoll;

  do {
    aRoll = rollDice();
    bRoll = rollDice();
    aAttempts++;
    bAttempts++;
  } while (aRoll !== 3 && bRoll !== 3);

  if (aRoll === 3 && bRoll === 3) {
    console.log("Both rolled a 3!");
  } else if (aRoll === 3) {
    console.log(`User A wins with ${aAttempts} attempts!`);
  } else {
    console.log(`User B wins with ${bAttempts} attempts!`);
  }
}

startGame();
