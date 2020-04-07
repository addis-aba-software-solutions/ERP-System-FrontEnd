import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  row: {
    display: 'flex',
    alignItems: 'center',
  },
  spacer: {
    flexGrow: 1
  },
  addNewPersonButton: {
    backgroundColor: '#11669F' ,
    color: '#000000' 
  },
}));

const UsersToolbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <span className={classes.spacer} />
        <Button
    className={classes.addNewPersonButton}
    color="inherit"
          variant="contained"
        >
          Add user
        </Button>
      </div>
      <div className={classes.row}>
      </div>
    </div>
  );
};

UsersToolbar.propTypes = {
  className: PropTypes.string
};

export default UsersToolbar;
