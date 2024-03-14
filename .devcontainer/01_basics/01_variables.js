const accountId=1234
let accountEmail="Pb@gmail.com"
var accountPassword="1234"
accountCity="Pune"
let accountState;//value will be default and set undefined

/*avoid using var 
because of issue in block and functional scope


*/

//accountId=2                                           const variable cannot be changed 
//console.log(accountId)    
accountEmail="Bp123@gmail.com"
accountPassword="1234556"
accountCity="Pune"

console.table([accountEmail,accountPassword,accountCity,accountState])
