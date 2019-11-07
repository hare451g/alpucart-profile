import styled from 'styled-components';
import BgSolution from '../../assets/images/bg-solution.jpeg';

const SolutionCategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('${BgSolution}') no-repeat;
  background-size: 100%;
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
`;

export { SolutionCategoriesContainer, SolutionSection };
