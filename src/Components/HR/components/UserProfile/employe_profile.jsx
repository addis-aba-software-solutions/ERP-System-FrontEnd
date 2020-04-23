import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ProfilePicture from '../../../../Assets/hello.jpg'
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';

import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';
import { Form, FormGroup, Label, Input, Table } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile'
import UserTable from '../UsersTable/UsersTable';
import API from '../../../../api/API'

const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        display: 'flex',
        justify: 'flex-start',
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 350,
            marginLeft: 'auto',
            marginRight: 'auto',

        },
    },
    layout2: {
        display: 'flex',
        justify: 'flex-start',
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 800,
            marginLeft: 'auto',
            marginRight: 'auto',

        },
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

    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
    card: {
        borderRadius: 10
    }
});

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            singleEmployee: []
        }
    }

    componentDidMount = () => {
      
        axios.request({
            method: 'GET',
            url: API + 'employe/1',
            responseType: 'json',
            headers: {
              "Content-Type": "application/json"
            },
          })
            .then((response) => {
                this.setState({
                    singleEmployee:response.data
                })
             console.log(response.data)
            })
            .catch(error => {
              console.log(error);
            })
    }

    render() {

        const { classes } = this.props;
        const employeeInfos = this.state.singleEmployee;
        

        return (
            <div>
                {
                    this.state.singleEmployee.length !== 0 &&
                    <div style={{
                        backgroundColor: '#EBEBEB',
                        height: '100vh',
                        padding: 30,
                    }}>

                        <React.Fragment >
                            <CssBaseline />
                            <Grid container xs={12} style={{
                                display: 'flex',
                                justifyContent: 'center',
                                paddingleft: 120,
                                paddingRight: 120,
                                paddingBottom: 40
                                // marginLeft: 180,
                            }}>
                                <Grid style={{
                                    paddingLeft: 100

                                }}>
                                    <Grid container style={{
                                        marginTop: 30

                                    }} >
                                        <Grid style={{
                                            display: 'flex',
                                            justify: 'flex-start',
                                        }}>
                                            <Typography>
                                                <h3><b>PROFILE</b></h3>
                                            </Typography>

                                        </Grid>
                                        <Grid style={{
                                            marginLeft: 150

                                        }}>
                                            <Button
                                                className={classes.button}

                                                startIcon={<EditIcon />

                                                }
                                            >
                                                EDIT
                                          </Button>

                                        </Grid>
                                    </Grid>


                                    <main className={classes.layout}>
                                        <Grid xs={12}>
                                            <Card className={classes.card}>
                                                <CardActionArea>

                                                    <Typography variant="h6" component="p" style={{
                                                        padding: 10
                                                    }}>
                                                        <b>Personal Information</b>
                                                    </Typography>
                                                    <Divider></Divider>
                                                    <CardMedia
                                                        component="img"
                                                        alt="Profile Picture"
                                                        height="140"
                                                        image={ProfilePicture}
                                                        title="Profile Picture"
                                                        style={{
                                                            padding: 10,
                                                            height: 'auto'
                                                        }}
                                                    />
                                                    <Divider></Divider>

                                                    <CardContent >
                                                        <Grid container xs={12} style={{
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            paddingLeft: 20,
                                                            paddingRight: 20
                                                        }}>
                                                            <Grid>
                                                                <Typography gutterBottom variant="body1" component="h3" style={{
                                                                    display: 'flex',
                                                                    justifyContent: 'flex-left'
                                                                }}>
                                                                    <b>NAME</b>
                                                                </Typography>
                                                            </Grid>
                                                            <Grid >

                                                                <Typography gutterBottom variant="body1" component="h3" style={{
                                                                    display: 'flex',
                                                                    justifyContent: 'flex-right',

                                                                }}>
                                                                    {/* // Yelekal Solomon */}
                                                                    {employeeInfos.firstName}&nbsp;{employeeInfos.lastName}
                                                                </Typography>

                                                            </Grid>
                                                        </Grid>
                                                        <Grid container xs={12} style={{
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            paddingLeft: 20,
                                                            paddingRight: 70
                                                        }}>
                                                            <Grid>
                                                                <Typography gutterBottom variant="body1" component="h3" style={{
                                                                    display: 'flex',
                                                                    justifyContent: 'flex-left'
                                                                }}>
                                                                    <b>AGE</b>
                                                                </Typography>
                                                            </Grid>
                                                            <Grid >

                                                                <Typography gutterBottom variant="body1" component="h3" style={{
                                                                    display: 'flex',
                                                                    justifyContent: 'flex-center'
                                                                }}>
                                                                    67
                                                                </Typography>

                                                            </Grid>
                                                        </Grid>
                                                        <Grid container xs={12} style={{
                                                            display: 'flex',
                                                            justifyContent: 'space-between',

                                                        }}>
                                                            <Grid>
                                                                <Typography gutterBottom variant="body1" component="h3" style={{
                                                                    display: 'flex',
                                                                    justifyContent: 'flex-left'
                                                                }}>
                                                                    <b>POSITION</b>
                                                                </Typography>
                                                            </Grid>
                                                            <Grid >

                                                                <Typography gutterBottom variant="body1" component="h3" style={{
                                                                    display: 'flex',
                                                                    justifyContent: 'flex-center'
                                                                }}>
                                                                    {/* // Senior Accountant */}
                                                                    {employeeInfos.role}
                                                                </Typography>

                                                            </Grid>
                                                        </Grid>
                                                        <Grid container xs={12} style={{
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            // paddingLeft: 10,
                                                            // paddingRight: 10
                                                        }}>
                                                            <Grid>
                                                                <Typography gutterBottom variant="body1" component="h3" style={{
                                                                    display: 'flex',
                                                                    justifyContent: 'flex-left'
                                                                }}>
                                                                    <b>LOCATION</b>
                                                                </Typography>
                                                            </Grid>
                                                            <Grid >

                                                                <Typography gutterBottom variant="body1" component="h3" style={{
                                                                    display: 'flex',
                                                                    justifyContent: 'flex-center'
                                                                }}>
                                                                    {/* GurdSholla Warehouse */}
                                                                    {employeeInfos.country}&nbsp;{employeeInfos.region}&nbsp;{employeeInfos.city}
                                                                </Typography>

                                                            </Grid>
                                                        </Grid>
                                                        <Grid container xs={12} style={{
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            // paddingLeft: 10,
                                                            paddingRight: 40
                                                        }}>
                                                            <Grid>
                                                                <Typography gutterBottom variant="body1" component="h3" style={{
                                                                    display: 'flex',
                                                                    justifyContent: 'flex-left'
                                                                }}>
                                                                    <b>EXPERIENCE</b>
                                                                </Typography>
                                                            </Grid>
                                                            <Grid >

                                                                <Typography gutterBottom variant="body1" component="h3" style={{
                                                                    display: 'flex',
                                                                    justifyContent: 'flex-center'
                                                                }}>
                                                                    15 Years
                                                                </Typography>

                                                            </Grid>
                                                        </Grid>
                                                        <Grid container xs={12} style={{
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            // paddingLeft: 10,
                                                            paddingRight: 60
                                                        }}>
                                                            <Grid>
                                                                <Typography gutterBottom variant="body1" component="h3" style={{
                                                                    display: 'flex',
                                                                    justifyContent: 'flex-left'
                                                                }}>
                                                                    <b>DEGREE</b>
                                                                </Typography>
                                                            </Grid>
                                                            <Grid >

                                                                <Typography gutterBottom variant="body1" component="h3" style={{
                                                                    display: 'flex',
                                                                    justifyContent: 'flex-center'
                                                                }}>
                                                                    MBA
                                                                </Typography>

                                                            </Grid>
                                                        </Grid>


                                                    </CardContent>
                                                </CardActionArea>
                                                <CardActions>

                                                    <Box style={{
                                                        height: 10
                                                    }}>

                                                    </Box>
                                                </CardActions>
                                            </Card>

                                        </Grid>
                                    </main>
                                </Grid>
                                <Grid>
                                </Grid>


                                <main className={classes.layout2}>
                                    <Grid xs={12} >
                                        <Box style={{
                                            height: 100
                                        }}>

                                        </Box>


                                        <Card className={classes.card}>
                                            <CardActionArea>

                                                <Typography variant="h6" component="p" style={{
                                                    marginTop: 10,
                                                    padding: 10
                                                }}>
                                                    More About <b>{employeeInfos.firstName}</b>
                                                </Typography>
                                                <Divider></Divider>

                                                <Grid container xs={12} style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    padding: 40
                                                }}>
                                                    <Grid>

                                                        <CardContent >
                                                            <Grid container xs={12} style={{
                                                                display: 'flex',
                                                                justifyContent: 'space-between',
                                                            }}>
                                                                <Grid>
                                                                    <Typography gutterBottom variant="body1" component="h3" style={{
                                                                        display: 'flex',
                                                                        justifyContent: 'flex-left'
                                                                    }}>
                                                                        <b>NAME</b>
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid >

                                                                    <Typography gutterBottom variant="body1" component="h3" style={{
                                                                        display: 'flex',
                                                                        justifyContent: 'flex-right',

                                                                    }}>
                                                                        {/* Yelekal Solomon */}

                                                                        {employeeInfos.firstName}&nbsp;{employeeInfos.lastName}
                                                                    </Typography>

                                                                </Grid>
                                                            </Grid>
                                                            <Grid container xs={12} style={{
                                                                display: 'flex',
                                                                justifyContent: 'space-between',

                                                            }}>
                                                                <Grid>
                                                                    <Typography gutterBottom variant="body1" component="h3" style={{
                                                                        display: 'flex',
                                                                        justifyContent: 'flex-left'
                                                                    }}>
                                                                        <b>AGE</b>
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid >

                                                                    <Typography gutterBottom variant="body1" component="h3" style={{
                                                                        display: 'flex',
                                                                        justifyContent: 'flex-center'
                                                                    }}>
                                                                        67
                                        </Typography>

                                                                </Grid>
                                                            </Grid>
                                                            <Grid container xs={12} style={{
                                                                display: 'flex',
                                                                justifyContent: 'space-between',

                                                            }}>
                                                                <Grid>
                                                                    <Typography gutterBottom variant="body1" component="h3" style={{
                                                                        display: 'flex',
                                                                        justifyContent: 'flex-left'
                                                                    }}>
                                                                        <b>POSITION</b>
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid >

                                                                    <Typography gutterBottom variant="body1" component="h3" style={{
                                                                        display: 'flex',
                                                                        justifyContent: 'flex-center'
                                                                    }}>
                                                                        {/* Senior Accountant */}

                                                                        {employeeInfos.role}
                                                                    </Typography>

                                                                </Grid>
                                                            </Grid>
                                                            <Grid container xs={12} style={{
                                                                display: 'flex',
                                                                justifyContent: 'space-between',

                                                            }}>
                                                                <Grid>
                                                                    <Typography gutterBottom variant="body1" component="h3" style={{
                                                                        display: 'flex',
                                                                        justifyContent: 'flex-left'
                                                                    }}>
                                                                        <b>LOCATION</b>
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid >

                                                                    <Typography gutterBottom variant="body1" component="h3" style={{
                                                                        display: 'flex',
                                                                        justifyContent: 'flex-center'
                                                                    }}>
                                                                        {/* GurdSholla Warehouse */}

                                                                        {employeeInfos.country}&nbsp;{employeeInfos.region}&nbsp;{employeeInfos.city}
                                                                    </Typography>

                                                                </Grid>
                                                            </Grid>
                                                            <Grid container xs={12} style={{
                                                                display: 'flex',
                                                                justifyContent: 'space-between',

                                                            }}>
                                                                <Grid>
                                                                    <Typography gutterBottom variant="body1" component="h3" style={{
                                                                        display: 'flex',
                                                                        justifyContent: 'flex-left'
                                                                    }}>
                                                                        <b>EXPERIENCE</b>
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid >

                                                                    <Typography gutterBottom variant="body1" component="h3" style={{
                                                                        display: 'flex',
                                                                        justifyContent: 'flex-center'
                                                                    }}>
                                                                        15 Years
                                        </Typography>

                                                                </Grid>
                                                            </Grid>

                                                        </CardContent>

                                                    </Grid>
                                                    <Grid>

                                                        <CardContent >
                                                            <Grid container xs={12} style={{
                                                                display: 'flex',
                                                                justifyContent: 'space-between',

                                                            }}>
                                                                <Grid>
                                                                    <Typography gutterBottom variant="body1" component="h3" style={{
                                                                        display: 'flex',
                                                                        justifyContent: 'flex-left'
                                                                    }}>
                                                                        <b>PHONE</b>
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid >

                                                                    <Typography gutterBottom variant="body1" component="h3" style={{
                                                                        display: 'flex',
                                                                        justifyContent: 'flex-right',

                                                                    }}>
                                                                        {employeeInfos.telephone}
                                                                    </Typography>

                                                                </Grid>
                                                            </Grid>
                                                            <Grid container xs={12} style={{
                                                                display: 'flex',
                                                                justifyContent: 'space-between',

                                                            }}>
                                                                <Grid>
                                                                    <Typography gutterBottom variant="body1" component="h3" style={{
                                                                        display: 'flex',
                                                                        justifyContent: 'flex-left'
                                                                    }}>
                                                                        <b>CAREER LEVEL</b>
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid >

                                                                    <Typography gutterBottom variant="body1" component="h3" style={{
                                                                        display: 'flex',
                                                                        justifyContent: 'flex-center'
                                                                    }}>
                                                                        {/* 67 */}
                                                                        {employeeInfos.level}
                                                                    </Typography>

                                                                </Grid>
                                                            </Grid>
                                                            <Grid container xs={12} style={{
                                                                display: 'flex',
                                                                justifyContent: 'space-between',

                                                            }}>
                                                                <Grid>
                                                                    <Typography gutterBottom variant="body1" component="h3" style={{
                                                                        display: 'flex',
                                                                        justifyContent: 'flex-left'
                                                                    }}>
                                                                        <b>POSITION</b>
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid >

                                                                    <Typography gutterBottom variant="body1" component="h3" style={{
                                                                        display: 'flex',
                                                                        justifyContent: 'flex-center'
                                                                    }}>
                                                                        {/* Senior Accountant */}
                                                                        {employeeInfos.role}
                                                                    </Typography>

                                                                </Grid>
                                                            </Grid>
                                                            <Grid container xs={12} style={{
                                                                display: 'flex',
                                                                justifyContent: 'space-between',

                                                            }}>
                                                                <Grid>
                                                                    <Typography gutterBottom variant="body1" component="h3" style={{
                                                                        display: 'flex',
                                                                        justifyContent: 'flex-left'
                                                                    }}>
                                                                        <b>LOCATION</b>
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid >

                                                                    <Typography gutterBottom variant="body1" component="h3" style={{
                                                                        display: 'flex',
                                                                        justifyContent: 'flex-center'
                                                                    }}>
                                                                        {/* GurdSholla Warehouse */}

                                                                        {employeeInfos.country}&nbsp;{employeeInfos.region}&nbsp;{employeeInfos.city}
                                                                    </Typography>

                                                                </Grid>
                                                            </Grid>
                                                            <Grid container xs={12} style={{
                                                                display: 'flex',
                                                                justifyContent: 'space-between',

                                                            }}>
                                                                <Grid>
                                                                    <Typography gutterBottom variant="body1" component="h3" style={{
                                                                        display: 'flex',
                                                                        justifyContent: 'flex-left'
                                                                    }}>
                                                                        <b>EXPERIENCE</b>
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid >

                                                                    <Typography gutterBottom variant="body1" component="h3" style={{
                                                                        display: 'flex',
                                                                        justifyContent: 'flex-center'
                                                                    }}>
                                                                        15 Years
                                        </Typography>

                                                                </Grid>
                                                            </Grid>


                                                        </CardContent>

                                                    </Grid>

                                                </Grid>

                                                <Divider></Divider>

                                                <Typography style={{
                                                    padding: 10
                                                }}>
                                                    The Random Word Generator is a tool to help you create a list of random words. There are many reasons one might be interested in doing this, and you're likely here because you're interested in creating a random word list. This tool can help you do exactly that.
                                                    The tool is easy to use. All you need to do is choose the number of words you want to create (the default is five, but you can input any number you'd like) and the type of words you want. You can choose from all words, verbs only, nouns only or adjective only depending on which best meets your needs.
                                                    Below you'll find some of the common ways this tool can be used.
                                            </Typography>



                                            </CardActionArea>
                                            <CardActions>
                                                <Box style={{
                                                    height: 10
                                                }}>

                                                </Box>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                </main>
                            </Grid>
                            <Typography>
                                <h3>Recent Activities Of <b>{employeeInfos.firstName}</b></h3>
                            </Typography>

                            <Button> <Link to="/UserTable"
                            >Go Back</Link></Button>



                        </React.Fragment>
                    </div>
                }
            </div>
        )
    }
}
export default withStyles(styles)(Profile);