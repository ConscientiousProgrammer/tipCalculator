const inputFirstValue = document.getElementById("billAmount");
const inputSecondValue = document.getElementById("tipPercentage");
const totalValue = document.getElementById("total");

function firstInput(inputFirstValue, inputSecondValue) {
    let percent = inputFirstValue / 100;
    let percentValue = percent * inputSecondValue;
    return percentValue;
};

function totalValue(percentValue) {
    return total.innerHTML += `<p>Total:${percentValue}</p>`
};
