import { List, ListItem, Stack, Toolbar, Typography } from '@mui/material';
import { useMemo } from 'react';
import AppNavbarLink from '../app-navbar-link/app-navbar-link';
import { ReactComponent as Logo } from '../logo.svg';

export interface AppNavbarProps {
  isAuth: boolean;
  isAdmin: boolean;
}

export function AppNavbar(props: AppNavbarProps) {
  const routes = useMemo(() => {
    if (!props.isAuth) {
      return [{ path: '/login', label: 'Sign in' }];
    }

    const availableRoutes = [{ path: '/markdown', label: 'Markdown' }];

    if (props.isAdmin) {
      availableRoutes.push({ path: '/user', label: 'User' });
    }

    return availableRoutes;
  }, [props.isAuth, props.isAdmin]);

  return (
    <Toolbar component="nav" aria-label="navigation">
      <Stack component={List} direction="row">
        <ListItem>
          <AppNavbarLink to="/">
            <Logo width="36.5" height="36.5" />
          </AppNavbarLink>
        </ListItem>
        {routes.map((route) => (
          <ListItem key={route.path}>
            <AppNavbarLink to={route.path}>
              <Typography component="h5" variant="h6" noWrap>
                {route.label}
              </Typography>
            </AppNavbarLink>
          </ListItem>
        ))}
      </Stack>
    </Toolbar>
  );
}

export default AppNavbar;
