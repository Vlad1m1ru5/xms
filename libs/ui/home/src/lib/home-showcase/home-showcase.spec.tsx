import { render } from '@testing-library/react';

import HomeShowcase from './home-showcase';

describe('HomeShowcase', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomeShowcase />);
    expect(baseElement).toBeTruthy();
  });
});
