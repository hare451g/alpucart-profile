import React from 'react';
import SolutionCategories from '../../components/SolutionCategories';
import { SectionContainer, SolutionWording, SolutionHeader } from './styled';

function SolutionSection(props) {
  return (
    <SectionContainer>
      <SolutionHeader>Solution</SolutionHeader>
      <SolutionWording>
        "We're online B2B platform for F&amp;B businesses to procure their needs
        with affordable price, credit and payment facilities, accountability in
        order to simplified and profitable business process between customers
        and us"
      </SolutionWording>
    </SectionContainer>
  );
}

export default SolutionSection;
