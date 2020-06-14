document.getElementById("list").innerHTML = "Hello IE";

const test = (a, b) => {
  console.log("test");
  return a + b;
};

console.log(test(1, 2));

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
    console.log(
      "We retrieved some data! AND we're confident it will work on a variety of browser distributions."
    );
    console.log(json);
  })
  .catch((error) =>
    console.error("Something went wrong when fetching this data: ", error)
  );
