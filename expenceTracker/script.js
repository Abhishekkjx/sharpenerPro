const expenseNameInput = document.getElementById("expenseName");
const expenseAmountInput = document.getElementById("expenseAmount");
const expenseDateInput = document.getElementById("expenseDate");
const addExpenseBtn = document.getElementById("addExpenseBtn");
const expenseList = document.getElementById("expenseList");

let expenses = [];

function renderExpenses() {
    expenseList.innerHTML = "";
    expenses.forEach((expense, index) => {
        const li = document.createElement("li");
        li.className =
            "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = `
            <div>
                <strong>${expense.name}</strong> <br>
                ₹${expense.amount} on ${expense.date}
            </div>
            <button class="btn btn-danger btn-sm delete-btn" data-index="${index}">Delete</button>
        `;
        expenseList.appendChild(li);
    });
}

function addExpense() {
    const name = expenseNameInput.value.trim();
    const amount = expenseAmountInput.value.trim();
    const date = expenseDateInput.value;

    if (!name || !amount || !date) {
        alert("Please fill out all fields!");
        return;
    }

    const newExpense = {
        name,
        amount: parseFloat(amount).toFixed(2),
        date,
    };

    expenses.push(newExpense);
    renderExpenses();

    expenseNameInput.value = "";
    expenseAmountInput.value = "";
    expenseDateInput.value = "";
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    renderExpenses();
}

addExpenseBtn.addEventListener("click", addExpense);
expenseList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
        const index = e.target.getAttribute("data-index");
        deleteExpense(index);
    }
});

renderExpenses();
