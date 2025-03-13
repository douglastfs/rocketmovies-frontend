import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  display: flex;

  height: 11.6rem;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER};

  > div {
    display: flex;
    flex: 1;
    margin: 0 auto;
    align-items: center;
    max-width: 116rem;
    padding: 0 2rem;
    gap: 6.4rem;

    h1 {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR_PINK };
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > a {
    width: 5.6rem;
    height: 5.6rem;
    
    > img {
      width: 5.6rem;
      height: 5.6rem;
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.COLORS.BORDER };
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 1.6rem;
    line-height: 2.4rem;
    text-align: right;

    strong {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.TEXT_COLOR_WHITE };
      white-space: nowrap;
    }

    a {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.PLACEHOLDER_TEXT_GRAY };
      width: fit-content;
      align-self: end;
    }
  }
`;