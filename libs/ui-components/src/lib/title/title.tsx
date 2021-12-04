import { Button, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export interface TitleProps {
  name: string;
  prevPagePath?: string;
}

export function Title(props: TitleProps) {
  const getPrevPageLink = () =>
    props.prevPagePath ? (
      <Button
        variant="text"
        sx={{ mr: 2, fontSize: 'inherit', color: 'inherit' }}
        component={Link}
        to={props.prevPagePath}
      >
        <ArrowBack fontSize="inherit" />
      </Button>
    ) : null;

  return (
    <Typography component="h1" variant="h2">
      {getPrevPageLink()}
      {props.name}
    </Typography>
  );
}

export default Title;
