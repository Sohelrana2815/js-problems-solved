// // No.1 solution
// function calculateMoney(ticketSale) {
//   if (ticketSale < 0 || ticketSale === 0) {
//     return "Invalid Number";
//   }
//   const securityGuardExpense = 500;
//   const lunchExpense = 8 * 50;
//   const totalExpenses = securityGuardExpense + lunchExpense;
//   const ticketSalesRevenue = 120 * ticketSale;

//   const remainingMoney = ticketSalesRevenue - totalExpenses;

//   return remainingMoney;
// }

// // console.log(calculateMoney(0));

// // No.2 solution

// function checkName(name) {
//   if (typeof name !== "string" || name === "") {
//     return "Name should string.";
//   }
//   const goodNameCharacters = ["a", "e", "i", "o", "u", "w", "y"];

//   const lastCharacter =
//     name.length > 0 ? name[name.length - 1].toLocaleLowerCase() : "";

//   let isGoodName = false;

//   for (let i = 0; i < goodNameCharacters.length; i++) {
//     if (goodNameCharacters[i] === lastCharacter) {
//       isGoodName = true;
//       break;
//     }
//   }

//   if (isGoodName) {
//     return "GoodName";
//   } else {
//     return "Bad Name";
//   }
// }

// console.log(checkName(""));

// No.3 solution

// function deleteInvalids(arr) {
//   if (!Array.isArray(arr)) {
//     return "Invalid Array";
//   }

//   // Filter it

//   const result = arr.filter((element) => {
//     return typeof element === "number" && !Number.isNaN(element);
//   });

//   return result;
// }

