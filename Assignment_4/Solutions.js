function calculateMoney(ticketSale) {
  if (ticketSale < 0) {
    return "Ticket sale count must me grater then zero";
  }
  const securityGuardExpenses = 500;

  const stuffLunchExpenses = 8 * 50;

  const totalExpenses = securityGuardExpenses + stuffLunchExpenses;

  const totalRevenueForTickets = ticketSale * 120;

  const remainingMoney = totalRevenueForTickets - totalExpenses;

  return remainingMoney;
}

console.log(calculateMoney(10));
