import { LockOutlined } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link as MaterialLink,
  TextField,
  Typography
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';

interface LoginValues {
  username: string;
  password: string;
  remember: boolean;
}

export interface LoginProps {
  handleLogin: (values: LoginValues) => void;
}

export function Login(props: LoginProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlined />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(props.handleLogin)}
        noValidate
        sx={{ mt: 1 }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          label="Username"
          autoComplete="username"
          autoFocus
          error={errors.email}
          {...register('username', { required: true })}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          autoComplete="current-password"
          error={errors.password}
          {...register('password', { required: true })}
        />
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Remember me"
          {...register('remember')}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item>
            <MaterialLink variant="body2" component={RouterLink} to="/login#">
              Don't have an account? Sign Up
            </MaterialLink>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Login;
