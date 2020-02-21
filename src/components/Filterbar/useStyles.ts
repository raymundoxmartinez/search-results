import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    toolbar: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    leftOptionsContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexGrow: 1
    },
    rightOptionsContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexGrow: 1
    },
    popper: {
        '&[x-placement*="bottom"] $arrow': {
            top: 0,
            left: 0,
            marginTop: '-0.9em',
            width: '3em',
            height: '1em',
            '&::before': {
                borderWidth: '0 1em 1em 1em',
                borderColor: `transparent transparent ${theme.palette.background.paper} transparent`,
            },
        },
    },
    arrow: {
        position: 'absolute',
        fontSize: 7,
        width: '3em',
        height: '3em',
        '&::before': {
            content: '""',
            margin: 'auto',
            display: 'block',
            width: 0,
            height: 0,
            borderStyle: 'solid',
        }
    },
    formGroup: {
        padding: 5,
    },
    formControlLabel: {
        height: 20
    },
    clearFiltersBtn: {
        backgroundColor: 'white',
        margin: 5
    },
    applyFiltersBtn: {
        backgroundColor: 'white',
        margin: 5
    },
}));

export default useStyles