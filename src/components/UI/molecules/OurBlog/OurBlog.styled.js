import styled from 'styled-components';
import RaceCar from '../../../../assets/race-car.png';

export const StyledWrapper = styled.div`
  display: flex;
  background-color: var(--primary-color);
  color: var(--white-color);
`;

export const StyledBlogDiv = styled.div`
  position: relative;
  width: 40%;
  min-height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${RaceCar});
    background-position: 25% 75%;
    opacity: 0.3;
    z-index: 5;
  }

  h1 {
    position: relative;
    z-index: 10;
  }
`;

export const StyledInfoWrapper = styled.div`
  padding: 5rem 0;
  width: 60%;
`;

export const StyledInfoDiv = styled.div`
  margin-left: 3rem;
  width: 55%;

  h6,
  h4,
  p {
    margin: 0;
    padding-bottom: 0.75rem;
  }

  h6 {
    letter-spacing: 0.3rem;
    color: var(--orange-color);
  }
`;

export const StyledButtonDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;

  button {
    color: var(--white-color);
    background: var(--orange-color);
    border: 1px solid var(--orange-color);
    border-radius: 10px;
    padding: 0.6rem 1.4rem;
    margin-right: 1.25rem;
    text-decoration: none;
    :hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }

  p {
    padding: 0;
  }
`;
