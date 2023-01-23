// color  from 1 to 26
let data = [
  "red",
  "orange",
  "green",
  "pink",
  "red",
  "gray",
  "lightgray",
  "oranged",
  "black",
  "lightblue",
  "lightgreen",
  "silver",
  "purple",
  "fuchsia",
  "lime",
  "yellow",
  "teal",
  "aqua",
  "navy",
  "blueviolet",
  "brown",
  "burlywood",
  "cadetblue",
  "crimson",
  "darkblue",
  "darkcyan",
  "darkgoldenrod",
];

// all Alphabet
let alph = [
  "a",
  "b",
  "c",
  "d",
  "c",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let firstName = "A";

// index Of Letter Return type number
let indexOfLetter = alph.indexOf(firstName.toLowerCase());

// index Of Color Return type number
let getColorIndex = data[indexOfLetter];
let convertToLocaleLowerCase = getColorIndex;

console.log(convertToLocaleLowerCase);

// empty arr
const arr = [];

// sort algorithm
const sortinfo = (x) => {
  return (a, b) => {
    if (a[x] < b[x]) {
      return a[x];
    } else if (a[x] > b[x]) {
      return -1;
    }
    return 0;
  };
};

// adding to the empty arr
arr.push({
  id: Math.floor(Math.random() * 10000),
  taskname: "a",
  staus: false,
});

arr.push({
  id: Math.floor(Math.random() * 10000),
  taskname: "b",
  staus: false,
});
arr.push({
  id: Math.floor(Math.random() * 10000),
  taskname: "c",
  staus: false,
});

// console.log(arr);
console.log(arr.sort(sortinfo("id")));