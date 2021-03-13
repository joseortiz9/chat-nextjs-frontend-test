import theme from "../../styles/theme";


const ChatSidebarStyles = theme => ({
    paneSidebar: {
        height: "100%",
        backgroundColor: "transparent",
        [theme.breakpoints.up('sm')]: {
            backgroundColor: "white",
        },
    },
    header: {
        backgroundColor: theme.palette.primary.light,
    },
    searchField: {
        ...theme.typography.body2,
        fontSize: "15px",
        padding: theme.spacing(2),
        '& .MuiInputAdornment-root': {
            marginRight: theme.spacing(2),
            '& svg': {
                fill: theme.palette.primary.dark
            }
        },
    },
    contactsPane: {
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor: "white",
        overflowY: "auto",
        maxHeight: "calc(100% - 60px)", //header height
        [theme.breakpoints.up('sm')]: {
            maxHeight: "calc(100% - 122.812px)",
        },
        '& .MuiListItem-root': {
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            '&:hover': {
                backgroundColor: theme.palette.secondary.light,
                cursor: "pointer"
            },
            '&.active': {
                backgroundColor: theme.palette.secondary.light,
                borderLeft: "4px solid " + theme.palette.secondary.main
            },
            '&.MuiListItem-secondaryAction': {
                paddingRight: "70px"
            },
            '& .MuiListItemText-secondary, & .MuiListItemText-primary': {
                display: "inline-block",
                maxWidth: "100%",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
            },
        },
        '& .MuiListItemSecondaryAction-root': {
            top: "24px",
            '& .MuiTypography-body2': {
                fontSize: "12px",
            }
        },
        '& .MuiDivider-root': {
            marginRight: theme.spacing(1)
        }
    }
});

export {ChatSidebarStyles};