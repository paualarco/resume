import { render, screen } from '@testing-library/react';

import Course from './Course';

describe('resume - components - Experience', () => {
  it('should render props', () => {
    const mockExperience = {
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
    };

    render(<Course {...mockExperience} />);
    expect(screen.getByText(mockExperience.title.text)).toBeInTheDocument();
    expect(screen.getByText(`${mockExperience.startDate} ~ ${mockExperience.endDate}`)).toBeInTheDocument();
    expect(screen.getByText(mockExperience.position)).toBeInTheDocument();
    expect(screen.getByText(mockExperience.description)).toBeInTheDocument();
    expect(screen.getByText(mockExperience.which[0])).toBeInTheDocument();
    expect(screen.getByText(mockExperience.which[1])).toBeInTheDocument();
  });

  it('should not render list when doesnt have which', () => {
    const mockExperience = {
      title: {
        text: 'experience',
        githubLink: 'githubLink',
        otherLink: 'otherLink',
      },
      position: 'position',
      startDate: '2020.01',
      endDate: '2021.01',
      description: 'description',
      which: [],
    };

    render(<Course {...mockExperience} />);
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });
});
