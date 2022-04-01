import React, {useMemo} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import {useMediaQuery} from "@material-ui/core";
import {ThemeProvider, createTheme, withStyles} from '@material-ui/core/styles';

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
            <AppBar position="fixed">
                <Toolbar>
                    <Typography>Tool Bar!</Typography>
                </Toolbar>

            </AppBar>
            <main>
                <div className={classes.toolbarMargin}/>
                <Grid container spacing={2}>
                    {
                        [...Array(128).keys()].map(n => n + 1)
                            .map(n => <Grid key={n} item>
                                <Paper className={classes.paper}>Element {n} goes here</Paper>
                            </Grid>)
                    }
                </Grid>
            </main>
        </div>
    </ThemeProvider>;
}

// <Grid key={n} item spacing={3} md={4} sm={6} xs={12}>

export default withStyles(styles)(App);
