import { Container } from '@mui/material';
import { Title } from '@xms/ui-components';
import { ReactNode } from 'react';

export interface PageProps {
  children?: ReactNode;
  titleName: string;
  titlePrevPagePath?: string;
}

export function Page(props: PageProps) {
  return (
    <Container>
      <Title name={props.titleName} prevPagePath={props.titlePrevPagePath} />
      {props.children}
    </Container>
  );
}

export default Page;
