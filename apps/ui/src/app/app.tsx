import {
  AppBar,
  CssBaseline,
  Link,
  List,
  ListItem,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { Home } from '@xms/ui-home';
import { Login } from '@xms/ui-login';
import { Markdown, MarkdownList, MarkdownUpload } from '@xms/ui-markdown';
import { User, UserList } from '@xms/ui-user';
import * as React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { ReactComponent as Logo } from './logo.svg';

export function App() {
  const Navbar = React.memo(() => (
    <Toolbar component="nav" aria-label="navigation">
      <Stack component={List} direction="row">
        <ListItem>
          <Link underline="hover" color="inherit" component={NavLink} to="/">
            <Logo width="75" height="75" />
          </Link>
        </ListItem>
        <ListItem>
          <Link
            underline="hover"
            color="inherit"
            component={NavLink}
            to="/user"
          >
            <Typography component="h5" variant="h6">
              User
            </Typography>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            underline="hover"
            color="inherit"
            component={NavLink}
            to="/markdown"
          >
            <Typography component="h5" variant="h6">
              Markdown
            </Typography>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            underline="hover"
            color="inherit"
            component={NavLink}
            to="/login"
          >
            <Typography component="h5" variant="h6">
              Login
            </Typography>
          </Link>
        </ListItem>
      </Stack>
    </Toolbar>
  ));

  const Routes = React.memo(() => (
    <Switch>
      <Route path="/markdown" component={MarkdownList} />
      <Route path="/markdown/upload" component={MarkdownUpload} />
      <Route path="/markdown/:id" component={Markdown} />
      <Route path="/user" component={UserList} />
      <Route path="/user/:id" component={User} />
      <Route path="/login" component={Login} />
      <Route path="/" component={Home} />
    </Switch>
  ));

  const Copyright = React.memo(() => (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/Vlad1m1ru5/xms">
        Xms
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  ));

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="sticky">
        <Navbar />
      </AppBar>
      <main>
        <Routes />
      </main>
      <footer>
        <Copyright />
      </footer>
    </React.Fragment>
  );
}

export default App;
