document.getElementById('btn-withdraw').addEventListener('click', function () {
    // Get new withdraw Amount
    const newWithdrawAmount = getInputValue('withdraw-input')

    // isNaN Validation
    if (isNaN(newWithdrawAmount)) {
        alert('PLEASE,Enter a valid Number!!')
        return;
    }
    // Get previous withdraw
    const previousWithdrawTotal = getAmountValue('withdraw-total')
    
    // Get previous balance total
    const previousBalanceTotal = getAmountValue('balance-total')

    // Alert for Validation
    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Tui Fokir tor account eh eto taka NAI!!')
        return;
    }
    // Get total withdraw
    const currentWithdraw = newWithdrawAmount + previousWithdrawTotal;
    // Set the value
    setElementValue('withdraw-total', currentWithdraw);

    // Update total balance
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setElementValue('balance-total', currentBalanceTotal)
})
