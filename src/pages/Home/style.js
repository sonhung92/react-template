import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colorDarkGreen};
  font-family: ${(props) => props.theme.fontRobotoBold};
`;
