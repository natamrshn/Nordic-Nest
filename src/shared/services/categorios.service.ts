const BASE_URL = 'http://ec2-16-16-187-41.eu-north-1.compute.amazonaws.com/categories';




async function getCategoryById(id) {
    const response = await fetch(`${BASE_URL}/${id}`);
    return response.json();
}


async function updateCategory(id, data) {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return response.json();
}


async function deleteCategory(id) {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    });
    return response.ok;
}


// async function getAllCategories() {
//     const response = await fetch(BASE_URL);
//     return response.json();
// }
export async function getAllCategories() {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data.content ?? []; // Повертаємо тільки масив або порожній масив у разі помилки
    } catch (error) {
        console.error("Failed to fetch categories:", error);
        return [];
    }
}


async function createCategory(data) {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return response.json();
}


async function getCategoriesByType(type) {
    const response = await fetch(`${BASE_URL}/type?type=${type}`);
    return response.json();
}


async function getCategoryByTitle(title) {
    const response = await fetch(`${BASE_URL}/title?title=${title}`);
    return response.json();
}
