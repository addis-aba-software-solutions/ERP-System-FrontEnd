import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Divider,
} from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';

const useStyles = makeStyles( ({
  root: {
    flex: 1
  },
  chartContainer: {
    position: 'relative',
    height: '300px'
  },
  stats: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center'
  },
  device: {
    textAlign: 'center',
    padding: 10,
  },
  deviceIcon: {
    color: "#11669F"
  }
}));

const UsersByDevice = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const data = {
    datasets: [
      {
        data: [63, 15, 22],
        backgroundColor: [
          '#11669F',
          '#F00000',
          '#F0D800'
        ],
        borderWidth: 8,
        borderColor: '#FFFFFF',
        hoverBorderColor: '#FFFFFF'
      }
    ],
    labels: ['Desktop', 'Tablet', 'Mobile']
  };

  const options = {
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    tooltips: {
      enabled: true,
      mode: 'index',
      intersect: false,
      borderWidth: 1,
      borderColor: '#11669F',
      backgroundColor: '#FFFFFF',
      titleFontColor: '#11669F',
      bodyFontColor: '#11669F',
      footerFontColor: '#FFFFFF',
    }
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={
          <IconButton size="small">
            <RefreshIcon />
          </IconButton>
        }
        title="Users By Device"
      />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
          <Doughnut
            data={data}
            options={options}
          />
        </div>

      </CardContent>
    </Card>
  );
};

UsersByDevice.propTypes = {
  className: PropTypes.string
};

export default UsersByDevice;
