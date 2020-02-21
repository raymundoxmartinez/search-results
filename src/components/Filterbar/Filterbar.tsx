import React from 'react';
import {
    Toolbar,
    Button,
    IconButton,
    Paper,
    Popper,
    MenuList,
    FormGroup,
    FormControlLabel,
    Checkbox,
    ClickAwayListener,
} from '@material-ui/core';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import Close from '@material-ui/icons/Close';

import useStyles from './useStyles'


const Filterbar = ({
    handleToggleFilterbar,
    handleOnChangeFilter,
    handleApplyFilters,
    handleClearFilters,
    filters
}: any) => {
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

    const handleListKeyDown = (event: any) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }
    return (
        <Toolbar className={classes.toolbar}>
            <div className={classes.leftOptionsContainer}>
                <Button startIcon={<ExpandMoreOutlinedIcon />}>
                    Release Year
                </Button>
                <Button startIcon={<ExpandMoreOutlinedIcon />}>
                    Genre
                 </Button>
                <Button
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
                                    <FormGroup className={classes.formGroup}>
                                        <FormControlLabel
                                            className={classes.formControlLabel}
                                            control={
                                                <Checkbox
                                                    value="G"
                                                    onChange={handleOnChangeFilter}
                                                />
                                            }
                                            label="G"
                                            checked={filters['G']}
                                        />
                                        <FormControlLabel
                                            className={classes.formControlLabel}
                                            control={
                                                <Checkbox
                                                    onChange={handleOnChangeFilter}
                                                    checked={filters['PG']}
                                                    value="PG"
                                                />
                                            }
                                            label="PG"
                                        />
                                        <FormControlLabel
                                            className={classes.formControlLabel}
                                            control={
                                                <Checkbox
                                                    onChange={handleOnChangeFilter}
                                                    checked={filters['PG-13']}
                                                    value="PG-13"
                                                />
                                            }
                                            label="PG-13"
                                        />
                                        <FormControlLabel
                                            className={classes.formControlLabel}
                                            control={
                                                <Checkbox
                                                    onChange={handleOnChangeFilter}
                                                    checked={filters['R']}
                                                    value="R"
                                                />
                                            }
                                            label="R"
                                        />
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
                    variant="outlined"
                    className={classes.clearFiltersBtn}
                >
                    Clear Filters
                </Button>
                <Button
                    onClick={handleApplyFilters}
                    variant="outlined"
                    className={classes.applyFiltersBtn}
                >
                    Apply Filters
            </Button>
                <IconButton onClick={handleToggleFilterbar} >
                    <Close />
                </IconButton>
            </div>
        </Toolbar>
    );
}

export default Filterbar