import styled from "@emotion/styled";
import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { FullPageError } from "../components/Error";
import { FullPageLoader } from "../components/Loader";
import { useApi } from "../hooks/useApi";
import { IStatistics } from "../types/statistics";
import {
  getCategoryData,
  getProductsAndShoppingData,
  getTodayWeekMonthData,
  getWeekdaysData,
  options,
} from "../utils/chart";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  width: 100%;
  padding: 72px 96px;
  color: ${({ theme }) => theme.color.primary};
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
  padding: 16px;
`;

const StatisticsView = () => {
  const { data: statistics, error } = useApi<IStatistics>("statistics");

  if (!statistics) return <FullPageLoader />;

  if (error) return <FullPageError error={error} />;

  return (
    <StyledWrapper>
      <StyledChartContainer>
        <StyledChartHeader>
          Wydatki dzisiejsze, tygodniowe, miesięczne
        </StyledChartHeader>
        <StyledChartContent>
          <Bar
            data={getTodayWeekMonthData(statistics.todayWeekMonth)}
            options={options}
          />
        </StyledChartContent>
      </StyledChartContainer>

      <StyledChartContainer>
        <StyledChartHeader>Wydatki w każdym dniu tygodnia</StyledChartHeader>
        <StyledChartContent>
          <Bar
            data={getWeekdaysData(statistics.allWeekdays)}
            options={options}
          />
        </StyledChartContent>
      </StyledChartContainer>

      <StyledChartContainer>
        <StyledChartHeader>Wydatki dla kategorii</StyledChartHeader>
        <StyledChartContent>
          <Bar
            data={getCategoryData(statistics.categories)}
            options={options}
          />
        </StyledChartContent>
      </StyledChartContainer>

      <StyledChartContainer>
        <StyledChartHeader>Utworzone produkty oraz zakupy</StyledChartHeader>
        <StyledChartContent>
          <Doughnut
            data={getProductsAndShoppingData(statistics.productsAndShopping)}
            options={{
              plugins: {
                title: {
                  display: false,
                },
              },
              maintainAspectRatio: false,
            }}
          />
        </StyledChartContent>
      </StyledChartContainer>
    </StyledWrapper>
  );
};

export default StatisticsView;
