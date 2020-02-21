import React, { useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import classNames from 'classnames'
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Drawer,
    IconButton,
    useMediaQuery
} from '@material-ui/core';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewListOutlinedIcon from '@material-ui/icons/ViewListOutlined';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import ViewComfyOutlinedIcon from '@material-ui/icons/ViewComfyOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import TheatersOutlinedIcon from '@material-ui/icons/TheatersOutlined';
import TvOutlinedIcon from '@material-ui/icons/TvOutlined';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import VideogameAssetOutlinedIcon from '@material-ui/icons/VideogameAssetOutlined';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import MenuIcon from '@material-ui/icons/Menu';

import Filterbar from '../Filterbar'
import useStyles from './useStyles'

import {
    handleRemoveFilters,
    handleAddFilters,
    handleTurnOffGridView,
    handleTurnOnGridView
} from './navbarSlice'

const initialFilterValues = {
    'G': false,
    'PG': false,
    'PG-13': false,
    'R': false
}
const Navbar = () => {
    const [isFilterOn, setFilterStatus] = React.useState(false)
    const [isDrawerOpen, setDrawerState] = useState(false)
    const [filtersToAdd, setFiltersToAdd] = React.useState<Record<string, any>>(initialFilterValues)

    const classes = useStyles();
    const matchesDesktop = useMediaQuery('(min-width:800px)');
    const dispatch = useDispatch()


    const { isGridViewOn } = useSelector((state: any) => {
        return { isGridViewOn: state.navbar.isGridViewOn }
    }, shallowEqual)

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

    const _handleTurnOffGridView = () => {
        dispatch(handleTurnOffGridView())
    }
    const _handleTurnOnGridView = () => {
        dispatch(handleTurnOnGridView())
    }

    const handleApplyFilters = () => {
        dispatch(handleAddFilters(filtersToAdd))
    }

    const handleClearFilters = () => {
        setFiltersToAdd(initialFilterValues)
        dispatch(handleRemoveFilters())
    }

    const toggleDrawer = () => {
        setDrawerState(prevDrawerState => !prevDrawerState)
    };

    const filterClass = classNames({
        [classes.filterbarHidden]: !isFilterOn && matchesDesktop,
        [classes.filterbarNone]: !isFilterOn && !matchesDesktop,
        [classes.filterbarContainer]: true
    })
    const appBarClass = classNames({
        [classes.appBar]: true,
        [classes.appBarGrow]: isFilterOn && !matchesDesktop,
    })

    let renderedMenu
    if (matchesDesktop) {
        renderedMenu = (
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
                        <Button >All</Button>
                        <Button
                            className={classes.selectedMenuItem}
                            startIcon={<TheatersOutlinedIcon />}
                        >
                            Movies
                        </Button>
                        <Button startIcon={<TvOutlinedIcon />}>
                            TV shows
                        </Button>
                        <Button startIcon={<VideogameAssetOutlinedIcon />}>Games & Apps</Button>
                        <Button startIcon={<SmsOutlinedIcon />}>Blog</Button>
                        <Button >Other</Button>
                        <IconButton onClick={_handleTurnOnGridView}>
                            {isGridViewOn ? <ViewComfyIcon /> : <ViewComfyOutlinedIcon />}
                        </IconButton>
                        <IconButton onClick={_handleTurnOffGridView}>
                            {isGridViewOn ? <ViewListOutlinedIcon /> : <ViewListIcon />}

                        </IconButton>
                    </div>
                </Toolbar>
                <Toolbar disableGutters={true} className={classes.subToolbar}>
                    <Button
                        onClick={handleToggleFilterbar}
                        endIcon={isFilterOn ? <ExpandLessIcon /> : <ExpandMoreOutlinedIcon />}
                    >
                        Filter
                    </Button>
                    <Button
                        endIcon={<ExpandMoreOutlinedIcon />}
                    >
                        Sorted By:Popularity
                    </Button>
                </Toolbar>
            </>
        )
    } else {
        renderedMenu = (
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
                    <IconButton onClick={_handleTurnOnGridView}>
                        {isGridViewOn ? <ViewComfyIcon /> : <ViewComfyOutlinedIcon />}
                    </IconButton>
                    <IconButton onClick={_handleTurnOffGridView}>
                        {isGridViewOn ? <ViewListOutlinedIcon /> : <ViewListIcon />}

                    </IconButton>
                    <Button
                        onClick={handleToggleFilterbar}

                        endIcon={isFilterOn ? <ExpandLessIcon /> : <ExpandMoreOutlinedIcon />}
                    >
                        Filter
                    </Button>
                    <Button
                        endIcon={<ExpandMoreOutlinedIcon />}
                    >
                        Sorted By:Popularity
                    </Button>
                </Toolbar>
                <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
                    <Button >All</Button>
                    <Button
                        className={classes.selectedMenuItem}
                        startIcon={<TheatersOutlinedIcon />}
                    >
                        Movies
                    </Button>
                    <Button startIcon={<TvOutlinedIcon />}>TV shows</Button>
                    <Button startIcon={<VideogameAssetOutlinedIcon />}>Games & Apps</Button>
                    <Button startIcon={<SmsOutlinedIcon />}>Blog</Button>
                    <Button >Other</Button>
                </Drawer>
            </>
        )
    }

    return (
        <div className={classes.root}>
            <AppBar position="static"
                className={appBarClass}>
                {renderedMenu}
                <div className={filterClass}>
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