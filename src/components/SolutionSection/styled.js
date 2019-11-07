import styled from 'styled-components';
import BgSolution from '../../assets/images/bg-solution.jpeg';

const SolutionCardDeck = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  height: 100vh;
  background-color: #0d0d0d;
`;

const SolutionWording = styled.p`
  color: #2eab53;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2rem;
  padding: 2rem 4rem;
  line-height: 3.5rem;
`;

const SolutionHeader = styled.h1`
  color: #2eab53;
  justify-content: center;
  align-items: center;
  text-align: start;
  font-weight: 600;
  font-size: 2rem;
  padding: 2rem 4rem;
`;

export { SolutionCardDeck, SectionContainer, SolutionWording, SolutionHeader };
