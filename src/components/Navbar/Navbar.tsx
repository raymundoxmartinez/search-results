import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import TheatersOutlinedIcon from '@material-ui/icons/TheatersOutlined';
import TvOutlinedIcon from '@material-ui/icons/TvOutlined';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import VideogameAssetOutlinedIcon from '@material-ui/icons/VideogameAssetOutlined';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import classNames from 'classnames'
import Filterbar from '../Filterbar'
import useStyles from './useStyles'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { handleRemoveFilters, handleAddFilters } from './navbarSlice'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Drawer, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
const initialFilterValues = {
    'G': false,
    'PG': false,
    'PG-13': false,
    'R': false
}
const Navbar = () => {
    const [isFilterOn, setFilterStatus] = React.useState(false)
    const [filtersToAdd, setFiltersToAdd] = React.useState<Record<string, any>>(initialFilterValues)
    const [isDrawerOpen, setDrawerState] = useState(false)

    const classes = useStyles();
    const matchesDesktop = useMediaQuery('(min-width:800px)');
    const dispatch = useDispatch()

    const { filters } = useSelector(
        (state: any) => {
            return {
                filters: state.navbar.filters,
            }
        },
        shallowEqual
    )

    const handleOnChangeFilter = (event: any) => {
        const isFilterValueChecked = event.target.checked
        const filterValue = event.target.value
        if (isFilterValueChecked) {
            setFiltersToAdd({ ...filtersToAdd, [filterValue]: true })
        } else {
            setFiltersToAdd({ ...filtersToAdd, [filterValue]: false })
        }
    }

    const handleToggleFilterbar = () => {
        setFilterStatus(prevFilterStatus => !prevFilterStatus)
    }

    const handleApplyFilters = () => {
        debugger
        dispatch(handleAddFilters(filtersToAdd))
    }

    const handleClearFilters = () => {
        setFiltersToAdd(initialFilterValues)
        dispatch(handleRemoveFilters())
    }

    const toggleDrawer = () => {
        setDrawerState(prevDrawerState => !prevDrawerState)
    };

    let filterClass = classNames({
        [classes.filterbar]: isFilterOn
    })

    return (
        <div className={classes.root}>
            <AppBar position="static"
                className={classes.appBar}>
                {matchesDesktop &&
                    <>
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
                                <Button style={{ borderBottom: '5px solid black' }} color="inherit"
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
                            <Button
                                onClick={handleToggleFilterbar}
                                color="inherit"
                                endIcon={isFilterOn ? <ExpandLessIcon /> : <ExpandMoreOutlinedIcon />}
                            >Filter</Button> <Button color="inherit"
                                endIcon={<ExpandMoreOutlinedIcon />}
                            >Sorted By:Popularity</Button>
                        </Toolbar>
                    </>
                }
                {!matchesDesktop &&
                    (
                        <>
                            <Toolbar>
                                <div className={classes.titleContainer}>
                                    <Typography variant="h6" className={classes.title}
                                    >
                                        <strong>
                                            Search Results
                        </strong>
                                    </Typography>
                                </div>
                                <IconButton onClick={toggleDrawer}>
                                    <MenuIcon />
                                </IconButton>
                            </Toolbar>
                            <Toolbar disableGutters={true} className={classes.subToolbar}>
                                <Button
                                    onClick={handleToggleFilterbar}
                                    color="inherit"
                                    endIcon={isFilterOn ? <ExpandLessIcon /> : <ExpandMoreOutlinedIcon />}
                                >Filter</Button> <Button color="inherit"
                                    endIcon={<ExpandMoreOutlinedIcon />}
                                >Sorted By:Popularity</Button>
                            </Toolbar>
                            <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
                                <Button color="inherit">All</Button>
                                <Button style={{ borderBottom: '5px solid black' }} color="inherit"
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
                            </Drawer>
                        </>
                    )}
                <div className={filterClass} style={{ height: 100 }}>
                    {isFilterOn && <Filterbar
                        filters={filtersToAdd}
                        handleOnChangeFilter={handleOnChangeFilter}
                        handleApplyFilters={handleApplyFilters}
                        handleClearFilters={handleClearFilters}
                        handleToggleFilterbar={handleToggleFilterbar} />}
                </div>
            </AppBar>
        </div>
    );
}

export default Navbar