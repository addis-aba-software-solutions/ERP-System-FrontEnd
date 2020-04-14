import React from 'react';
// import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Paper, Input, Typography, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import FilterListIcon from '@material-ui/icons/FilterList';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ListIcon from '@material-ui/icons/List';
import AppsIcon from '@material-ui/icons/Apps';










const useStyles = makeStyles(theme => ({
  SecondaryColor: {
    // background: '#FFFFFF', 
// width: '100%'
  },
  budgetTracking: {
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    width: 260,
    borderRadius: 20
  },
  Position: {
    flex:1,
    display: 'flex',
    justifyContent: 'flex-end',

  },
  root: {
    flex: 1,
    display: 'flex',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    flexBasis: 420
  },
  icon: {
    marginRight: 10,
    color: '#'
  },
  input: {
    flexGrow: 1,
    fontSize: '14px',
    // padding: 10,
    lineHeight: '16px',
    letterSpacing: '-0.05px'
  },
  SearchBar: {
    // marginLeft: 800,
    width: 400
  }
}));

const SearchBar = props => {
  const { className, onChange, style,  search,...rest } = props;

  const classes = useStyles();

  return (
    <div className={classes.SecondaryColor}>
    <div className={classes.Position} >
      <div className={classes.SearchBar}>
        <Paper
          {...rest}
          className={clsx(classes.root, className)}
          style={style}
        >

          <Input
            placeholder='Search'
            {...rest}
            className={classes.input}
            disableUnderline
            onChange={props.updateSearch}
            value={props.search}
            style={
              {
                paddingLeft: 20
              }
            }
          />
          <SearchIcon className={classes.icon} />

        </Paper>

        <div>
          <Grid container xs={12} style={{
            marginLeft: 10,
          }}>
            <IconButton>
              <FilterListIcon fontSize='small' style={{
                marginRight: 5,
              }} />

              <Typography style={{
                fontSize: 12,
                marginRight: 2,
                // marginLeft: 10,
                marginTop: 2
              }}>
                Filter By
            </Typography>

              <ArrowDropDownIcon fontSize="small" />

            </IconButton>


            <IconButton>
              <ListIcon fontSize='small' style={{
                marginRight: 5,
              }} />

              <Typography style={{
                fontSize: 12,
                marginRight: 2,
                // marginLeft: 10,
                marginTop: 2
              }}>
                Group by
            </Typography>

              <ArrowDropDownIcon fontSize="small" />

            </IconButton>

            <div style={{
              marginLeft: 30
            }}>
              <IconButton>

                <VisibilityIcon fontSize='small' style={{
                  marginRight: 5,
                }} />

                <Typography style={{
                  fontSize: 12,
                  marginRight: 2,
                  // marginLeft: 10,
                  marginTop: 2
                }}>
                  View
                </Typography>
                <div style={{
                  marginLeft: 10
                }}>
                  <ListIcon fontSize="small" />
                  <AppsIcon fontSize="small" />

                </div>


              </IconButton>
            </div>


          </Grid>

        </div>
      </div>
    </div>

    </div>


  );


};
export default SearchBar;