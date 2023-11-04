import { EducationList } from '../../../_content/Education';
import Section from '../Section';
import EducationExperience from './EducationExperience';

function EducationSection({ title, list }: EducationList) {
  return (
    <Section>
      <h2>{title}</h2>

      {list.map((education, index) => (
        <EducationExperience key={index} {...education} />
      ))}
    </Section>
  );
}

export default EducationSection;
