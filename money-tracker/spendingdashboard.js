// Expense Data
const expenses = [
    { category: "Food", amount: 250 },
    { category: "Transport", amount: 120 },
    { category: "Shopping", amount: 450 },
    { category: "Bills", amount: 300 },
    { category: "Entertainment", amount: 180 },
    { category: "Food", amount: 150 },
    { category: "Transport", amount: 100 }
];

// Calculate Total Spending
function getTotalSpending() {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
}

// Calculate Spending by Category
function getCategoryWiseSpending() {
    let categoryData = {};

    expenses.forEach(expense => {
        if (categoryData[expense.category]) {
            categoryData[expense.category] += expense.amount;
        } else {
            categoryData[expense.category] = expense.amount;
        }
    });

    return categoryData;
}

// Find Highest Expense
function getHighestExpense() {
    return expenses.reduce((max, expense) =>
        expense.amount > max.amount ? expense : max
    );
}

// Display Dashboard
function updateDashboard() {
    document.getElementById("totalSpending").innerText =
        "$" + getTotalSpending();

    const highest = getHighestExpense();
    document.getElementById("highestExpense").innerText =
        highest.category + " - $" + highest.amount;

    const categoryList = document.getElementById("categoryList");
    categoryList.innerHTML = "";

    const categoryData = getCategoryWiseSpending();

    for (let category in categoryData) {
        const li = document.createElement("li");
        li.textContent = `${category}: $${categoryData[category]}`;
        categoryList.appendChild(li);
    }
}

// Add Expense
function addExpense(category, amount) {
    expenses.push({
        category: category,
        amount: Number(amount)
    });

    updateDashboard();
}

// Run Dashboard
updateDashboard();