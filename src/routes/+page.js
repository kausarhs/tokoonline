

export async function load({ fetch }) {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return {
        posts: data
    };
}