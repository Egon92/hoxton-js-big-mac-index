const usBigMacPrice = 5.65;


let swissBigMacPrice = 6.5;
let exRateFrancToUsd = 1.08;
let pppSwiss = usBigMacPrice/swissBigMacPrice;
let indexUsToSwiss = (exRateFrancToUsd-pppSwiss)/pppSwiss*100;
console.log("Switzerland has higher BMI. The Swiss franc is overvalued against the Usd by approximately of "+ indexUsToSwiss + " %");




let southKoreaBigMacPrice = 4600;
let exRateWonToUsd = 0.00085;
let pppKorea = usBigMacPrice/southKoreaBigMacPrice;
let indexUsToKorea = (exRateWonToUsd - pppKorea)/pppKorea*100;
console.log("The US have a higher BMI. The South Korean won is undervalued against the Usd by approximately " + indexUsToKorea +" %");




let norwayBigMacPrice = 57;
let exRateKroneToUsd = 0.115;
let pppNorway = usBigMacPrice/norwayBigMacPrice;
let indexUsToNorway = (exRateKroneToUsd - pppNorway)/pppNorway*100;
console.log("Norway has higher BMI. The Norwegian krone is overvalued against the Usd by approximately " + indexUsToNorway + " %");


let turkeyBigMacPrice = 19.99;
let exRateLiraToUsd = 0.09945;
let pppTurkey = usBigMacPrice/turkeyBigMacPrice;
let indexUsToTurkey = (exRateLiraToUsd - pppTurkey)/ pppTurkey*100;
console.log("The US have higher BMI. The Turkish lira is undervalued against the Usd by approximately " + indexUsToTurkey + " %")



let chileBigMacPrice = 2990; 
let exRatePesosToUsd = 0.00125;
let pppChile = usBigMacPrice/chileBigMacPrice;
let indexUsToChile = (exRatePesosToUsd-pppChile)/pppChile*100;
console.log("The US have higher BMI. The Chilean pesos is undervalued against the Usd by approximately " + indexUsToChile + " %");
