import makeStyles from '@material-ui/core/styles/makeStyles'
const useStyles = makeStyles((theme: any) => {
    return {
        root:{
            width: '90%',
        },
        childrenContainer: {
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            minWidth: 320,
            // maxWidth: 800,
        },
    }
})
export default useStyles
