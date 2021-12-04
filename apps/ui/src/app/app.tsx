import { AppBar, Box, Container, CssBaseline } from '@mui/material';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AppCopyright from './app-copyright/app-copyright';
import AppNavbar from './app-navbar/app-navbar';
import AppRoutes from './app-routes/app-routes';
import { StatusFetchDto } from './user.api';
import {
  fetchUser,
  selectIsAdmin,
  selectIsAuth,
  userActions,
} from './user.slice';

export function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const isAdmin = useSelector(selectIsAdmin);

  const handleLogin = (user: StatusFetchDto) => {
    isAuth && dispatch(userActions.remove());
    dispatch(fetchUser(user));
    history.push('/');
  };

  const handleUpload = (data: FormData) =>
    fetch('/api/markdown', { method: 'POST', body: data });

  return (
    <Fragment>
      <CssBaseline />
      <AppBar position="sticky">
        <AppNavbar isAuth={isAuth} isAdmin={isAdmin} />
      </AppBar>
      <Container component="main">
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <AppRoutes
            isAuth={isAuth}
            isAdmin={isAdmin}
            handleLogin={handleLogin}
            handleUpload={handleUpload}
          />
        </Box>
      </Container>
      <Container component="footer">
        <AppCopyright />
      </Container>
    </Fragment>
  );
}

export default App;
