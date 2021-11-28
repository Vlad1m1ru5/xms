import { AppBar, Box, Container, CssBaseline } from '@mui/material';
import { Fragment } from 'react';
import AppCopyright from './app-copyright/app-copyright';
import AppNavbar from './app-navbar/app-navbar';
import AppRoutes from './app-routes/app-routes';

export function App() {
  return (
    <Fragment>
      <CssBaseline />
      <AppBar position="sticky">
        <AppNavbar />
      </AppBar>
      <Container component="main">
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <AppRoutes />
        </Box>
      </Container>
      <Container component="footer">
        <AppCopyright />
      </Container>
    </Fragment>
  );
}

export default App;
