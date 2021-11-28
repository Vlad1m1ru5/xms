import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  List,
  Typography,
} from '@mui/material';
import { ReactNode } from 'react';

export interface HomeCardProps {
  title: string;
  description: string[];
  buttonText: ReactNode;
}

export function HomeCard(props: HomeCardProps) {
  return (
    <Grid item key={props.title} xs={12} sm={6} md={4}>
      <Card>
        <CardHeader
          title={props.title}
          titleTypographyProps={{ align: 'center' }}
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[700],
          }}
        />
        <CardContent>
          <List>
            {props.description.map((line) => (
              <Typography
                component="li"
                variant="subtitle1"
                align="center"
                key={line}
              >
                {line}
              </Typography>
            ))}
          </List>
        </CardContent>
        <CardActions>
          <Button fullWidth variant="contained">
            {props.buttonText}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default HomeCard;
