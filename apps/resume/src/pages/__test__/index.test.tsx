import { render, screen } from '@testing-library/react';

import { data as educationData } from '../../../_content/Education';
import { data as headerData } from '../../../_content/Header';
import { data as skillsData } from '../../../_content/Skills';
import { data as workExperienceData } from '../../../_content/Work-Experience';
import Resume from '../index.page';

describe('resume - pages - index', () => {
  it('should defined', () => {
    expect(Resume).toBeDefined();
  });

  it('should render main', () => {
    render(
      <Resume header={headerData} workExperience={workExperienceData} education={educationData} skills={skillsData} />
    );

    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
