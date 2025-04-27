# FakeStore API Product Data Validation Tests

This repository contains automated tests designed to validate the data provided by the FakeStore API. The tests check for missing or invalid data in product entries returned by the API. The goal is to ensure that each product contains the required attributes, and that the values are valid and consistent.

## Objectives:
1. **Verify Server Response**:
   - Ensure that the server responds with status code `200` when making a GET request to the API.
   
2. **Validate Product Attributes**:
   - Each product in the response must have:
     - A `title` (name) that is not empty.
     - A `price` that is not negative.
     - A `rating.rate` that is a number and does not exceed 5.

3. **Generate a List of Defective Products**:
   - Any product that does not meet the above criteria should be added to a list, and the reason for the defect should be displayed.

## Requirements
- **Node.js**: Ensure that you have Node.js installed. You can download it from [here](https://nodejs.org/).
- **Jest**: A testing framework to run the tests.

### Install Dependencies

To run the tests, follow these steps:

1. Clone or download the repository.
2. Navigate to the project directory in your terminal.
3. Install the dependencies:
```bash
npm install
```
4. Ensure you have Jest installed. If not, you can install it by running:
```bash
npm install --save-dev jest
```
5. Install axios for making HTTP requests:
```bash
npm install axios
```

## Test Implementation

The test suite fetches product data from the API and checks for the following conditions:

### 1. **Server Response Code**:
The test sends a GET request to the API (`https://fakestoreapi.com/products`) and verifies that the response has a status code of 200.

### 2. **Product Validation**:
Each product is validated using the `validateProduct` function. The product validation includes the following checks:
- The product must contain a `title` that is not empty.
- The product must contain a `price` that is not negative.
- The product must contain a `rating.rate` that is a number and does not exceed 5.

## Running the Tests

1. **Open your terminal** and navigate to the directory where your project is located.

2. **Run the tests with Jest**:
```bash
npm test
```

3. The tests will run and output the results in your terminal. If there are any defective products, they will be printed to the console with their associated error messages.

The test results will show whether the server responded with a status code of 200, and whether the product data met the validation criteria. Any defective products will be logged, including the validation errors.
