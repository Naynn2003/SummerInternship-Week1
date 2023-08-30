async function fetchData() {
  // Asynchronous code here
  const result = await fetch("https://data.covid19india.org/data.json");
  return result.json();
}


async function example() {
  const result1 = await someAsyncFunction();
  const result2 = await anotherAsyncFunction(result1);
  return result2;
}