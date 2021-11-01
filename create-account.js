function createAccount(pin, amount=0) {
  let userPin = pin;
  let userAmt = amount;
  return {
    checkBalance(pin){
      return pin === userPin ? `$${userAmt}` : "Invalid PIN."
    },
    deposit(pin,depAmt){
      if (pin === userPin){
        userAmt += depAmt
        return `Succesfully deposited $${depAmt}. Current balance: $${userAmt}.`;
      } else {
        return "Invalid PIN."
      }
    },
    withdraw(pin, wdwlAmt) {
      if (pin !== userPin){
        return "Invalid PIN."
      } else if (pin === userPin && wdwlAmt < userAmt) {
        userAmt -= wdwlAmt;
        return `Succesfully withdrew $${wdwlAmt}. Current balance: $${userAmt}.`;
      } else {
        return "Withdrawal amount exceeds account balance. Transaction cancelled.";
      }
    },
    changePin(pin, newPin){
      if (pin === userPin){
        userPin = newPin;
        return "PIN successfully changed!";
      } else {
        return "Invalid PIN.";
      }
    }
  }
}

module.exports = { createAccount };
