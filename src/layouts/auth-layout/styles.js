
const AuthLayoutStyles = theme => ({
    authCard: {
        height: "fit-content",
        backgroundColor: "white",
        [theme.breakpoints.down('xs')]: {
            backgroundColor: "transparent",
            boxShadow: "none"
        },
        '& form': {
            marginTop: theme.spacing(3),
            '& > *:not(:first-child)': {
                marginTop: theme.spacing(4),
                '&.MuiButton-root': {
                    marginTop: theme.spacing(3),
                }
            },
        },
        '& .MuiDivider-root': {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(2)
        }
    },
});

export {AuthLayoutStyles};