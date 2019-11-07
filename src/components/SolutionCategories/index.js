import React from 'react';
import MdEye from 'react-ionicons/lib/MdEye';
import IosTrendingUp from 'react-ionicons/lib/IosTrendingUp';
import MdTime from 'react-ionicons/lib/MdTime';

import { SolutionCategoriesContainer, SolutionSection } from './styled';

function SolutionCategories(props) {
  return (
    <SolutionCategoriesContainer>
      <SolutionSection>
        <MdEye fontSize="60px" color="#43853d" />
        <h2>Traceability</h2>
      </SolutionSection>
      <SolutionSection>
        <IosTrendingUp fontSize="60px" color="#43853d" />
        <h2>Business Growth Fuels</h2>
      </SolutionSection>
      <SolutionSection>
        <MdTime fontSize="60px" color="#43853d" />
        <h2>One Stop Fulfillment Needs</h2>
      </SolutionSection>
    </SolutionCategoriesContainer>
  );
}

export default SolutionCategories;
