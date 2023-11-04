import Section from '../Section';
import Education from './Education';

function EducationSection({ title, list }: Education) {
  return (
    <Section>
      <h2>{title}</h2>

      {list.map((education, index) => (
        <Education key={index} {...education} />
      ))}
    </Section>
  );
}

export default EducationSection;
