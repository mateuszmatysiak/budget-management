/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
// import { EmptyState } from "../EmptyState";

const ProductHistory = () => {
  return (
    <div
      css={css`
        padding: 32px 112px;
      `}
    >
      <div
        css={css`
          background-color: #232323;
          border-radius: 5px;
          border: 1px solid rgba(229, 229, 229, 0.2);
          color: rgba(245, 245, 245, 1);
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px;
            border-bottom: 1px solid rgba(229, 229, 229, 0.15);
            font-size: 14px;
            letter-spacing: 0.5px;
            font-weight: 300;
          `}
        >
          Historia produktu
        </div>
        {/* <EmptyState>Brak historii produktu</EmptyState> */}
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(2, 1fr);

            > span {
              padding: 12px 16px;
              border-bottom: 1px solid rgba(229, 229, 229, 0.2);
              background-color: rgba(229, 229, 229, 0.1);
              letter-spacing: 0.5px;
              font-size: 14px;
              font-weight: 300;
            }

            > span:nth-of-type(1) {
              border-right: 1px solid rgba(229, 229, 229, 0.2);
            }
          `}
        >
          <span>Data</span>
          <span>Cena</span>
        </div>
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            overflow-y: scroll;
            max-height: 400px;

            > span {
              padding: 16px;
              font-size: 14px;
              font-weight: 300;
            }

            > span:nth-of-type(odd) {
              border-right: 1px solid rgba(229, 229, 229, 0.2);
            }

            > span:not(:nth-last-of-type(1), :nth-last-of-type(2)) {
              border-bottom: 1px solid rgba(229, 229, 229, 0.2);
            }
          `}
        >
          <span>13-11-2021</span>
          <span>6.01</span>
          <span>12-11-2021</span>
          <span>5.99</span>
          <span>03-11-2021</span>
          <span>5.81</span>
          <span>01-10-2021</span>
          <span>5.79</span>
          <span>09-09-2021</span>
          <span>5.51</span>
        </div>
      </div>
    </div>
  );
};

export { ProductHistory };
