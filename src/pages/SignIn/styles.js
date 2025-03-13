import styled from "styled-components";
import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;


`;

export const Form = styled.form`
  padding: 0 13.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;

  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR_PINK };
  }

  > h2 {
    font-size: 2.4rem;
    margin: 4.8rem 0;
  }

  > p {
    font-size: 1.4rem;
    color: #CAC4CF;
  }

  > a {
    margin: 4.8rem auto 0; 
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  opacity: 0.6;
`;