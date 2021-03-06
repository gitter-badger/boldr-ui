import React from 'react';
import styled from 'styled-components';
import type { ReactChildren } from '../../types/react.js.flow';

type Props = {
  children: ReactChildren,
  sidebarDark: boolean,
  fullWidth: boolean,
};

const SidebarWrapper = (props: Props) => {
  const SidebarWrap = styled.aside`
  display: flex;
  flex-direction: column;
  width: ${props => (props.fullWidth ? '240px' : '60px')};
  background: ${props => (props.sidebarDark ? '#333c44' : '#fff')};
  box-shadow: 1px 0 2px rgba(0,0,0,.15);
  flex-direction: column;
  transform: translateX(0);
  transform: translate3d(0, 0, 0);
  white-space: nowrap;
  `;
  return (
    <SidebarWrap {...props}>
      {props.children}
    </SidebarWrap>
  );
};
SidebarWrapper.defaultProps = {
  sidebarDark: true,
  fullWidth: true,
};
export default SidebarWrapper;
