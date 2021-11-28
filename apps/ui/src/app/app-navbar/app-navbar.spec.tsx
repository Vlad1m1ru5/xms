import { render } from '@testing-library/react';

import AppNavbar from './app-navbar';

describe('AppNavbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppNavbar />);
    expect(baseElement).toBeTruthy();
  });
});
