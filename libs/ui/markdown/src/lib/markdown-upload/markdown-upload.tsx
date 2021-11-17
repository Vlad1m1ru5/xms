import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface MarkdownUploadProps {}

const StyledMarkdownUpload = styled.div`
  color: pink;
`;

export function MarkdownUpload(props: MarkdownUploadProps) {
  return (
    <StyledMarkdownUpload>
      <h1>Welcome to MarkdownUpload!</h1>
    </StyledMarkdownUpload>
  );
}

export default MarkdownUpload;
