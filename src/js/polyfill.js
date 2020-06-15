import showList from './lib/list.js';

const test = (a, b) => {
  console.log("test");
  return a + b;
};
const t = { a: 1, b: 2, c: 3 };
const t2 = { ...t, d: 4, e: 5 };
console.log(test(1, 2), t2);

const divList = document.getElementById('list');

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    showList(divList, users)
  })
  .catch((error) =>
    console.error("Something went wrong when fetching this data: ", error)
  );
