/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import type { ChartProps } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

const barData1: ChartProps<"bar">["data"] = {
  labels: [
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota",
    "Niedziela",
  ],
  datasets: [
    {
      label: "Wydatki w złotówkach",
      data: [21, 33, 73, 5, 0, 250, 41],
      barThickness: 50,
      hoverBackgroundColor: [
        "rgba(255, 99, 133, 0.726)",
        "rgba(54, 163, 235, 0.712)",
        "rgba(255, 207, 86, 0.76)",
        "rgba(75, 192, 192, 0.781)",
        "rgba(153, 102, 255, 0.795)",
        "rgba(255, 160, 64, 0.753)",
        "rgba(64, 255, 175, 0.801)",
      ],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(64, 255, 175, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(140, 255, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const barOptions1: ChartProps<"bar">["options"] = {
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

const barData2: ChartProps<"bar">["data"] = {
  labels: ["Wrzesień", "Październik", "Listopad"],
  datasets: [
    {
      barThickness: 100,
      label: "Wydatki w złotówkach",
      data: [2315, 1905, 4980],
      hoverBackgroundColor: [
        "rgba(255, 99, 133, 0.726)",
        "rgba(54, 163, 235, 0.712)",
        "rgba(255, 207, 86, 0.76)",
      ],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const barOptions2: ChartProps<"bar">["options"] = {
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

const barData3: ChartProps<"bar">["data"] = {
  labels: ["Sobota"],
  datasets: [
    {
      barThickness: 150,
      label: "Wydatki w złotówkach",
      data: [250],
      hoverBackgroundColor: ["rgba(255, 160, 64, 0.753)"],
      backgroundColor: ["rgba(255, 159, 64, 0.2)"],
      borderColor: ["rgba(255, 159, 64, 1)"],
      borderWidth: 1,
    },
  ],
};

const barOptions3: ChartProps<"bar">["options"] = {
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

const barData4: ChartProps<"bar">["data"] = {
  labels: ["2019", "2020", "2021"],
  datasets: [
    {
      barThickness: 100,
      label: "Wydatki w złotówkach",
      data: [230301, 390500, 89000],
      hoverBackgroundColor: [
        "rgba(255, 99, 133, 0.726)",
        "rgba(54, 163, 235, 0.712)",
        "rgba(255, 207, 86, 0.76)",
      ],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const barOptions4: ChartProps<"bar">["options"] = {
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

const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  height: 100vh;
  width: 100%;
  padding: 72px 96px;
  color: ${({ theme }) => theme.color.primary};
  overflow-y: scroll;
`;

const StyledChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: ${({ theme }) => `1px solid ${theme.borderColor.secondary}`};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  background-color: rgba(35, 35, 35, 0.3);
`;

const StyledChartHeader = styled.div`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: ${({ theme }) => `1px solid ${theme.borderColor.secondary}`};
  padding: 16px;
  background-color: ${({ theme }) => theme.backgroundColor.secondary};
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.5px;
`;

const StyledChartContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 16px;
`;

const StatisticsView = () => {
  return (
    <StyledWrapper>
      <StyledChartContainer>
        <StyledChartHeader>Dzisiaj</StyledChartHeader>
        <StyledChartContent>
          <Bar data={barData3} options={barOptions3} />
        </StyledChartContent>
      </StyledChartContainer>

      <StyledChartContainer>
        <StyledChartHeader>Ostatni tydzień</StyledChartHeader>
        <StyledChartContent>
          <Bar data={barData1} options={barOptions1} />
        </StyledChartContent>
      </StyledChartContainer>

      <StyledChartContainer>
        <StyledChartHeader>Ostatnie trzy miesiące</StyledChartHeader>
        <StyledChartContent>
          <Bar data={barData2} options={barOptions2} />
        </StyledChartContent>
      </StyledChartContainer>

      <StyledChartContainer>
        <StyledChartHeader>Ostatnie trzy lata</StyledChartHeader>
        <StyledChartContent>
          <Bar data={barData4} options={barOptions4} />
        </StyledChartContent>
      </StyledChartContainer>
    </StyledWrapper>
  );
};

export default StatisticsView;
