import { lastDayOfMonth, startOfMonth } from "date-fns";

function getAllWeekDateDays() {
  const date = new Date();

  const week: string[] = new Array();

  date.setDate(date.getDate() - date.getDay() + 1);
  for (let i = 0; i < 7; i++) {
    week.push(formatDate(new Date(date)));
    date.setDate(date.getDate() + 1);
  }
  return week;
}

function getCurrentMonth() {
  const date = new Date();

  const [year, month, day] = formatDate(startOfMonth(date)).split("-");
  const end = formatDate(lastDayOfMonth(date));

  return [`${year}-${month}-0${day}`, end];
}

function getCurrentDate() {
  const date = new Date();

  return formatDate(date);
}

function formatDate(date: Date) {
  return date.toLocaleDateString().split(".").reverse().join("-");
}

export { getAllWeekDateDays, getCurrentMonth, getCurrentDate, formatDate };
