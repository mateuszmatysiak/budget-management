/** @jsxFrag React.Fragment */
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { CloseIcon } from "../../icons/close";
import { TaskIcon } from "../../icons/task";
import { IDay } from "../../types/day";
import { ButtonIcon } from "../ButtonIcon";
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "../Dialog";
import { EmptyState } from "../EmptyState";
import { Select } from "../Input";
import { ProductItem } from "../Product/ProductListItem";

interface CalendarEventDialogProps {
  days?: IDay[];
  calendarDayId: number | null;
  openCalendarDay: (calendarDayId: number | null) => void;
}

const StyledDialogHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CalendarEventDialog = (props: CalendarEventDialogProps) => {
  const { days, calendarDayId, openCalendarDay } = props ?? {};
  const day = days?.find((day) => day.value === calendarDayId);

  const [shoppingId, setShoppingId] = React.useState<number | undefined>();
  const products = day?.events.find(({ id }) => id === shoppingId)?.products;

  React.useEffect(() => {
    setShoppingId(day?.events[0]?.id);
  }, [day]);

  const hasEvents = !!day?.events.length;
  const shoppingAmount = products?.reduce(
    (acc, val) => acc + parseFloat(val.price),
    0
  );

  return (
    <Dialog
      ariaLabel="Dialog pozwalający na wyświetlenie eventu"
      isOpen={!!calendarDayId}
      onDismiss={() => openCalendarDay(null)}
      width="800px"
    >
      <DialogHeader>
        <StyledDialogHeaderWrapper>
          <span
            css={css`
              font-size: 18px;
            `}
          >
            Zbiór list zakupowych
          </span>
          <span
            css={css`
              font-size: 14px;
              margin-top: 8px;
            `}
          >
            Dzień {day?.date}
          </span>
        </StyledDialogHeaderWrapper>

        <ButtonIcon
          css={css`
            padding: 8px;
          `}
          onClick={() => openCalendarDay(null)}
        >
          <CloseIcon />
        </ButtonIcon>
      </DialogHeader>
      {hasEvents ? (
        <>
          <DialogContent
            css={css`
              padding: 0;
            `}
          >
            <div
              css={css`
                padding: 16px;
              `}
            >
              <Select
                id="event"
                name="event"
                onChange={(event) => setShoppingId(Number(event.target.value))}
                value={shoppingId}
                icon={<TaskIcon width="22px" height="22px" />}
                required
              >
                {day?.events?.map((event) => (
                  <option key={event.id} value={event.id}>
                    {event.name}
                  </option>
                ))}
              </Select>
            </div>
            <div
              css={css`
                display: flex;
                justify-content: space-between;
                padding: 16px;
                border-top: 1px solid rgba(229, 229, 229, 0.15);
              `}
            >
              <span>Nazwa</span>
              <span>Cena</span>
            </div>
            <div
              css={css`
                display: flex;
                flex-direction: column;
                padding: 16px;
                overflow-y: scroll;
                max-height: 400px;
                border-top: 1px solid rgba(229, 229, 229, 0.15);
                background-color: #232323;
              `}
            >
              {products?.length ? (
                products?.map((product) => (
                  <div
                    key={product.id}
                    css={css`
                      display: flex;

                      &:not(:last-of-type) {
                        margin-bottom: 16px;
                      }
                    `}
                  >
                    <ProductItem product={product} isCalendarList />
                  </div>
                ))
              ) : (
                <EmptyState>Brak produktów w tej liście zakupowej</EmptyState>
              )}
            </div>
          </DialogContent>
          <DialogFooter
            css={css`
              display: flex;
              justify-content: space-between;
              border-top: 1px solid rgba(229, 229, 229, 0.15);
              padding: 16px;
            `}
          >
            <span>Podsumowanie</span>
            <span>{shoppingAmount} zł</span>
          </DialogFooter>
        </>
      ) : (
        <EmptyState
          css={css`
            padding: 24px;
          `}
        >
          Brak utworzonych list zakupowych w tym dniu
        </EmptyState>
      )}
    </Dialog>
  );
};

export { CalendarEventDialog };
