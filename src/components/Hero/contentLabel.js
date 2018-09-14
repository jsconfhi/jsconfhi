import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

const H1 = styled.h1`
  font-size: ${theme.fontSizes.jumbo};
  font-weight: bold;
  text-align: center;
  color: ${theme.colors.textYellow};
  margin: ${theme.spaces.large} 0 ${theme.spaces.large};
  text-transform: uppercase;
`;

const HeroContentLabel = ({ children }) => <H1>{children}</H1>;

export default HeroContentLabel;
