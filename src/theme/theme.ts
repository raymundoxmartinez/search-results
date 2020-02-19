import { createMuiTheme } from '@material-ui/core/styles'

// Add some custom theme stuff if needed

export default createMuiTheme({
    typography: {
        fontFamily: [
            '"Segoe UI Symbo l"',
            '-apple-system',
            'sans-serif',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
        ].join(','),
    },
    palette: {
        background: {
            default: '#fff'
        },
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#65E8A1',
        },
    },
})
