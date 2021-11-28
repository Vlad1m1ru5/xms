import { Link, Typography } from '@mui/material';

export function AppCopyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/Vlad1m1ru5/xms">
        Vlad1m1ru5
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default AppCopyright;
