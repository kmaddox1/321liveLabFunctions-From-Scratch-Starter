//function logHelloWorld() {
 // console.log("Hello World")
//}

//To trigger the function you need to call it by its name
//logHelloWorld()

//function logMessage(message) {
  //console.log( "Hello" + message)
//}
//logMessage( "Ianne" )
//logMessage( "Kim" )
//logMessage( "Rita")


// Need the price and the tax
function logTotalWithTax(price, salesTaxPercent) {
  let tax = price *(salesTaxPercent/100)
let total = price + tax 
console.log("your total is $" + total)
}

logTotalWithTax(100, 8.5)