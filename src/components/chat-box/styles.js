

const ChatBoxStyles = theme => ({
    main: {
        height: "100%",
        display: "flex",
        flexGrow: 1,
        width: "100%",
        [theme.breakpoints.down('xs')]: {
            backgroundColor: "white",
        },
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
        '&.with-drawer': {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginRight: -theme.custom.drawerSize,
        },
        '& main': {
            width: "100%",
            [theme.breakpoints.down('xs')]: {
                backgroundColor: theme.palette.background.container,
            },
        }
    },
    header: {
        backgroundColor: theme.palette.secondary.main,
        '& .MuiTypography-h5': {
            fontSize: "14px",
        },
    },
    lastTimeSubTitle: { fontSize: "12px!important" },
    messagesContainer: {
        overflowY: "auto",
        maxHeight: "calc(100% - 124.812px)", //header height
        '& .chat-message': {
            '&.owner .MuiPaper-root': {
                color: theme.palette.primary.main,
                backgroundColor: theme.palette.secondary.light
            },
            '&.other .MuiPaper-root': {
                color: theme.palette.secondary.light,
                backgroundColor: theme.palette.primary.light
            },
            '& .MuiTypography-body2': {
                fontSize: "11px",
                textAlign: "end",
                color: "inherit"
            }
        },
        '& .date-divider': {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
            textAlign: "center"
        }
    },
    InputContainer: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.light,
        '& > *:not(:last-child)': {
            marginRight: theme.spacing(1)
        },
        '& .MuiInputBase-input': {
            borderRadius: "24px",
            backgroundColor: "white",
            padding: `${theme.spacing(1.5)}px ${theme.spacing(2)}px`,
            ...theme.typography.body2,
            fontSize: "15px"
        }
    }
});

export {ChatBoxStyles};