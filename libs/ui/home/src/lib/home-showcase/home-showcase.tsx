import { Grid } from '@mui/material';
import { ReactNode } from 'react';

export interface HomeShowcaseProps {
  children?: ReactNode;
}

export function HomeShowcase(props: HomeShowcaseProps) {
  return (
    <Grid container spacing={5} alignItems="flex-end">
      {props.children}
    </Grid>
  );
}

export default HomeShowcase;
