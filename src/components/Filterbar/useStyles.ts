import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    toolbar: {
        display: 'flex'
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
}));

export default useStyles