import Container from '@mui/material/Container';
import React, {useState} from "react";
import Button from '@mui/material/Button';
import PropTypes from "prop-types";
import SideMenuNavigation from "./SideMenuNavigation";
import SideMenuSearch from "./SideMenuSearch";
import AppLangOptions from "./AppLangOptions";

export default function SideMenu({pkState, navState, setNavState, catalog, appLanguage, setAppLanguage, setShowMenu, selected, showAppLang}) {
    

    return <main style={{marginTop:"75px"}} >
                <Container maxWidth="sm">
                    <Button onClick={() => setShowMenu(false)}>Close</Button>
                    {showAppLang && <AppLangOptions appLanguage={appLanguage} setAppLanguage={setAppLanguage} />}
                    {selected === 'navigation' && <SideMenuNavigation catalog={catalog} navState={navState} setNavState={setNavState} />}
                    {selected === 'search' && <SideMenuSearch pkState={pkState} navState={navState} setNavState={setNavState} />}
                </Container>
            </main>
}

SideMenu.propTypes = {
    catalog: PropTypes.object.isRequired,
    pkState: PropTypes.object.isRequired,
    navState: PropTypes.object.isRequired,
    setNavState: PropTypes.func.isRequired,
    catalog: PropTypes.object.isRequired,
    appLanguage: PropTypes.string.isRequired,
    setAppLanguage: PropTypes.func.isRequired,
    setShowMenu: PropTypes.func.isRequired,
    selected: PropTypes.string.isRequired,
    showAppLang: PropTypes.bool.isRequired,
};
