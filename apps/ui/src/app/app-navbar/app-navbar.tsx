import { List, ListItem, Stack, Toolbar, Typography } from '@mui/material';
import AppNavbarLink from '../app-navbar-link/app-navbar-link';
import { ReactComponent as Logo } from '../logo.svg';

export function AppNavbar() {
  return (
    <Toolbar component="nav" aria-label="navigation">
      <Stack component={List} direction="row">
        <ListItem>
          <AppNavbarLink to="/">
            <Logo width="36.5" height="36.5" />
          </AppNavbarLink>
        </ListItem>
        <ListItem>
          <AppNavbarLink to="/user">
            <Typography component="h5" variant="h6">
              User
            </Typography>
          </AppNavbarLink>
        </ListItem>
        <ListItem>
          <AppNavbarLink to="/markdown">
            <Typography component="h5" variant="h6">
              Markdown
            </Typography>
          </AppNavbarLink>
        </ListItem>
        <ListItem>
          <AppNavbarLink to="/login">
            <Typography component="h5" variant="h6">
              Login
            </Typography>
          </AppNavbarLink>
        </ListItem>
      </Stack>
    </Toolbar>
  );
}

export default AppNavbar;
