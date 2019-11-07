import React from 'react';

import AlpucartLogo from '../../assets/images/brand.png';
import { LogoContainer, BrandText } from './styled';
import { ComingSoonText } from './styled';

function Logo(props) {
  return (
    <LogoContainer>
      <img src={AlpucartLogo} width="50%" />
      <BrandText>Empowering Your F&amp;B Business</BrandText>
      <ComingSoonText>We're Coming Soon !</ComingSoonText>
    </LogoContainer>
  );
}

export default Logo;
