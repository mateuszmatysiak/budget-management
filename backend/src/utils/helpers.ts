import { CreateShoppingDto } from "src/shopping/dto/create-shopping.dto";

function sumProductsOfShopping(arr: CreateShoppingDto[]) {
  return arr
    .flatMap((shoppingItem) => shoppingItem.products)
    .reduce((sum, product) => sum + parseFloat(product.price), 0);
}

function sumProductsByCategory(arr: CreateShoppingDto[], category: string) {
  const products = arr.flatMap((shoppingItem) => shoppingItem.products);
  return products
    .filter((product) => product.category === category)
    .reduce((sum, product) => sum + parseFloat(product.price), 0);
}

function formatReportData(shopping: CreateShoppingDto[]) {
  return shopping.flatMap((shoppingItem) =>
    shoppingItem.products.map((item) => ({
      ...item,
      shoppingName: shoppingItem.name,
    }))
  );
}

export { sumProductsOfShopping, sumProductsByCategory, formatReportData };
