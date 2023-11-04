import { render, screen } from '@testing-library/react';

import EducationSection from './CoursesSection';

const mockEducation = {
  title: 'title',
  list: [
    {
      title: {
        text: 'experience',
        githubLink: 'githubLink',
        otherLink: 'otherLink',
      },
      position: 'position',
      startDate: '2020.01',
      endDate: '2021.01',
      description: 'description',
      which: ['1', '2'],
    },
  ],
};

describe('resume - components - OtherExperienceSection', () => {
  it('should render props', () => {
    render(<EducationSection {...mockEducation} />);
    expect(screen.getByText(mockEducation.title)).toBeInTheDocument();
    expect(screen.getByText(mockEducation.list[0].title.text)).toBeInTheDocument();
  });
});
