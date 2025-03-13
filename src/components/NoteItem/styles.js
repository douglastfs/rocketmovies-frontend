import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.INPUT_BACKGROUND };
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR_WHITE };

  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.PLACEHOLDER_TEXT_GRAY}` : "none" };

  margin-bottom: .8rem;
  border-radius: 1rem;
  padding-right: 1.6rem;

  > button {
    border: none;
    background: none;
    
    svg {
    color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR_PINK };
    font-size: 2.2rem;
    transition: .1s;
    }

    svg:hover {
      transform: scale(1.1);
    }
  }

  > input {
    height: 5.6rem;
    width: fit-content;

    padding: 1.2rem;
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.PLACEHOLDER_TEXT_GRAY };
    }
  }
`;