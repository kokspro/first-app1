let wPrice = 56;
let oPrice = 56;
let currentFundsW = 7000;
let currentFundsO = 7000;
let indexFunds = 7000;
let indexPercent = 0.1;
let wDiv = 0.87
let oDiv = 0.26
let wShares = 0;
let oShares = 0;
let oPayout = 0;
let wPayout = 0;
let wDivTotal = 0;
let oDivTotal = 0;
index(360);
oTime(360);
wTime(360);




function oTime(months) {
    for (let i = 0; i < months; i++) {

        oPayout = 0;
        oShares += Math.floor(currentFundsO / oPrice);
        currentFundsO = currentFundsO % oPrice;
        oPayout = oDiv * oShares;
        oDivTotal += oPayout;
        currentFundsO += oPayout;
    }
    console.log("O INFORMATION");
    console.log("O dividend: " + oPayout.toFixed(2));
    console.log("O Total Div to Date: " + oDivTotal.toFixed(2));
    console.log("O Shares: " + oShares);
    console.log("Cash Balance: " + currentFundsO.toFixed(2));
    console.log("Current Value: " + (currentFundsO + (oPrice * oShares)));
    console.log();
}

function wTime(months) {
    wPayout = 0;
    loops = Math.floor(months / 3);


    for (let i = 0; i < loops; i++) {

        wShares += Math.floor(currentFundsW / wPrice);
        currentFundsW = currentFundsW % wPrice;
        wPayout = wDiv * wShares;
        wDivTotal += wPayout;
        currentFundsW += wPayout;
    }

    console.log("WPC INFORMATION");
    console.log("WPC dividend: " + wPayout.toFixed(2));
    console.log("WPC Total Div to Date: " + wDivTotal.toFixed(2));
    console.log("WPC Shares: " + wShares);
    console.log("Cash Balance: " + currentFundsW.toFixed(2));
    console.log("Current Value: " + (currentFundsW + (wPrice * wShares)));
    console.log();

    

}



function index(months) {

    loops = months / 12;
    for (let i = 0; i < loops; i++) {

        indexFunds += indexFunds * indexPercent;
    }

    console.log("Index Information");
    console.log("Stock Value: " + indexFunds.toFixed(2));
    console.log();
}



