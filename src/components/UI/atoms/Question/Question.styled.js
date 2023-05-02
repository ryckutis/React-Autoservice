import styled from 'styled-components';

export const StyledDiv = styled.div`
  margin: 0 auto 1em auto;
  max-width: 896px;
  background-color: var(--white-color);
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  padding: 0 2.5em;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 112px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledQ = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: var(--primary-color);
`;

export const StyledBtn = styled.button`
  width: 51.08px;
  height: 48px;
  background-color: #ff6433;
  color: white;
  border: none;
  font-size: 24px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s ease;
  transform: rotate(${(props) => (props.isExpanded ? '180deg' : '0')});

  :hover {
    cursor: pointer;
    background: #d15a36;
  }
`;

export const StyledPar = styled.p`
  margin: 0;
  width: 701.26px;
  font-weight: 500;
  font-size: 18px;
  line-height: 31.5px;
  color: var(--secondary-color);
  height: ${(props) => (props.isExpanded ? `${props.divHeight - 112}px` : 0)};
  overflow: hidden;
  text-align: left;
  transition: height 0.4s ease;
`;
