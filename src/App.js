import React, {useMemo} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider as MuiThemeProvider, StylesProvider } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
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
            MuiThemeProvider({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );
    return <StylesProvider>
            <MuiThemeProvider theme={theme}>
                <ThemeProvider theme={theme}>
                    <div className={classes.root}>
                        <CssBaseline/>
                        <Browse classes={classes} />
                    </div>
                </ThemeProvider>
            </MuiThemeProvider>
        </StylesProvider>;
}

// <Grid key={n} item spacing={3} md={4} sm={6} xs={12}>

export default StylesProvider(styles)(App);
