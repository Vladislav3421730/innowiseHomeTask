# Sales Data Analysis for Online Store

## Overview

This document describes SQL queries used to analyze sales data for an online store. The analysis focuses on calculating the total sales for March 2024, identifying the top-spending customer, and calculating the average order value for the last three months.

## Database Schema

The `orders` table structure includes the following columns:

- `id` (INTEGER PRIMARY KEY) – Unique identifier for each order.
- `customer` (TEXT) – Name of the customer who made the purchase.
- `amount` (REAL) – The amount spent on the order.
- `order_date` (DATE) – The date when the order was made.

### Table Creation and Insertion Script

```sql
CREATE TABLE orders (
    id INTEGER PRIMARY KEY,
    customer TEXT,
    amount REAL,
    order_date DATE
);

INSERT INTO orders (customer, amount, order_date) VALUES
('Alice', 5000, '2024-03-01'),
('Bob', 8000, '2024-03-05'),
('Alice', 3000, '2024-03-15'),
('Charlie', 7000, '2024-02-20'),
('Alice', 10000, '2024-02-28'),
('Bob', 4000, '2024-02-10'),
('Charlie', 9000, '2024-03-22'),
('Alice', 2000, '2024-03-30');
```

### 1. Total Sales for March 2024

To calculate the total sales for March 2024, we use the `SUM` function to add up the `amount` values for all orders placed in that month.

```sql
-- Total sales for March 2024
SELECT SUM(amount) AS total_sales_march
FROM orders
WHERE strftime('%Y-%m', order_date) = '2024-03';
```
**Expected Result:**
- Total sales for March: **27,000**

### 2. Top-Spending Customer

To find the customer who spent the most overall, we aggregate the amount values by customer, order them by total amount spent, and limit the results to 1.

```sql
-- Top-spending customer
SELECT customer, SUM(amount) AS total_spent
FROM orders
GROUP BY customer
ORDER BY total_spent DESC
LIMIT 1;
```
**Expected Result:**
- Top-spending customer: Alice (20,000)

### 3. Average Order Value for the Last Three Months

To calculate the average order value for the last three months (from January 1, 2024, to March 31, 2024), we divide the total sales by the number of orders during that period. We use the ROUND function to round the result to two decimal places.

```sql
-- Average order value for the last three months
SELECT ROUND(SUM(amount) * 1.0 / COUNT(*), 2) AS average_order_value
FROM orders
WHERE order_date BETWEEN '2024-01-01' AND '2024-03-31';
```
**Expected Result:**
- Average order value: 6,000

## Conclusion

The SQL queries provided calculate key sales metrics for an online store:

- **Total sales for March 2024**: 27,000
- **Top-spending customer**: Alice (20,000)
- **Average order value for the last three months**: 6,000

You can test these queris in https://sqliteonline.com/
These results can be used to track sales performance, identify top customers, and assess the average transaction size.

