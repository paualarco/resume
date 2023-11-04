import data from './data.json';

export interface Project {
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

export interface Projects {
  title: string;
  list: Project[];
}

export { data };
