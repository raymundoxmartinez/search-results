import React from 'react';
import { Toolbar, Button, IconButton } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import Close from '@material-ui/icons/Close';
import useStyles from './useStyles'


const Filterbar = ({ handleToggleFilterbar, handleOnChangeFilter, handleApplyFilters, handleClearFilters, filters }: any) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef: any = React.useRef(null);
    const [arrowRef, setArrowRef] = React.useState(null);


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
                >
                    Rating
            </Button>
                <Popper
                    className={classes.popper}
                    open={open}
                    placement='bottom'
                    anchorEl={anchorRef.current}
                    modifiers={{
                        arrow: {
                            enabled: true,
                            element: arrowRef,
                        },
                    }}
                    transition
                >
                    <>
                        {/* 
                             // @ts-ignore */}
                        {true && <span className={classes.arrow} ref={setArrowRef} />}
                        <Paper >
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open}
                                    onKeyDown={handleListKeyDown}>
                                    <FormGroup style={{ padding: 5 }}>
                                        <FormControlLabel style={{ height: 20 }} control={<Checkbox value="G" onChange={handleOnChangeFilter} />} label="G"
                                            checked={filters['G']}
                                        />
                                        <FormControlLabel style={{ height: 20 }} control={<Checkbox
                                            onChange={handleOnChangeFilter}
                                            checked={filters['PG']}
                                            value="PG" />} label="PG" />
                                        <FormControlLabel style={{ height: 20 }} control={<Checkbox
                                            onChange={handleOnChangeFilter}
                                            checked={filters['PG-13']}
                                            value="PG-13" />} label="PG-13" />
                                        <FormControlLabel style={{ height: 20 }} control={<Checkbox
                                            onChange={handleOnChangeFilter}
                                            checked={filters['R']}
                                            value="R" />} label="R" />

                                    </FormGroup>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </>
                </Popper>
            </div>
            <div className={classes.rightOptionsContainer}>
                <Button
                    onClick={handleClearFilters}
                    variant="outlined" style={{ backgroundColor: 'white', margin: 5 }}>
                    Clear Filters
                </Button>
                <Button
                    onClick={handleApplyFilters}
                    variant="outlined" style={{ backgroundColor: 'white', margin: 5 }}>
                    Apply Filters
            </Button>
                <IconButton onClick={handleToggleFilterbar} color="inherit">
                    <Close />
                </IconButton>
            </div>
        </Toolbar>
    );
}

export default Filterbar