import styled from '@emotion/styled';
import { useTheme } from '@nextui-org/react';

import { Project } from '../../../_content/Projects';
import Li from '../Li';
import TitleTooltip from '../TitleTooltip';
import { Size } from '../TitleTooltip/TitleTooltip';

function Project({ title, position, startDate, endDate, description, which }: Project) {
  const { theme } = useTheme();

  const props: {
    text: string;
    githubLink: string;
    otherLink: string;
    size: Size;
  } = { ...title, size: 'medium' };
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

export default Project;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;
