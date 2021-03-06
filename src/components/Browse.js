import React, {useState, useContext} from 'react';
import PropTypes from "prop-types";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Container from '@mui/material/Container';
import PopMenu from "./PopMenu";
import SideMenu from "./SideMenu";
import BrowsePassage from "../pages/BrowsePassage/BrowsePassage";
import BrowseBook from "../pages/BrowseBook/BrowseBook";
import i18n from '../lib/i18n';
import AppLangContext from "../contexts/AppLang";


export default function Browse({pkState, navState, setNavState, catalog, appLanguage, setAppLanguage}) {
    const appLang = useContext(AppLangContext);

    const [selected, setSelected] = useState('');
    const [browse, setBrowse] = useState('read');
    const [showAppLang, setShowAppLang] = useState(false);
    const [checked, setChecked] = useState(false);

    const setRead = () => {
        setBrowse('read');
        setChecked(false)
    }
    const setPassage = () => {
        setBrowse('passage');
        setChecked(true)
    }

    const passageToggle = (browseP) => {
        if (browseP === 'read') {
            setPassage()
        } else if (!checked && browseP !== 'read') {
            setPassage()
        } else if (checked && browseP !== 'read') {
            setRead()
        } else {
            setRead()
        }
    }

    return <>
        <AppBar position="fixed" color="primary">
            <Toolbar>
                <PopMenu selected={selected} setSelected={setSelected} showAppLang={showAppLang}
                         setShowAppLang={setShowAppLang} setPassage={setPassage} setRead={setRead}/>
                <Typography variant="h6" component="div"
                            sx={{flexGrow: 1}}>{`${navState.bookCode} - ${navState.docSetId}`}</Typography>
                <FormGroup>
                    <FormControlLabel
                        control={<Switch color="default" checked={checked} onChange={() => passageToggle(browse)}/>}
                        label={i18n(appLang, 'passage')}/>
                </FormGroup>
            </Toolbar>
        </AppBar>
        <main style={{marginTop: "75px"}}>
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    {selected &&
                    <Grid
                        item
                        xs={12}
                        sm={selected === 'download' ? 12 : 8}
                        md={selected === 'download' ? 12 : 6}
                        lg={selected === 'download' ? 12 : 4}
                        xl={selected === 'download' ? 12 : 3}
                    >
                        <SideMenu
                            pkState={pkState}
                            navState={navState}
                            setNavState={setNavState}
                            catalog={catalog}
                            appLanguage={appLanguage}
                            setAppLanguage={setAppLanguage}
                            selected={selected}
                            setSelected={setSelected}
                            setRead={setRead}
                        />
                    </Grid>}
                    {selected !== 'download' &&
                    <Grid
                        item
                        xs={12}
                        sm={selected === '' ? 12 : 4}
                        md={selected === '' ? 12 : 6}
                        lg={selected === '' ? 12 : 8}
                        xl={selected === '' ? 12 : 9}
                    >
                        {browse === 'read' && <BrowseBook pkState={pkState} navState={navState} catalog={catalog}/>}
                        {browse === 'passage' &&
                        <BrowsePassage pkState={pkState} navState={navState} selected={selected}/>}
                    </Grid>}
                </Grid>
            </Container>
        </main>
    </>
}

Browse.propTypes = {
    pkState: PropTypes.object.isRequired,
    navState: PropTypes.object.isRequired,
    setNavState: PropTypes.func.isRequired,
    catalog: PropTypes.object.isRequired,
    appLanguage: PropTypes.string.isRequired,
    setAppLanguage: PropTypes.func.isRequired,

};
