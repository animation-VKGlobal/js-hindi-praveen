const accountId = 144553;
let accountEmail = "praveen@gmail.com";
var accountPassword = "Praveen";
accountCity = "Delhi";
let accountState = true;

//accountId = 123456; // This will cause an error because accountId is a constant
accountEmail = "hc@hc.com"; // This is valid
accountPassword = "Hc@123"; // This is valid
accountCity = "Noida"; // This is valid
console.log(accountId);

/*
    Summary:
*/
console.table({ accountId, accountEmail, accountPassword, accountCity, accountState });
