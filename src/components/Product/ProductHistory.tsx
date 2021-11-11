/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

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
            letter-spacing: 0.5px;
            font-weight: 300;
          `}
        >
          Historia produktu
        </div>
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

            > span:nth-of-type(n + 1) {
              border-right: 1px solid rgba(229, 229, 229, 0.2);
            }

            > span:not(:nth-last-of-type(1), :nth-last-of-type(2)) {
              border-bottom: 1px solid rgba(229, 229, 229, 0.2);
            }
          `}
        >
          <span>{new Date().toLocaleString()}</span>
          <span>15.29</span>
        </div>
      </div>
    </div>
  );
};

export { ProductHistory };