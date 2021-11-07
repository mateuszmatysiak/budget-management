import styled from "@emotion/styled";

const Section = styled.section`
  flex: 2 2;
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundColor.primary};
  overflow-y: scroll;
  background-image: radial-gradient(rgba(38, 38, 38, 0.75) 1px, transparent 0);
  background-size: ${({ children }) => (!children ? "16px 16px" : 0)};
`;

export { Section };
