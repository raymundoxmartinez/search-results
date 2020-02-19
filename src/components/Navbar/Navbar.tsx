import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import TheatersOutlinedIcon from '@material-ui/icons/TheatersOutlined';
import TvOutlinedIcon from '@material-ui/icons/TvOutlined';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import VideogameAssetOutlinedIcon from '@material-ui/icons/VideogameAssetOutlined';
import Filterbar from '../Filterbar'
import useStyles from './useStyles'


const Navbar = () => {
    const [isFilterOn, setFilterStatus] = React.useState(true)
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static"
                className={classes.appBar}>
                <Toolbar>
                    <div className={classes.titleContainer}>
                        <Typography variant="h6" className={classes.title}
                        >
                            <strong>
                                Search Results
                        </strong>
                        </Typography>
                    </div>
                    <div className={classes.menuOptions} >
                        <Button color="inherit">All</Button>
                        <Button style={{borderBottom:'5px solid black'}} color="inherit"
                            startIcon={<TheatersOutlinedIcon />}
                        >Movies</Button>
                        <Button color="inherit"
                            startIcon={<TvOutlinedIcon />}
                        >TV shows</Button>
                        <Button color="inherit"
                            startIcon={<VideogameAssetOutlinedIcon />}
                        >Games & Apps</Button>
                        <Button color="inherit"
                            startIcon={<SmsOutlinedIcon />}
                        >Blog</Button>
                        <Button color="inherit">Other</Button>
                    </div>
                </Toolbar>
                <Toolbar disableGutters={true} className={classes.subToolbar}>
                    <Button color="inherit"
                        endIcon={<ExpandMoreOutlinedIcon />}
                    >Filter</Button> <Button color="inherit"
                        endIcon={<ExpandMoreOutlinedIcon />}
                    >Sorted By:Popularity</Button>
                </Toolbar>
                {isFilterOn && <Filterbar />}
            </AppBar>
        </div>
    );
}

export default Navbar