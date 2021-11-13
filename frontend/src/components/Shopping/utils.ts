import { formatDistance } from "date-fns";
import { pl } from "date-fns/locale";
import { IShopping } from "../../types/shopping";

export const formatShoppingData = ({ products, ...data }: IShopping) => {
  return {
    ...data,
    products: products.map(({ id }) => ({
      id,
    })),
  };
};

export const dateFormatDistance = (date: string) =>
  formatDistance(new Date(date), new Date(), {
    addSuffix: true,
    locale: pl,
  });
