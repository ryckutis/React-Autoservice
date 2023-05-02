import styled from 'styled-components';

export const StyledMainDiv = styled.div`
  width: var(--primary-width);
  margin: 0 auto;
  font-family: var(--primary-font-family);
`;

export const StyledPar = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: var(--primary-color);
  opacity: 0.7;
  display: flex;
  align-items: center;

  & > :first-child {
    margin-right: 10px;
  }
`;

export const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--primary-color);
  margin-bottom: 6em;
`;

export const StyledCenteredRow = styled(StyledRow)`
  justify-content: center;
  margin: 0;
`;

export const StyledSubtitle = styled.h3`
  margin: 3em 0 1.5em 0;
  font-weight: 700;
  font-size: 48px;
  line-height: 67.2px;
`;
