import React from 'react';
import { Toolbar, Button, IconButton, Icon } from '@material-ui/core';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import Close from '@material-ui/icons/Close';
import useStyles from './useStyles'


const Filterbar = () => {
    const classes = useStyles();

    return (
        <Toolbar className={classes.toolbar}>
            <div className={classes.leftOptionsContainer}>
                <Button color="inherit"
                    startIcon={<ExpandMoreOutlinedIcon />}
                >
                    Release Year
            </Button>
                <Button color="inherit"
                    startIcon={<ExpandMoreOutlinedIcon />}
                >
                    Genre
            </Button>
                <Button color="inherit"
                    startIcon={<ExpandMoreOutlinedIcon />}
                >
                    Rating
            </Button>
            </div>
            <div className={classes.rightOptionsContainer}>
                <Button color="inherit" variant="contained">
                    Clear Filters
                </Button>
                <Button color="inherit" variant="contained">
                    Apply Filters
            </Button>
                <IconButton color="inherit">
                    <Close />
                </IconButton>
            </div>
        </Toolbar>
    );
}

export default Filterbar