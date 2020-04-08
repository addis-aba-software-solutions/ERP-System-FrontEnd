import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Employee Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Email"
            name="Email"
            label="Email"
            fullWidth
            autoComplete="Email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="PhoneNumber"
            name="PhoneNumber"
            label="PhoneNumber"
            fullWidth
            autoComplete="PhoneNumber"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Role"
            name="Role"
            label="Role"
            fullWidth
            autoComplete="Role"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="Location" name="Location" label="Location" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Type"
            name="Type"
            label="Recruitment Type"
            fullWidth
            autoComplete="Type"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Salary"
            name="Salary"
            label="Salary"
            fullWidth
            autoComplete="Salary"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}