import styled from 'styled-components';

export const Container = styled.textarea`
  width: 100%;
  height:27.4rem;

  background-color: ${({ theme }) => theme.COLORS.INPUT_BACKGROUND};
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR_WHITE};

  border: none;
  resize: none;

  margin-bottom: .8rem;
  border-radius: 1rem;
  padding: 1.6rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.PLACEHOLDER_TEXT_GRAY};
  }
`;