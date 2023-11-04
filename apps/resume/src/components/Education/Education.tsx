import styled from '@emotion/styled';
import { useTheme } from '@nextui-org/react';

import { EducationExperience } from '../../../_content/Education';
import Li from '../Li';
import TitleTooltip from '../TitleTooltip';

function EducationExperience({ title, position, startDate, endDate, description, which }: EducationExperience) {
  const { theme } = useTheme();

  const props = { ...title, size: 'medium' };
  return (
    <Div>
      <TitleTooltip {...props} />
      <small>
        {startDate} ~ {endDate}
      </small>
      <span>{position}</span>
      <p>{description}</p>
      {which.length > 0 && (
        <ul>
          {which.map((each, index) => (
            <Li key={index} theme={theme}>
              {each}
            </Li>
          ))}
        </ul>
      )}
    </Div>
  );
}

export default EducationExperience;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;
