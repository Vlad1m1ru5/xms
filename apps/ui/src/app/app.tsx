import { AppBar, Box, Container, CssBaseline } from '@mui/material';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppCopyright from './app-copyright/app-copyright';
import AppNavbar from './app-navbar/app-navbar';
import AppRoutes from './app-routes/app-routes';
import { AuthFetchStatusDTO, fetchAuth, selectIsAuth } from './auth.slice';

export function App() {
  const dispatch = useDispatch();
  const handleLogin = (user: AuthFetchStatusDTO) => dispatch(fetchAuth(user));
  const isAuth = useSelector(selectIsAuth);

  return (
    <Fragment>
      <CssBaseline />
      <AppBar position="sticky">
        <AppNavbar isAuth={isAuth} />
      </AppBar>
      <Container component="main">
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <AppRoutes isAuth={isAuth} handleLogin={handleLogin} />
        </Box>
      </Container>
      <Container component="footer">
        <AppCopyright />
      </Container>
    </Fragment>
  );
}

export default App;
