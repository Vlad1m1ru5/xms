import { render } from '@testing-library/react';

import MarkdownUpload from './markdown-upload';

describe('MarkdownUpload', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MarkdownUpload />);
    expect(baseElement).toBeTruthy();
  });
});
