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
import { SubmitHandler, useForm } from "react-hook-form";
import { Link as RouterLink } from 'react-router-dom';

interface LoginValues {
  username: string;
  password: string;
}

export function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const alertValues: SubmitHandler<LoginValues> = (values) => {
    alert(JSON.stringify(values));
  };

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
      <Box component="form" onSubmit={handleSubmit(alertValues)} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          autoComplete="email"
          autoFocus
          error={errors.email}
          {...register("email", { required: true })}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          error={errors.password}
          {...register("password", { required: true })}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
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
