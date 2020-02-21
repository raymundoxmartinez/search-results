import makeStyles from '@material-ui/core/styles/makeStyles'
const useStyles = makeStyles(() => {
    return {
        root: {
            width: '90%',
        },
        childrenContainer: {
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            minWidth: 320,
        },
    }
})
export default useStyles
