import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: 10
    },
    media: {
        height: 375,
        width: 250
    },
    listRoot: {
        display: 'flex',
        margin: 10,
        width:'100%'
    },
    listMedia: {
        height: 75,
        width: 50
    },
    actionArea: {
        display: 'flex',
        justifyContent:'flex-start'
    }
});

export default useStyles