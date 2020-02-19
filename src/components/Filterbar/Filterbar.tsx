import React from 'react';
import { Toolbar, Button, IconButton, Icon } from '@material-ui/core';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import Close from '@material-ui/icons/Close';
import useStyles from './useStyles'


const Filterbar = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef: any = React.useRef(null);


    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };

    const handleClose = (event: any) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    function handleListKeyDown(event: any) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }
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
                    onClick={handleToggle}
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                >
                    Rating
            </Button>

                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                                        <MenuItem onClick={handleClose}>My account</MenuItem>
                                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
            <div className={classes.rightOptionsContainer}>
                <Button variant="outlined" style={{ backgroundColor: 'white', margin: 5 }}>
                    Clear Filters
                </Button>
                <Button variant="outlined" style={{ backgroundColor: 'white', margin: 5 }}>
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