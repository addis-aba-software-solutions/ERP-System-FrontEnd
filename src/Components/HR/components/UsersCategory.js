import React from 'react';
import { makeStyles, Divider, IconButton, Grid, Typography } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import SearchBar from '../../SearchBar/SearchBar';
import Level from './Level'
// import UsersTable from './UsersListTable'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import VisibilityIcon from '@material-ui/icons/Visibility'



const columns = [
    { id: 'ID', label: 'ID', minWidth: 80 },
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
        id: 'population',
        label: 'Population',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString(),
    },
    {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString(),
    },
    {
        id: 'density',
        label: 'Density',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'Action',
        label: 'Action',
        minWidth: 100,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
];

function createData(ID, name, code, population, size, Action) {
    const density = population / size;
    return { ID, name, code, population, size, density, Action };
}

const rows = [
    createData('#', 'India', 'IN', 1324171354, 3287263, <IconButton>
        <VisibilityIcon />
    </IconButton>),
    createData('#', 'China', 'CN', 1403500365, 9596961, <IconButton>
        <VisibilityIcon />
    </IconButton>),
    createData('#', 'Italy', 'IT', 60483973, 301340, <IconButton>
        <VisibilityIcon />
    </IconButton>),
    createData('#', 'United States', 'US', 327167434, 9833520, <IconButton>
        <VisibilityIcon />
    </IconButton>),
    createData('#', 'Canada', 'CA', 37602103, 9984670, <IconButton>
        <VisibilityIcon />
    </IconButton>),
    createData('#', 'Australia', 'AU', 25475400, 7692024, <IconButton>
        <VisibilityIcon />
    </IconButton>),
    createData('#', 'Germany', 'DE', 83019200, 357578, <IconButton>
        <VisibilityIcon />
    </IconButton>),
    createData('#', 'China', 'CN', 1403500365, 9596961, <IconButton>
        <VisibilityIcon />
    </IconButton>),
    createData('#', 'Italy', 'IT', 60483973, 301340, <IconButton>
        <VisibilityIcon />
    </IconButton>),
    createData('#', 'United States', 'US', 327167434, 9833520, <IconButton>
        <VisibilityIcon />
    </IconButton>),
    createData('#', 'Canada', 'CA', 37602103, 9984670, <IconButton>
        <VisibilityIcon />
    </IconButton>),
    createData('#', 'Australia', 'AU', 25475400, 7692024, <IconButton>
        <VisibilityIcon />
    </IconButton>),
    createData('#', 'Germany', 'DE', 83019200, 357578, <IconButton>
        <VisibilityIcon />
    </IconButton>), createData('#', 'China', 'CN', 1403500365, 9596961, <IconButton>
        <VisibilityIcon />
    </IconButton>),
    createData('#', 'Italy', 'IT', 60483973, 301340, <IconButton>
        <VisibilityIcon />
    </IconButton>),
    createData('#', 'United States', 'US', 327167434, 9833520, <IconButton>
        <VisibilityIcon />
    </IconButton>),
    createData('#', 'Canada', 'CA', 37602103, 9984670, <IconButton>
        <VisibilityIcon />
    </IconButton>),
    createData('#', 'Australia', 'AU', 25475400, 7692024, <IconButton>
        <VisibilityIcon />
    </IconButton>),
    createData('#', 'Germany', 'DE', 83019200, 357578, <IconButton>
        <VisibilityIcon />
    </IconButton>),

];





const useStyles = makeStyles((theme) => ({
    root: {
        padding: 20
    },

    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    card: {
        borderRadius: 10
    },
    spacer: {
        margin: 5
    },
    header: {
        margin: 10,
    }
}));


export default function UsersCategory() {

    const classes = useStyles();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div >
            <React.Fragment >
                <CssBaseline />
                <div style={{
                    margin: 20
                }}>
                    <Grid container display='flex' justify='space-between' className={classes.header}>
                    <Grid item style={{
                        paddingLeft:50,
                        // marginTop:5
                    }}>
                        <Typography variant='h4' color='textSecondary'>
                            <b>Employee List</b>
                        </Typography>
                        <Typography variant='h6'>
                            Random Selection
                        </Typography>
                        <Typography variant='h6'>
                            Finance
                        </Typography>
                        
                        </Grid>
                        <Grid item style={{
                            marginTop: 15,
                            marginRight:20
                        }}>
                        <SearchBar />
                        </Grid>



                    </Grid>
                </div>

                <Divider className={classes.spacer}></Divider>
                <Level />
                <Divider></Divider>

                <main className={classes.root}>
                    {/* <div className={classes.appbarShift}></div> */}
                    <Paper className={classes.root}>
                        <TableContainer className={classes.container}>
                            <Table stickyHeader className={classes.table} aria-label="sticky table">
                                <TableHead >
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{ minWidth: column.minWidth }}
                                            >
                                                <b>{column.label}</b>
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            {column.format && typeof value === 'number' ? column.format(value) : value}
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </Paper>

                </main>
            </React.Fragment>
        </div>

    )
}