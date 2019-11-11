import styled from 'styled-components';
import BgSolution from '../../assets/images/bg-solution.jpeg';
import mediaQuery from '../../constants/mediaQueries';

const SolutionCategoriesContainer = styled.div`
  display: flex;

  @media ${mediaQuery.mobileS} {
    flex-direction: column;
    height: 100%;
    padding: 1rem 0;
  }
  @media ${mediaQuery.laptop} {
    flex-direction: row;
    height: 100vh;
    background: url('${BgSolution}') no-repeat;
  }
  

  flex-direction: row;

  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #303030;
  backdrop-filter: blur(10px);
  filter: alpha(opacity=40);
`;

const SolutionSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;
  width: 240px;
  color: #2eab53;
  border-radius: 8px;
  background-color: #fff;
  border: 2px solid #2eab53;
  padding: 1rem;
  margin: 0 1rem;
  text-align: center;
  @media ${mediaQuery.mobileS} {
    padding: 1rem 0;
    margin: 1rem 0;
  }
`;

export { SolutionCategoriesContainer, SolutionSection };
