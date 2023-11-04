import { ProjectsList } from '../../../_content/Projects';
import Section from '../Section';
import Project from './Project';

function ProjectsSection({ title, list }: ProjectsList) {
  return (
    <Section>
      <h2>{title}</h2>

      {list.map((courses, index) => (
        <Project key={index} {...courses} />
      ))}
    </Section>
  );
}

export default ProjectsSection;
