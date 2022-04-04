import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Browse from "./components/Browse.js";

/*const styles = theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    toolbarMargin: theme.mixins.toolbar,
});*/

function App({classes}) {

    const theme = createTheme({});

    return <ThemeProvider theme={theme}>
                        <Browse classes={{}} />
                </ThemeProvider>;
}

export default App;
