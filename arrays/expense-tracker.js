const account = {
    name: 'Ben Weppner',
    expenses: [],
    income: [],
    addExpense : function(description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function(description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function() {
        let totalExpenses = 0
        let totalIncome = 0
        this.expenses.forEach(function(expense) {
            totalExpenses += expense.amount
        })
        this.income.forEach(function(income) {
            totalIncome += income.amount
        })
        let accountBalance = totalIncome - totalExpenses
        return `${this.name} has a balance of $${accountBalance}: $${totalIncome} in income and $${totalExpenses} in expenses.`
    }
}

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2.5)
account.addIncome('Job', 2000)
console.log(account.getAccountSummary())

//Expense -> description, amount
//addExpense -> description, amount
//getAccountSummary - total up all expenses -> Ben Weppner has $1250 in expenses.

//add income array to account
//add income method -> description, amount
//tweak getAccountSummary
//Ben Weppner has a balance of $__, $__ in income, $__ in expenses







