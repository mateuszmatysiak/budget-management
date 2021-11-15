import { IShopping } from "./shopping";

export interface IDay {
  value: number | "empty";
  isCurrentDay: boolean;
  date: string;
  events: IShopping[];
}
