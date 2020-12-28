var btSelector = document.querySelector("#bt");
var costPriceSelector = document.querySelector("#costPrice");
var sellingPriceSelector = document.querySelector("#sellingPrice");
var quantitySelector = document.querySelector("#quantity");
var outputSelector = document.querySelector("#profitOrLoss");


function profitOrLoss() {
    var quantity = Number(quantitySelector.value);
    var sellingPrice = Number(sellingPriceSelector.value);
    var costPrice = Number(costPriceSelector.value);
    if (costPrice> sellingPrice) {
        var lossPerStock = costPrice - sellingPrice;
        var loss = lossPerStock * quantity;
        outputSelector.innerText = "Loss " + loss;
        outputSelector.style.color = "Red";
    } else if (costPrice < sellingPrice) {
        var profitPerStock = sellingPrice - costPrice;
        var profit = profitPerStock * quantity;
        outputSelector.innerText = "Profit " + profit;
        outputSelector.style.color = "Green";
    } else {
        outputSelector.innerText = "Neither Profit Nor Loss";
    }
    
}

function click() {
    console.log(costPriceSelector.value, sellingPriceSelector.value, quantitySelector.value);
    profitOrLoss();
    
}

btSelector.addEventListener("click",  profitOrLoss);