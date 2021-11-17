import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface MarkdownListProps {}

const StyledMarkdownList = styled.div`
  color: pink;
`;

export function MarkdownList(props: MarkdownListProps) {
  return (
    <StyledMarkdownList>
      <h1>Welcome to MarkdownList!</h1>
    </StyledMarkdownList>
  );
}

export default MarkdownList;
