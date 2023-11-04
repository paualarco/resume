import styled from '@emotion/styled';
import { useTheme } from '@nextui-org/react';

import { Course } from '../../../_content/Courses';
import Li from '../Li';
import TitleTooltip from '../TitleTooltip';
import { Size } from '../TitleTooltip/TitleTooltip';

function Course({ title, position, startDate, endDate, description, which }: Course) {
  const { theme } = useTheme();

  const props: {
    text: string;
    githubLink: string;
    otherLink: string;
    size: Size;
  } = { ...title, size: 'small' };

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

export default Course;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;
