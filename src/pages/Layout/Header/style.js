import styled, { css } from 'styled-components';
import { Image, Flag } from 'semantic-ui-react';

export const StyledHeader = styled.div`
  background: ${(props) => props.theme.headerBgColor};
  display: flex;
  flex-direction: row;
  height: 70px;
  position: relative;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
`;

export const Logo = styled(Image)`
  &&& {
    height: 100%;
    left: 10%;
    object-fit: contain;
    object-position: center;
    width: ${(props) => props.theme.logoWidth};
  }
`;

export const RightContent = styled.div`
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
`;

export const StyledFlag = styled(Flag)`
  &&& {
    opacity: 0.5;
    cursor: pointer;
    ${(props) =>
      props.active === 'true' &&
      css`
        opacity: 1;
      `}
  }
`;
