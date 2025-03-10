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

// function deleteInvalids(input) {
//   // Check if the input is an array

//   if (!Array.isArray(input)) {
//     return "Invalid Array";
//   }

//   const result = input.filter((element) => {
//     return typeof element === "number" && !isNaN(element);
//   });
//   return result;
// }

// // console.log(
// //   deleteInvalids([
// //     123,
// //     { price: 12, address: "Dhaka" },
// //     null,
// //     undefined,
// //     "hello world!",
// //     1,
// //     2815,
// //   ])
// // );
// console.log(deleteInvalids({ num: [1, 2, 3] }));


