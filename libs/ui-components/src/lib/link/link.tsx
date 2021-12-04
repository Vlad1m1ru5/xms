import { Button, ButtonProps } from '@mui/material';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';

export interface LinkProps
  extends Pick<ButtonProps, 'fullWidth' | 'variant'>,
    RouterLinkProps {}

export function Link(props: LinkProps) {
  return (
    <Button
      fullWidth={props.fullWidth}
      variant={props.variant}
      component={RouterLink}
      to={props.to}
    >
      {props.children}
    </Button>
  );
}

export default Link;
