import { render } from '@testing-library/react';

import AppCopyright from './app-copyright';

describe('AppCopyright', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppCopyright />);
    expect(baseElement).toBeTruthy();
  });
});
