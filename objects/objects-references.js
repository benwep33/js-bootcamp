let myAccount = {
    name: 'Ben Weppner',
    expenses: 0,
    income: 0
}

let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount
    //console.log(account)
}

//addIncome
let addIncome = function(account, amount) {
    account.income = account.income + amount
}

//resetAccount
let resetAccount = function(account) {
    account.income = 0
    account.expenses = 0
}

//addExpense(myAccount, 2.50)
//console.log(myAccount)


//Challenge Area

//getAccountSummary
//Account for Ben has $900. $1000 in income. $100 in expenses

let getAccountSummary = function(account) {
    let total = account.income - account.expenses
    return `Account for ${account.name} has $${total}. $${account.income} in income and $${account.expenses} in expenses`
}



//addIncome
addIncome(myAccount, 2000)
//addExpense
addExpense(myAccount, 500)
//addExpense
addExpense(myAccount, 200)
//getAccountSummary
console.log(getAccountSummary(myAccount))
//resetAccount
resetAccount(myAccount)
//getAccountSummary
console.log(getAccountSummary(myAccount))



