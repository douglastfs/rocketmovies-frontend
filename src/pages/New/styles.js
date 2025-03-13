import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
  "header"
  "content";

  main {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 116rem;
    grid-area: content;
    padding: 0 1.4rem;
    margin: 2.4rem auto;
  }
  
  `;

export const Form = styled.form`
  overflow-y: auto;
  height: 70rem;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR_PINK} transparent;
  padding: 0 1rem 0 0;

  

  > h1 {
    margin: 0 0 4rem;
  }

  #title-rating {
    display: flex;
    gap: 4rem;
  }

  textarea {
    margin: 4rem 0;
  }

  #markers {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 0 .8rem;
    margin: 2.4rem 0 4rem;
    padding: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.MARKERS_BACKGROUND};
    border-radius: 1.6rem;
  }
`;
