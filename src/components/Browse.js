import React, {useState} from 'react';
import PropTypes from "prop-types";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
//import Grid from '@material-ui/core/Grid';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Container from '@mui/material/Container';
import PopMenu from "./PopMenu";
import SideMenu from "./SideMenu";


export default function Browse({pkState, navState, setNavState, catalog, appLanguage, setAppLanguage}) {

    const [selected, setSelected] = useState('read');
    const [showAppLang, setShowAppLang] = useState(false);
    const [checked, setChecked] = useState(false);

    const setRead = () => {setSelected('read'); setChecked(false)}
    const setPassage = () => {setSelected('passage'); setChecked(true)}

    const passageToggle = (passage) => {
        if (passage === 'read') {
            setPassage()
        } else if (!checked && passage !== 'read') {
            setPassage()
        } else if (checked && passage !== 'read') {
            setRead()
        }
        else {
            setRead()
        }
    }

    return <>
            <AppBar position="fixed" >
                <Toolbar>
                    <PopMenu selected={selected} setSelected={setSelected} showAppLang={showAppLang} setShowAppLang={setShowAppLang} />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>{`${navState.bookCode} - ${navState.docSetId}`}</Typography>
                    <FormGroup >
                        <FormControlLabel control={<Switch color="default" checked={checked} onChange={() => passageToggle(selected)} />} label="Passage" />
                    </FormGroup>
                </Toolbar>
        </AppBar>
        <main style={{marginTop:"75px"}}>
            <Container maxWidth="sm">
                {
                    <SideMenu
                        pkState={pkState}
                        navState={navState}
                        setNavState={setNavState}
                        catalog={catalog}
                        appLanguage={appLanguage}
                        setAppLanguage={setAppLanguage}
                        selected={selected}
                        setRead={setRead}
                    />
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
