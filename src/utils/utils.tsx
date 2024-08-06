export async function getProductData() {
  // Fetch data from the API
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export async function getProductDataById(id: number) {
  // Fetch data from the API
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export async function addProductToCart(product: any) {
  const productsKey = "cartProducts";

  // Retrieve the current products array from local storage
  const products = JSON.parse(localStorage.getItem(productsKey) || "[]");
  console.log(products);

  // Check if the product already exists in the array
  const existingProductIndex = products.findIndex(
    (p: any) => p.id === product.id
  );

  if (existingProductIndex > -1) {
    // If the product exists, increase its count
    products[existingProductIndex].count += 1;
  } else {
    // If the product doesn't exist, add it with a count of 1
    product.count = 1;
    products.push(product);
  }

  // Save the updated products array back to local storage
  localStorage.setItem(productsKey, JSON.stringify(products));
}

export function getCartProducts() {
  const productsKey = "cartProducts";

  const products = JSON.parse(localStorage.getItem(productsKey) || "[]");
  console.log("get==",products)
  return products;
}
