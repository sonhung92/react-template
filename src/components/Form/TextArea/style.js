import styled from 'styled-components';
import { Form } from 'semantic-ui-react';

export const StyledTextArea = styled(Form.TextArea)`
  &&& {
    & textarea {
      resize: none;
    }
  }
`;
