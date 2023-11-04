import { Courses, data as coursesData } from '../../_content/Courses';
import { data as educationData, Education } from '../../_content/Education';
import { data as headerData, Header as HeaderType } from '../../_content/Header';
import { data as projectsData, Projects } from '../../_content/Projects';
import { data as skillsData, Skills } from '../../_content/Skills';
import { data as workExperienceData, WorkExperience } from '../../_content/Work-Experience';
import CoursesSection from '../components/Courses';
import EducationSection from '../components/Education';
import Header from '../components/Header';
import ProjectsSection from '../components/Projects/ProjectsSection';
import WorkExperienceSection from '../components/WorkExperienceSection';

interface Props {
  header: HeaderType;
  workExperience: WorkExperience;
  education: Education;
  courses: Courses;
  projects: Projects;
  skills: Skills;
}

function Resume({ header, workExperience, education, courses, projects }: Props) {
  return (
    <main>
      <Header {...header} />
      <WorkExperienceSection {...workExperience} />
      <EducationSection {...education} />
      <ProjectsSection {...projects} />
      <CoursesSection {...courses} />
    </main>
  );
}

export default Resume;

export async function getStaticProps() {
  return {
    props: {
      header: headerData,
      workExperience: workExperienceData,
      education: educationData,
      courses: coursesData,
      projects: projectsData,
      skills: skillsData,
    },
  };
}
