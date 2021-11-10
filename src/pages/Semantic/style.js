import styled from 'styled-components';
import { Button, Input } from 'semantic-ui-react';

export const StyledButton = styled(Button)`
  &&& {
    margin-right: 20px;
  }
`;

export const StyledInput = styled(Input)`
  &&& {
    margin-right: 20px;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 17px;
  font-weight: bold;
`;

export const StyledMarginRight = styled.span`
  display: inline-block;
  margin-right: 20px;
`;

export const StyledMarginBottom = styled.div`
  margin-bottom: 20px;
`;
