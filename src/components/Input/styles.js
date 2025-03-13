import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme}) => theme.COLORS.INPUT_BACKGROUND };
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR_WHITE };

  margin-bottom: .8rem;
  border-radius: 1rem;

  > input {
    height: 5.6rem;
    width: 100%;
    padding: 1.2rem;

    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_WHITE };
    background: transparent;
    border: 0;
    font-size: 1.4rem;

    /* Para manter o background do input quando é preenchido por auto-complete do navegador*/
    &:-webkit-autofill {
      background-color: ${ ({ theme }) => theme.COLORS.INPUT_BACKGROUND } !important;
      -webkit-box-shadow: 0 0 0px 1000px ${ ({ theme }) => theme.COLORS.INPUT_BACKGROUND } inset !important;
      -webkit-text-fill-color: ${ ({ theme }) => theme.COLORS.TEXT_COLOR_WHITE };
   }

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.PLACEHOLDER_TEXT_GRAY };
    }
  }


  > svg {
    margin-left: 1.6rem;
    color: ${({ theme }) => theme.COLORS.PLACEHOLDER_TEXT_GRAY };
  }
`;