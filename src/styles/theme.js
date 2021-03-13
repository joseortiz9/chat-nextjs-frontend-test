import { createMuiTheme } from '@material-ui/core/styles';
import {getColorWithOpacity} from "../utils/colors";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2E2E4F',
            light: '#585886',
            dark: '#2A2A2A'
        },
        secondary: {
            main: '#7878B3',
            dark: '#858495',
            light: '#DCDDF5'
        },
        background: {
            default: '#89A1FC',
            upper: '#29294A',
            defaultGradient: 'linear-gradient(195.3deg, #89A1FC 3.45%, #607CE1 93%)',
            upperGradient: 'linear-gradient(180deg, #29294A 0%, #20203E 100%)',
            container: getColorWithOpacity('#DCDDF5', 0.32),
        },
    },
    custom: {
        drawerSize: '380px'
    },
    typography: {
        h3: {
            fontSize: "28px",
            fontWeight: 500,
            fontStyle: "normal",
            color: '#858495',//theme.palette.secondary.dark
        },
        h4: {
            fontSize: "24px",
            fontWeight: 500,
            color: '#2E2E4F'//theme.palette.primary.main
        },
        h5: {
            fontSize: "18px",
            fontWeight: 500,
            color: '#DCDDF5'//theme.palette.secondary.light
        },
        body1: {
            fontSize: "14px",
            fontWeight: 500,
            color: '#2A2A2A'//theme.palette.primary.dark
        },
        body2: {
            fontSize: "14px",
            fontWeight: 400,
            letterSpacing: "0.1px",
            color: '#858495'//theme.palette.secondary.dark,
        }
    }
});

theme.props = {
    MuiButton: {
        disableElevation: true
    },
    MuiInputLabel: {
        shrink: true,
        filled: true
    },
    MuiTextField: {
        fullWidth: true,
        variant: "outlined"
    }
}

theme.overrides = {
    MuiContainer: {
        root: {
            '&.d-flex': {
                display: "flex"
            }
        }
    },
    MuiBackdrop: {
        root: {
            backgroundColor: 'rgba(12, 17, 62, 0.8)'
        }
    },
    MuiLink: {
        root: {
            color: theme.palette.primary.light,
            letterSpacing: "0.1px",
            fontSize: "14px",
            [theme.breakpoints.up('sm')]: {
                fontSize: '16px'
            },
        },
        underlineHover: {
            textDecoration: "underline",
            '&:hover': {
                color: theme.palette.primary.dark,
                cursor: "pointer"
            }
        }
    },
    MuiInputLabel: {
        outlined: {
            backgroundColor: theme.palette.background.container,
            paddingLeft: 2,
            paddingRight: 2,
            [theme.breakpoints.up('sm')]: {
                backgroundColor: "white",
            },
        }
    },
    MuiCssBaseline: {
        '@global': {}
    }
}

export default theme;