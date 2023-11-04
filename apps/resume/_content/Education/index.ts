import data from './data.json';

export interface EducationExperience {
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

export interface EducationList {
  title: string;
  list: EducationExperience[];
}

export { data };
