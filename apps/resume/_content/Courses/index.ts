import data from './data.json';

export interface Course {
  title: {
    text: string;
    githubLink: string | null;
    otherLink: string | null;
  };
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  which: string[];
}

export interface CoursesList {
  title: string;
  list: Course[];
}

export { data };
