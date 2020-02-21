import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
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
        paddingTop: 30,
        backgroundColor: 'white',
        color: 'black',
        boxShadow: 'none'
    },
    appBarGrow:{
        height: 350,
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
    },
    filterbarHidden: {
        visibility: 'hidden'
    },
    filterbarNone: {
        display: 'none'
    },
    selectedMenuItem: {
        borderBottom: '5px solid black'
    },
    filterbarContainer: {
        height: 100
    }
}));

export default useStyles