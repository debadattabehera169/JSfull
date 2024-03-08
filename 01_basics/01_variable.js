const accountId = 144553
let accountEmail = "Dev@gmail.com"
var accountPassword = "12345"
acountCity = "Khurda"
let accountState;
// accountId = 2


accountEmail = "hc@hc.com"
accountPassword = "1234567"
acountCity = "BBsr"

/*
prefer not to use var becase of issue in block scope or function scope
*/

console.log(accountId);

console.table([accountEmail, accountId, accountPassword, acountCity, accountState])