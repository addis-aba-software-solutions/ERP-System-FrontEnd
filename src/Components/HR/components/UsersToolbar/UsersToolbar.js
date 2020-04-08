import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import history from '../../../../Routes/history'
import VisibilityIcon from '@material-ui/icons/Visibility';
import Swal from 'sweetalert2'


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
    backgroundColor: '#11669F',
    color: '#000000'
  },
}));





const UsersToolbar = props => {

  const PopupExample = () => {
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    })

  }
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
          variant="contained"
          color='#11669F'
          size="large"
          className={classes.button}
          onClick={PopupExample}
          startIcon={<VisibilityIcon />}
        >

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
