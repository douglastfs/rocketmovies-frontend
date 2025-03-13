import styled from 'styled-components';

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
    padding: 4rem 0;
  }
`;

export const Content = styled.div`
  max-width: 116rem;
  max-height: 58rem;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  overflow-y: auto;

  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR_PINK} transparent;

  button:not(:first-child) {
    background-color: ${({ theme }) => theme.COLORS.MARKERS_BACKGROUND};
    color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR_PINK};
    width: 30rem;
  }

  > a {
    align-self: start;
  }

  > div:first-child {
    display: flex;
    flex-direction:column;
    align-items: start;
    gap: 2.4rem;

    img {
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
      object-fit: cover;
    }

    #title-rating {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    #rating {
      display: flex;
      gap: 1rem;

      svg {
        color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR_PINK};
      }
    }

    #notes-info {
      display: flex;
      gap: .8rem;
      align-items: center;
      font-family: "Roboto", sans-serif;

      svg {
        color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR_PINK};
      }
    }
  }

  #third-section p {
    text-align: justify;
  }
`;


