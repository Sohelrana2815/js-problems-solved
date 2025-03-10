// No.1 solution
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

// console.log(calculateMoney(0));
