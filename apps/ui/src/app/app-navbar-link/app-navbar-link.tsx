import { Link } from '@mui/material';
import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

export interface AppNavbarLinkProps {
  to: string;
  children?: ReactNode;
}

export function AppNavbarLink(props: AppNavbarLinkProps) {
  return (
    <Link underline="hover" color="inherit" component={NavLink} to={props.to}>
      {props.children}
    </Link>
  );
}

export default AppNavbarLink;
