import styled from 'styled-components';
import { Table } from 'react-virtualized';

export const TextCenter = styled.div`
  text-align: center;
`;

export const StyledTable = styled(Table)`
  & .odd {
    background-color: #f7f7f8;
  }

  & :focus {
    outline: 0;
  }
`;
