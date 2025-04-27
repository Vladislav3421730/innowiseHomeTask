const axios = require('axios');

const API_URL = 'https://fakestoreapi.com/products';

function validateProduct(product) {
    if (product.title == null) {
        throw new Error('title must be defined');
    }
    if (product.title.trim() === '') {
        throw new Error('title must not be empty');
    }
    if (product.price == null) {
        throw new Error('price must be defined');
    }
    if (product.price < 0) {
        throw new Error('price must not be negative');
    }
    if (!product.rating || typeof product.rating.rate !== 'number') {
        throw new Error('rating.rate must be defined and a number');
    }
    if (product.rating.rate > 5) {
        throw new Error('rating.rate must not exceed 5');
    }
}

describe('FakeStore API Product Data Tests', () => {
    let response;
    let products;

    jest.setTimeout(10000);
    beforeAll(async () => {
        response = await axios.get(API_URL);
        products = response.data;
    });

    test('server should respond with status code 200', () => {
        expect(response.status).toBe(200);
    });

    test('response should contain an array of products', () => {
        expect(Array.isArray(products)).toBe(true);
        expect(products.length).toBeGreaterThan(0);
    });

    test('each product should pass validation', () => {
        const defectiveProducts = [];

        products.forEach(product => {
            try {
                validateProduct(product);
            } catch (error) {
                defectiveProducts.push({ id: product.id, error: error.message });
            }
        });

        if (defectiveProducts.length > 0) {
            console.log('Defective products:', defectiveProducts);
        }

        expect(defectiveProducts.length).toBe(0);
    });
});
