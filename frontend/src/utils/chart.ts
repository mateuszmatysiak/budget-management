import type { ChartProps } from "react-chartjs-2";

interface CustomChartProps {
  data: number[];
  labels?: string[];
  barThickness: number;
}

const getTodayWeekMonthData = ({
  data,
  barThickness,
}: CustomChartProps): ChartProps<"bar">["data"] => ({
  labels: ["Dzisiaj", "Tydzień", "Miesiąc"],
  datasets: [
    {
      data,
      label: "Wydatki w złotówkach",
      barThickness,
      hoverBackgroundColor: [
        "rgba(255, 99, 133, 0.4)",
        "rgba(54, 163, 235, 0.4)",
        "rgba(50, 160, 130, 0.4)",
      ],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(50, 160, 130, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(50, 160, 130, 1)",
      ],
      borderWidth: 1,
    },
  ],
});

const getWeekdaysData = ({
  data,
  labels,
  barThickness,
}: CustomChartProps): ChartProps<"bar">["data"] => ({
  labels,
  datasets: [
    {
      data,
      label: "Wydatki w złotówkach",
      barThickness,
      hoverBackgroundColor: [
        "rgba(255, 99, 133, 0.4)",
        "rgba(54, 163, 235, 0.4)",
        "rgba(255, 207, 86, 0.4)",
        "rgba(255, 99, 133, 0.4)",
        "rgba(54, 163, 235, 0.4)",
        "rgba(255, 207, 86, 0.4)",
        "rgba(255, 207, 86, 0.4)",
      ],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
});

const getCategoryData = ({
  data,
  barThickness,
}: CustomChartProps): ChartProps<"bar">["data"] => ({
  labels: ["Gospodarcze", "Elektroniczne", "Domowe"],
  datasets: [
    {
      data,
      label: "Wydatki w złotówkach",
      barThickness,
      hoverBackgroundColor: [
        "rgba(20, 25, 255, 0.4)",
        "rgba(20, 255, 25, 0.4)",
        "rgba(255, 207, 86, 0.4)",
      ],
      backgroundColor: [
        "rgba(20, 125, 255, 0.2)",
        "rgba(20, 255, 25, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(20, 125, 255, 1)",
        "rgba(20, 255, 25, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
});

const getProductsAndShoppingData = (
  data: number[]
): ChartProps<"doughnut">["data"] => ({
  labels: ["Produkty", "Zakupy"],
  datasets: [
    {
      data,
      label: "Wydatki w złotówkach",
      hoverBackgroundColor: [
        "rgba(255, 99, 133, 0.7)",
        "rgba(54, 163, 235, 0.7)",
      ],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
  ],
});

const options: ChartProps<"bar">["options"] = {
  indexAxis: "x",
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const weekdays = [
  "Poniedziałek",
  "Wtorek",
  "Środa",
  "Czwartek",
  "Piątek",
  "Sobota",
  "Niedziela",
];
const mobileWeekdays = ["Pn", "Wt", "Śr", "Czw", "Pt", "Sb", "Ndz"];

export {
  getTodayWeekMonthData,
  getWeekdaysData,
  getCategoryData,
  getProductsAndShoppingData,
  options,
  weekdays,
  mobileWeekdays,
};
