// // No.1 solution
function calculateMoney(ticketSale) {
  if (ticketSale < 0 || ticketSale === 0) {
    return "Invalid Number";
  }
  const securityGuardExpense = 500;
  const lunchExpense = 8 * 50;
  const totalExpenses = securityGuardExpense + lunchExpense;
  const ticketSalesRevenue = 120 * ticketSale;

  const remainingMoney = ticketSalesRevenue - totalExpenses;

  return remainingMoney;
}

// // No.2 solution

function checkName(name) {
  if (typeof name !== "string" || name === "") {
    return "Name should string.";
  }
  const goodNameCharacters = ["a", "e", "i", "o", "u", "w", "y"];

  const lastCharacter =
    name.length > 0 ? name[name.length - 1].toLocaleLowerCase() : "";

  let isGoodName = false;

  for (let i = 0; i < goodNameCharacters.length; i++) {
    if (goodNameCharacters[i] === lastCharacter) {
      isGoodName = true;
      break;
    }
  }
  if (isGoodName) {
    return "GoodName";
  } else {
    return "Bad Name";
  }
}

// console.log(checkName(""));

// No.3 solution

function deleteInvalids(arr) {
  if (!Array.isArray(arr)) {
    return "Invalid Array";
  }

  // Filter it

  const result = arr.filter((element) => {
    return typeof element === "number" && !Number.isNaN(element);
  });

  return result;
}

// Check own property

function password(obj) {
  // Check if obj has all the property or not

  if (
    !obj.hasOwnProperty("name") ||
    !obj.hasOwnProperty("birthYear") ||
    !obj.hasOwnProperty("siteName")
  ) {
    return "Invalid";
  }

  // Check name and site name string or not

  if (
    typeof obj.name !== "string" ||
    typeof obj.siteName !== "string" ||
    obj.siteName.length === 0
  ) {
    return "Invalid";
  }

  // Check birthYear is a valid 4-digit integer

  const birthYear = obj.birthYear;

  if (
    typeof birthYear !== "number" ||
    isNaN(birthYear) ||
    !Number.isInteger(birthYear) ||
    String(birthYear).length !== 4
  ) {
    return "Invalid";
  }

  // Formatted the site name: capitalize first letter, lowercase the rest

  const formattedSiteName =
    obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1).toLowerCase();

  // Generate the password string

  return `${formattedSiteName}#${obj.name}@${obj.birthYear}`;
}

console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));
