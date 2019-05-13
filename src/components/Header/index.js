import React from "react";
import styled from "styled-components";
import theme from "../../theme";

export const headerHeight = 30;

const HeaderWrapper = styled.div`
  background: ${theme.colors.background};
  color: ${theme.colors.textYellow};
  height: ${headerHeight}px;
  position: fixed;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-around;
  top: 0;
  padding: 0;
  height: ${headerHeight}px;
  width: 100%;
`;

const Sup = styled.sup`
  vertical-align: super;
  font-size: 0.6em;
`;

const Header = () => (
  <HeaderWrapper>
    <span>
      JSConf Hawaiʻi &nbsp;|&nbsp; Dates TBA &nbsp;|&nbsp; Honolulu, HI
    </span>
  </HeaderWrapper>
);

export default Header;
