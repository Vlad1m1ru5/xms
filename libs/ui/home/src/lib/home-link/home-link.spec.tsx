import { render } from '@testing-library/react';

import HomeLink from './home-link';

describe('HomeLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomeLink />);
    expect(baseElement).toBeTruthy();
  });
});
