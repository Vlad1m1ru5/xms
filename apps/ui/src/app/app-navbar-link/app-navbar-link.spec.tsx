import { render } from '@testing-library/react';

import AppNavbarLink from './app-navbar-link';

describe('AppNavbarLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppNavbarLink />);
    expect(baseElement).toBeTruthy();
  });
});
