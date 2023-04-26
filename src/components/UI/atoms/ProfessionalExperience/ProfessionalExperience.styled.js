import styled from 'styled-components';

export const StyledMainDiv = styled.div`
  width: var(--primary-width);
  margin: 0 auto;
  font-family: var(--primary-font-family);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  padding: 2.5em 0;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -20vw;
    width: 200vw;
    height: 100%;
    background-color: #f2f2f2;
    z-index: -1;
  }
`;

export const StyledTitle = styled.h2`
  margin: 0;
  font-weight: 800;
  font-size: 58px;
  line-height: 76px;
  color: #661ce7;
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
