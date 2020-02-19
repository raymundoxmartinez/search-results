import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        // height:195,
        // paddingTop:35
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        fontSize: 45,
        maxWidth: 200,
        lineHeight: 'normal'
    },
    appBar: {
        height: 250,
        paddingTop: 30
    },
    titleContainer: {
        flexGrow: 1
    },
    menuOptions: {
        display: 'flex',
        height: '100%',
        alignItems: 'flex-end'
    },
    subToolbar: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
}));

export default useStyles