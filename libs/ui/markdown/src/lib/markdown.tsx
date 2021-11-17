import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface MarkdownProps {}

const StyledMarkdown = styled.div`
  color: pink;
`;

export function Markdown(props: MarkdownProps) {
  return (
    <StyledMarkdown>
      <h1>Welcome to Markdown!</h1>
    </StyledMarkdown>
  );
}

export default Markdown;
