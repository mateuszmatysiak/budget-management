/** @jsxRuntime classic */
/** @jsx jsx */
import styled from "@emotion/styled";

const EmptyState = styled("div")`
  padding: 16px 8px;
  font-size: 14px;
  font-weight: 300;
  color: ${({ theme }) => theme.color.primary};
  text-align: center;
`;

export { EmptyState };
