import { formatDistance } from "date-fns";
import { pl } from "date-fns/locale";
import { IProduct } from "../../types/product";
import { IShopping, IShoppingProduct } from "../../types/shopping";

function isShoppingProduct(object: any): object is IShoppingProduct {
  return "productId" in object;
}

const formatAddShoppingData = ({ products, ...data }: IShopping) => {
  return {
    ...data,
    products: products.map(({ id, name, price, category, type }) => ({
      name,
      price,
      category,
      type,
      productId: id,
    })),
  };
};

const formatEditShoppingData = ({ products, ...data }: IShopping) => {
  return {
    ...data,
    products: products.map((item) => {
      if (!isShoppingProduct(item)) {
        const { id, name, price, category, type } = item;

        return {
          name,
          price,
          category,
          type,
          productId: id,
        };
      } else
        return {
          id: item.id,
        };
    }),
  };
};

const formatShoppingProducts = (
  products: IProduct[] = [],
  shoppingItem: IShopping
) => {
  return products.map(
    (product) =>
      shoppingItem.products.find((item) => {
        if (isShoppingProduct(item)) return item.productId === product.id;
      }) || product
  );
};

const dateFormatDistance = (date: string) =>
  formatDistance(new Date(date), new Date(), {
    addSuffix: true,
    locale: pl,
  });

export {
  formatAddShoppingData,
  formatEditShoppingData,
  formatShoppingProducts,
  isShoppingProduct,
  dateFormatDistance,
};
