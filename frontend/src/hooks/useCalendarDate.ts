import { useEffect, useState } from "react";
import { IDay } from "../types/day";

export const useCalendarDate = (navId: number) => {
  const [dateDisplay, setDateDisplay] = useState("");
  const [days, setDays] = useState<IDay[]>([]);

  useEffect(() => {
    const weekdays = [
      "niedziela",
      "poniedziałek",
      "wtorek",
      "środa",
      "czwartek",
      "piątek",
      "sobota",
    ];
    const dt = new Date();

    if (navId !== 0) {
      dt.setMonth(new Date().getMonth() + navId);
    }

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 0);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dateString = firstDayOfMonth.toLocaleDateString("pl", {
      weekday: "long",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });

    setDateDisplay(`${dt.toLocaleDateString("pl", { month: "long" })} ${year}`);
    const paddingDays = weekdays.indexOf(dateString.split(", ")[0]);

    const daysArr: IDay[] = [];

    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
      const dayString = `${i - paddingDays}.${`${month}`.length === 1 ? "0" : ""}${month + 1}.${year}`;

      if (i > paddingDays) {
        daysArr.push({
          value: i - paddingDays,
          events: [],
          isCurrentDay: i - paddingDays === day && navId === 0,
          date: dayString,
        });
      } else {
        daysArr.push({
          value: "empty",
          isCurrentDay: false,
          events: [],
          date: "",
        });
      }
    }

    setDays(daysArr);
  }, [navId]);

  return {
    days,
    dateDisplay,
  };
};
