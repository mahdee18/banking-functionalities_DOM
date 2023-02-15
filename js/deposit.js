// Get deposit amount and Update the total balance :)

document.getElementById('btn-deposit').addEventListener('click', function () {
    // Get input value
    const newDepositAmount = getInputValue('deposit-input')

    // Display the value
    const previousDepositAmount = getAmountValue('deposit-total')
    const currentDepositAmount = newDepositAmount + previousDepositAmount;
    // isNaN validation
    if (isNaN(newDepositAmount)) {
        alert('Please Enter a valid Number!!')
        return;
    }
    // Set the value
    setElementValue('deposit-total', currentDepositAmount)

    // Update total balance
    const previousTotalBalance = getAmountValue('balance-total')
    const currentBalanceTotal = newDepositAmount + previousTotalBalance;
    setElementValue('balance-total', currentBalanceTotal);
})