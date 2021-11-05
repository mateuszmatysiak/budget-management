import styled from "@emotion/styled";

const ButtonIcon = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: unset;
  border: unset;
  cursor: pointer;

  &:hover:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
`;

export { ButtonIcon };
