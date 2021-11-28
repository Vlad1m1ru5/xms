import { Link } from '@mui/material';
import { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';

export interface HomeLinkProps {
  to: string;
  children?: ReactNode;
}

export function HomeLink(props: HomeLinkProps) {
  return (
    <Link underline="none" color="inherit" component={RouterLink} to={props.to}>
      {props.children}
    </Link>
  );
}

export default HomeLink;
