import { CoursesList } from '../../../_content/Courses';
import Section from '../Section';
import Course from './Course';

function CoursesSection({ title, list }: CoursesList) {
  return (
    <Section>
      <h2>{title}</h2>

      {list.map((courses, index) => (
        <Course key={index} {...courses} />
      ))}
    </Section>
  );
}

export default CoursesSection;
