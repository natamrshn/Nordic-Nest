const BASE_URL = 'http://ec2-16-16-187-41.eu-north-1.compute.amazonaws.com/';


async function getProductById(id) {
    const response = await fetch(`/products/${id}`);
    return response.json();
}

// PUT /products/{id} - Update an existing product
async function updateProduct(id, productData) {
    const response = await fetch(`/products/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
    });
    return response.json();
}

// DELETE /products/{id} - Delete a product
async function deleteProduct(id) {
    const response = await fetch(`/products/${id}`, {
        method: 'DELETE'
    });
    return response.ok;
}

// POST /products - Create a new product
async function createProduct(productData) {
    const response = await fetch(`/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
    });
    return response.json();
}

// GET /products/search - Search products with advanced filtering
export async function searchProducts(queryParams) {
    const queryString = new URLSearchParams(queryParams).toString();
    const response = await fetch(`${BASE_URL}products/search?${queryString}`);

    if (!response.ok) {
        throw new Error(`Ошибка запроса: ${response.status}`);
    }

    const data = await response.json();
    return data.products.content; 
}

