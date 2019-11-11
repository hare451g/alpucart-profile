import styled from 'styled-components'; // #feeba0
import mediaQueries from '../../constants/mediaQueries';

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

const BrandText = styled.h1`
  color: #2eab53;
  padding: 1rem;
  text-align: center;
`;

const ComingSoonText = styled.h2`
  font-weight: 500;
  color: #3d3d3d;
`;

export { LogoContainer, BrandText, ComingSoonText };
