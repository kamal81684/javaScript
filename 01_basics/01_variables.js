const accountId = 12345
let accountMail = "kamal@gmail.com"
var accountPassword = "excuseme"
accountCity = "jaipur"

let accountState;  //it will output undefind if we doesned decalre somthin

// accountId = 2;  //const chnages not allowed

accountMail = "kumari@gmail.com" //can update

accountPassword = "oye hoye" //can update

accountCity = "idkidk" //can update


console.log(accountId);
console.log(accountMail);
console.log(accountPassword);
console.log(accountCity);

/*
    prefer not to use var because of block scope or function scope scope = = { }
*/

//this is hectic to write log again and again so use table

console.table([accountId, accountMail, accountPassword, accountCity, accountState])



