import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  border-radius: 1.6rem;
  background-COLOR: rgba(255, 133, 155, 0.05);
  padding: 3.2rem;
  height: 22.2rem;
  margin-bottom: 2.4rem;
  border: 0;

  > h1 {
    flex: 1;
    text-align: left;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_WHITE};
  }

  > p {
    color: #999591;
    text-align: justify;
    font-family: "Roboto", sans-serif;
    display: -webkit-box;          /* Define o elemento como uma caixa flexível */
    -webkit-line-clamp: 2;        /* Limita o número de linhas exibidas */
    -webkit-box-orient: vertical; /* Define a orientação do texto como vertical */
    overflow: hidden;             /* Esconde o texto que ultrapassar o limite */
    text-overflow: ellipsis;      /* Adiciona "..." ao final do texto truncado */
  }

  > div {
    text-align: left;
    margin: .8rem 0 1.5rem;
    svg {
      color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR_PINK};
    }
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 1.6rem;

    span {
      background-color: ${({ theme }) => theme.COLORS.BUTTON_TEXT};
    }
  }
`;