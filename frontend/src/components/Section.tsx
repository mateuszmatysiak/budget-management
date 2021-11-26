import styled from "@emotion/styled";
import * as mq from "../styles/media-query";

const Section = styled.section`
  flex: 2 2;
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor.primary};
  overflow-y: scroll;
  background-image: radial-gradient(rgba(38, 38, 38, 0.75) 1px, transparent 0);
  background-size: ${({ children }) => (!children ? "16px 16px" : 0)};

  ${mq.laptop} {
    padding-top: 49px;
  }
`;

export { Section };
