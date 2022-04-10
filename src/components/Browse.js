import React, {useState} from 'react';
import PropTypes from "prop-types";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
//import Grid from '@material-ui/core/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Container from '@mui/material/Container';
import BrowsePassage from "../pages/BrowsePassage/BrowsePassage";
import BrowseBook from "../pages/BrowseBook/BrowseBook";
import PopMenu from "./PopMenu";
import SideMenu from "./SideMenu";


export default function Browse({pkState, navState, setNavState, catalog, appLanguage, setAppLanguage}) {

    const [showPassage, setShowPassage] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [selected, setSelected] = useState('navigation');
    const [showAppLang, setShowAppLang] = useState(false);

    const browseComponent = showPassage ? <BrowsePassage pkState={pkState} navState={navState} /> : <BrowseBook pkState={pkState} navState={navState} catalog={catalog} />

    return <>
            <AppBar position="fixed" >
                <Toolbar>
                    <PopMenu showMenu={showMenu} setShowMenu={setShowMenu} selected={selected} setSelected={setSelected} showAppLang={showAppLang} setShowAppLang={setShowAppLang} />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>{`${navState.bookCode} - ${navState.docSetId}`}</Typography>
                    <FormGroup >
                        <FormControlLabel control={<Switch color="default" onChange={() => setShowPassage(!showPassage)} />} label="Passage" />
                    </FormGroup>
                </Toolbar>
        </AppBar>
        <main style={{marginTop:"75px"}}>
            <Container maxWidth="sm">
                {showMenu ?
                    <SideMenu
                        pkState={pkState}
                        navState={navState}
                        setNavState={setNavState}
                        catalog={catalog}
                        appLanguage={appLanguage}
                        setAppLanguage={setAppLanguage}
                        setShowMenu={setShowMenu}
                        selected={selected}
                        showAppLang={showAppLang}
                    />
                :
                    browseComponent
                }
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
