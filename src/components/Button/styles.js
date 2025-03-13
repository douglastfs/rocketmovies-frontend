import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR_PINK };
  color: ${({ theme }) => theme.COLORS.BUTTON_TEXT };

  height: 5.6rem;
  border: 0;
  padding: 0 1.6rem;
  margin-top: 1.6rem;
  border-radius: 1rem;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;