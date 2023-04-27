import styled from 'styled-components';
import firstImg from '../../../../assets/under-car.png';
import secondImg from '../../../../assets/car-battery.png';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledBox = styled.div`
  width: calc(100% / 3);
  height: 629px;
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-size: cover;

  h4 {
    width: 437px;
    height: 168px;
    font-weight: 700;
    color: var(--white-color);
    letter-spacing: -0.03em;
    z-index: 5;
  }

  p {
    width: 435px;
    height: 144px;
    font-weight: 600;
    font-size: 24px;
    color: var(--white-color);
    z-index: 5;
  }
`;

export const StyledFirstBox = styled(StyledBox)`
  background-image: url(${firstImg});
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f85b29e5;
    opacity: 0.9;
  }
`;

export const StyledSecondBox = styled(StyledBox)`
  background-image: url(${secondImg});
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000e5;
    opacity: 0.9;
  }
`;

export const StyledThirdBox = styled(StyledBox)`
  background-image: url(${secondImg});
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #7443cae5;
    opacity: 0.9;
  }
`;
