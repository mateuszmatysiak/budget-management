import { IDay } from "../../types/day";
import { IShopping } from "../../types/shopping";

const formatShoppingData = (shopping?: IShopping[]) =>
  shopping?.map((shoppingItem) => ({
    ...shoppingItem,
    createdAt: new Date(shoppingItem.createdAt ?? "").toLocaleDateString(),
  }));

const getEventsForDay = (shopping: IShopping[] = [], day: IDay) => {
  const events = [];
  for (const shoppingItem of shopping) {
    if (day.date === shoppingItem.createdAt) {
      events.push(shoppingItem);
    }
  }
  return events;
};

export { formatShoppingData, getEventsForDay };
