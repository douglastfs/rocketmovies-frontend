import styled from 'styled-components';

export const Container = styled.button`

  display: flex;
  align-items: center;
  justify-content: center; 
  gap: .8rem;
  background: none;
  color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR_PINK};
  border: none;
  font-size: 1.6rem;
  width: fit-content;

  > svg {
    color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR_PINK};
  }
`;