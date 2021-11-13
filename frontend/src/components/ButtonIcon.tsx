import styled from "@emotion/styled";

const ButtonIcon = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: unset;
  border-radius: ${({ theme }) => theme.borderRadius.secondary};
  background-color: unset;
  cursor: pointer;
  z-index: 1;

  &:hover:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: ${({ theme }) => theme.borderRadius.secondary};
    background-color: ${({ theme }) => theme.color.iconHover};
    z-index: -1;
  }
`;

export { ButtonIcon };
