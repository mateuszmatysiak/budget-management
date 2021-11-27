import styled from "@emotion/styled";
import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import { FullPageError } from "../components/Error";
import { FullPageLoader } from "../components/Loader";
import { useApi } from "../hooks/useApi";
import { useMedia } from "../hooks/useMedia";
import * as mq from "../styles/media-query";
import { IStatistics } from "../types/statistics";
import {
  getCategoryData,
  getProductsAndShoppingData,
  getTodayWeekMonthData,
  getWeekdaysData,
  mobileWeekdays,
  options,
  weekdays,
} from "../utils/chart";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  width: 100%;
  padding: 36px 96px;
  color: ${({ theme }) => theme.color.primary};

  ${mq.laptop} {
    padding: 82px 36px 36px 36px;
  }

  ${mq.mobile} {
    display: flex;
    flex-direction: column;
    padding: 64px 12px 12px 12px;
  }
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
  const { mobile } = useMedia();

  const { data: statistics, error } = useApi<IStatistics>("statistics");

  if (error) return <FullPageError error={error} />;

  if (!statistics) return <FullPageLoader />;

  return (
    <StyledWrapper>
      <StyledChartContainer>
        <StyledChartHeader>
          Wydatki dzisiejsze, tygodniowe, miesięczne
        </StyledChartHeader>
        <StyledChartContent>
          <Bar
            data={getTodayWeekMonthData({
              data: statistics.todayWeekMonth,
              barThickness: mobile ? 50 : 75,
            })}
            options={options}
          />
        </StyledChartContent>
      </StyledChartContainer>

      <StyledChartContainer>
        <StyledChartHeader>Wydatki w każdym dniu tygodnia</StyledChartHeader>
        <StyledChartContent>
          <Bar
            data={getWeekdaysData({
              data: statistics.allWeekdays,
              labels: mobile ? mobileWeekdays : weekdays,
              barThickness: mobile ? 25 : 35,
            })}
            options={options}
          />
        </StyledChartContent>
      </StyledChartContainer>

      <StyledChartContainer>
        <StyledChartHeader>Wydatki dla kategorii</StyledChartHeader>
        <StyledChartContent>
          <Bar
            data={getCategoryData({
              data: statistics.categories,
              barThickness: mobile ? 50 : 75,
            })}
            options={options}
          />
        </StyledChartContent>
      </StyledChartContainer>

      <StyledChartContainer>
        <StyledChartHeader>Utworzone produkty oraz zakupy</StyledChartHeader>
        <StyledChartContent>
          <Pie
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
