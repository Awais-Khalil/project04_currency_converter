#! /usr/bin/env node
import ReadLine  from "readline";
// Define the exchange rates as constants
const USD_TO_EUR = 0.85;
const USD_TO_GBP = 0.73;
const USD_TO_CAD = 1.25;

// Get the user's input
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Enter the amount of USD you want to convert: ', (amountUSD: string) => {
  readline.question('Enter the currency you want to convert to (EUR, GBP, or CAD): ', (targetCurrency: string) => {
    // Convert the amount of USD to the target currency based on the user's input
    let amountTargetCurrency: number;
    if (targetCurrency === 'EUR') {
      amountTargetCurrency = parseFloat(amountUSD) * USD_TO_EUR;
    } else if (targetCurrency === 'GBP') {
      amountTargetCurrency = parseFloat(amountUSD) * USD_TO_GBP;
    } else if (targetCurrency === 'CAD') {
      amountTargetCurrency = parseFloat(amountUSD) * USD_TO_CAD;
    } else {
      console.log('Invalid currency.');
      readline.close();
      return;
    }

    // Display the result to the user
    console.log(`${amountUSD} USD is equivalent to ${amountTargetCurrency.toFixed(2)} ${targetCurrency}.`);

    // Close the readline interface
    readline.close();
  });
});
