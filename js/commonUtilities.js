// Get input value
function getInputValue(inputId){
    const inputAmount = document.getElementById(inputId)
    const inputAmountString = inputAmount.value;
    const inputTotalAmount = parseFloat(inputAmountString)
    inputAmount.value = '';
    return inputTotalAmount;
}
// Get Display amount value
function getAmountValue(elementId){
    const totalAmount = document.getElementById(elementId)
    const totalAmountString = totalAmount.innerText;
    const totalAmountValue = parseFloat(totalAmountString)
    return totalAmountValue;
}

// Set input value
function setElementValue(elementId,newValue){
    const elementValue =document.getElementById(elementId)
    elementValue.innerText = newValue;
}