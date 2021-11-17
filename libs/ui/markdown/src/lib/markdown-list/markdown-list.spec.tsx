import { render } from '@testing-library/react';

import MarkdownList from './markdown-list';

describe('MarkdownList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MarkdownList />);
    expect(baseElement).toBeTruthy();
  });
});
