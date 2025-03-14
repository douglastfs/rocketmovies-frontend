import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;


  > header {
    width: 100%;
    height: 14.4rem;
    background: rgba(255, 133, 155, 0.05);

    display: flex;
    align-items: center;

    padding: 0 12.4rem;
  }

`;

export const Form = styled.form`
  max-width: 34rem;
  margin: -9.2rem auto 0;

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: 0 auto 3.2rem;
  width: 18.6rem;
  height: 18.6rem;
  
  > img {
    border-radius: 50%;
    width: 18.6rem;
    height: 18.6rem;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR_PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;

    bottom: .7rem;
    right: .7rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.BUTTON_TEXT};
    }
  }

  label:hover {
    filter: brightness(0.9);
  }
`;