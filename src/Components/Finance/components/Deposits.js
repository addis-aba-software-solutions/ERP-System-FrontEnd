import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      Company Balance
      <Typography style={{
        paddingTop: 20
      }}variant="h4">
        3,602,102,4.00 ETB
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Year : 2020
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View More
        </Link>
      </div>
    </React.Fragment>
  );
}