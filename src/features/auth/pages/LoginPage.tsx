import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core';
import * as React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },

  box: {
    padding: theme.spacing(5, 10),
  },
}));

export default function LoginPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant="h4" component="h1">
          Student Management App
        </Typography>
        <Box mt={4}>
          <Button fullWidth variant="contained" color="primary">
            Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
