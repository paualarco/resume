import Section from '../Section';
import Projects from './Projects';

function ProjectsSection({ title, list }: Projects) {
  return (
    <Section>
      <h2>{title}</h2>

      {list.map((courses, index) => (
        <Projects key={index} {...courses} />
      ))}
    </Section>
  );
}

export default ProjectsSection;
