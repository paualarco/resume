import Section from '../Section';
import Courses from './Courses';

function CoursesSection({ title, list }: Courses) {
  return (
    <Section>
      <h2>{title}</h2>

      {list.map((courses, index) => (
        <Courses key={index} {...courses} />
      ))}
    </Section>
  );
}

export default CoursesSection;
