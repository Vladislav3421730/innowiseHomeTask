# Expense Calculator

This is a simple web-based expense calculator that allows users to track their expenses in various categories, add new expenses, and calculate total expenses, average daily expenses, and top 3 categories with the highest expenses.

## Features
- Display a table of existing expense categories and their amounts.
- Add new expense entries with category and amount.
- Calculate total expenses, average daily expenses (based on 30 days), and the top 3 expense categories.

## Instructions for Running

### Prerequisites
No installation required. This application runs directly in your browser. Simply follow the steps below:

1. **Download or Copy the Code**: 
   - Copy the code provided below into an HTML file, e.g., `expense_calculator.html`.

2. **Open the HTML File**:
   - Open the `expense_calculator.html` file in any modern web browser (Chrome, Firefox, Safari, etc.).

3. **Using the Expense Calculator**:
   - **Add a New Expense**:
     - Enter the category name (e.g., "Dining Out") in the "Category" input field.
     - Enter the amount (e.g., 200) in the "Amount ($)" input field.
     - Click the "Add" button to add the expense to the table.
   - **Calculate Total Expenses**:
     - Click the "Calculate" button to display:
       - Total Expenses
       - Average Daily Expense (calculated over a 30-day period)
       - Top 3 Expense Categories

### How the Calculation Works:
- **Total Expenses**: The sum of all entered expenses.
- **Average Daily Expense**: The total expenses divided by 30.
- **Top 3 Expenses**: The top 3 categories with the highest expense values, displayed in descending order.

## Example

### Existing Expenses:
| Category      | Amount ($) |
|---------------|------------|
| Groceries     | 15000      |
| Rent          | 40000      |
| Transportation| 5000       |
| Entertainment | 10000      |
| Communication | 2000       |
| Gym           | 3000       |

### Expected Results:
After clicking the **Calculate** button:
- **Total Expenses**: 87,000$
- **Average Daily Expense**: 2900$
- **Top 3 Expenses**: Rent (40,000$), Groceries (15,000$), Entertainment (10,000$)