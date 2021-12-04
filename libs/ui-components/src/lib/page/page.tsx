import { Container } from '@mui/material';
import { Title } from '@xms/ui-components';
import { ReactNode } from 'react';

export interface PageProps {
  titleName?: string;
  titlePrevPagePath?: string;
  children?: ReactNode;
}

export function Page({
  titleName = '',
  titlePrevPagePath,
  children,
}: PageProps) {
  return (
    <Container>
      <Title name={titleName} prevPagePath={titlePrevPagePath} />
      {children}
    </Container>
  );
}

export default Page;
