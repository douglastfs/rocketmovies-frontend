import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
  "header"
  "content";

  > main {
    grid-area: content;
    padding: 2.4rem 0 4rem;
  }
`;

export const Content = styled.div`
  max-width: 116rem;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;


  #fixed-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > h1 {
      font-weight: 400;
    }

    > a {
      display: flex;
      width: 20.7rem;
    }

  }

  #catalog {
    height: 60rem;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR_PINK} transparent;
  }
`;

export const NewNote = styled(Link)`
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
  border-radius: 1rem;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`
