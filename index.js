// EXAMPLE 1 - Sort an Array of strings ignoring the Case in JavaScript

const arr = ['Z', 'f', 'a', 'C'];

const sorted = arr.sort((a, b) => {
  return a.localeCompare(b, undefined, {sensitivity: 'base'});
});

console.log(sorted); // 👉️ ['a', 'C', 'f', 'Z']

// ------------------------------------------------------------------

// // EXAMPLE 2 - Sort an Array of strings ignoring the Case without mutation

// const arr = ['Z', 'f', 'a', 'C'];

// // 👇️ create shallow copy before calling sort
// const sorted = [...arr].sort((a, b) => {
//   return a.localeCompare(b, undefined, {sensitivity: 'base'});
// });

// console.log(sorted); // 👉️ ['a', 'C', 'f', 'Z']
