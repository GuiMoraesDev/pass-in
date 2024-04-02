import { render } from '@testing-library/react';
import React from 'react';

import EventsPage from '../src/app/events/page';
import ParticipantsPage from '../src/app/participants/page';

describe('Pages', () => {
  it('should render the events page successfully', () => {
    const { baseElement } = render(<EventsPage />);
    expect(baseElement).toBeTruthy();
  });

  it('should render the participants page successfully', () => {
    const { baseElement } = render(<ParticipantsPage />);
    expect(baseElement).toBeTruthy();
  });
});
