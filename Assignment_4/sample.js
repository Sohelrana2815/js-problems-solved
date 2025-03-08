function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return "Invalid input";
  }
  const result = array.filter((element) => {
    return typeof element === "number" && !isNaN(element);
  });

  return result;
}

console.log(
  deleteInvalids([
    1,
    2815,
    -302,
    null,
    "hello",
    NaN,
    [1, 2, 3],
    { name: "sohelRana" },
  ])
);
