import { render } from '@testing-library/react';

import CoursesSection from './CoursesSection';
import Default from './index';

const mockOtherExperience = {
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

describe('resume - components - OtherExperienceSection index', () => {
  it('should render same things with OtherExperienceSection component', () => {
    const { container: defaultContainer } = render(<Default {...mockOtherExperience} />);
    const { container } = render(<CoursesSection {...mockOtherExperience} />);
    expect(defaultContainer).toEqual(container);
  });
});
