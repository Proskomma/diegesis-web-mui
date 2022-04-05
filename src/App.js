import React, {useState, useEffect} from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {useProskomma} from 'proskomma-react-hooks';
import {nt_ebible_27book as frozen} from 'proskomma-frozen-archives';
import {useCatalog} from 'proskomma-react-hooks';
import {thaw} from 'proskomma-freeze';
//import {AppLangProvider} from './contexts/AppLang';
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

function App({}) {

    const theme = createTheme({});

    const initialState = {
        docSetId: 'xyz-fra_lsg',
        bookCode: '3JN',
        chapter: 1,
        verse: 1,
    };
    const [navState, setNavState] = useState(initialState);
    const [appLanguage, setAppLanguage] = useState("en");

    const verbose = true;
    const pkState = useProskomma({verbose});

    useEffect(() => {
        thaw(pkState.proskomma, frozen).then(() => {
            console.log('thawed');
            pkState.newStateId();
        });
    }, [pkState.proskomma]);

    const {catalog} = useCatalog({
        proskomma: pkState.proskomma,
        stateId: pkState.stateId,
        verbose: true,
        cv: true,
    });

    return  <ThemeProvider theme={theme}>
                    <Browse pkState={pkState} navState={navState} catalog={catalog} />
            </ThemeProvider>;
}

export default App;
