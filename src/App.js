import React, {useMemo} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {useMediaQuery} from "@material-ui/core";
import {ThemeProvider, createTheme, withStyles} from '@material-ui/core/styles';
import Browse from "./components/Browse.js";

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    toolbarMargin: theme.mixins.toolbar,
});

function App({classes}) {

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );
    return <ThemeProvider theme={theme}>
        <div className={classes.root}>
            <CssBaseline/>
            <Browse />
        </div>
    </ThemeProvider>;
}

// <Grid key={n} item spacing={3} md={4} sm={6} xs={12}>

export default withStyles(styles)(App);
