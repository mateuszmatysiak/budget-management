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

function padDate(date: string | Date) {
  const dt = typeof date === "string" ? new Date(date) : date;
  const [year, month, day] = formatDate(dt).split("-");

  const d = day.length === 1 ? `0${day}` : day;
  const m = month.length === 1 ? `0${month}` : month;

  return `${year}-${m}-${d}`;
}

function getCurrentDate() {
  const date = new Date();

  return formatDate(date);
}

function formatDate(date: Date) {
  return date.toLocaleDateString().split(".").reverse().join("-");
}

export {
  getAllWeekDateDays,
  getCurrentMonth,
  getCurrentDate,
  formatDate,
  padDate,
};
