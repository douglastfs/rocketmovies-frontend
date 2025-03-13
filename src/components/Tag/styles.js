import styled from 'styled-components';

export const Container = styled.span`
  font-size: 1.2rem;
  padding: .8rem 1.6rem;
  color: ${({ theme }) => theme.COLORS.TAGS_TEXT_COLOR};
  background-color: ${({ theme }) => theme.COLORS.TAGS_BACKGROUND_DESCRIPTION_PAGE};
  margin-right: .8rem;
  border-radius: .8rem;
  font-family: "Roboto", sans-serif;
`;