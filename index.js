const sports = [
  ['skier','⛷'],
  ['snowboarder','🏂'],
  ['apple','🍎'],
  ['hockey','🏒'],
  ['ice skate','⛸'],
  ['swimmer','🏊'],
  ['surfer','🏄‍'],
  ['watermelon','🍉'],
  ['lemon','🍋'],
  ['rowboat','🚣'],
  ['bicyclist','🚴‍']
];

let i = 5;
const summer_sports = [];
while (i < 8) {
  summer_sports.push(sports[i]);
  i++;
}
console.log("Summer sports:", summer_sports);

let j = 0;
const winter_sports = [];
do {
  winter_sports.push(sports[j]);
  j++;
} while (j < 5);
console.log("Winter sports:", winter_sports);

const fruits = [];
let k = 0;
while (k < summer_sports.length) {
  if (summer_sports[k][0] === 'apple' || summer_sports[k][0] === 'watermelon' || summer_sports[k][0] === 'lemon') {
    fruits.push(summer_sports[k]);
  }
  k++;
}

let l = 0;
while (l < winter_sports.length) {
  if (winter_sports[l][0] === 'apple' || winter_sports[l][0] === 'watermelon' || winter_sports[l][0] === 'lemon') {
    fruits.push(winter_sports[l]);
  }
  l++;
}
console.log("Fruits:", fruits);

console.log("All arrays:");
console.log("Summer sports:", summer_sports);
console.log("Winter sports:", winter_sports);
console.log("Fruits:", fruits);