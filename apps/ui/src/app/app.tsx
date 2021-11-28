import { AppBar, Box, CssBaseline } from '@mui/material';
import { Fragment } from 'react';
import AppNavbar from './app-navbar/app-navbar';
import AppRoutes from './app-routes/app-routes';

export function App() {
  return (
    <Fragment>
      <CssBaseline />
      <AppBar position="sticky">
        <AppNavbar />
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <AppRoutes />
        </Box>
      </main>
    </Fragment>
  );
}

export default App;
