// Solution 1
function calculateMoney(input) {
  if (input < 0 || input == 0) {
    return "Invalid Number";
  }
  // Expenses
  const guardExpense = 500;
  const staffLunchExpense = 8 * 50;

  const totalExpense = guardExpense + staffLunchExpense;

  // ticketSales revenue
  const ticketSalesRevenue = 120 * input;

  const remainingMoney = ticketSalesRevenue - totalExpense;
  return remainingMoney;
}

// Solution 2

function checkName(input) {
  if (typeof input !== "string") {
    return "Invalid";
  }
  const lastChar = input.at(-1)?.toLowerCase();
  const goodLetters = new Set(["a", "y", "i", "e", "o", "u", "w"]);
  return goodLetters.has(lastChar) ? "Good Name" : "Bad Name";
}

// Solution 3

function deleteInvalid(input) {
  if (!Array.isArray(input)) {
    return "Invalid Array";
  }
  return input.filter((item) => typeof item === "number" && !isNaN(item));
}
