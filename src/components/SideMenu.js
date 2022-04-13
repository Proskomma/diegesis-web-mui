import React from "react";
import PropTypes from "prop-types";
import SideMenuNavigation from "./SideMenuNavigation";
import SideMenuSearch from "./SideMenuSearch";
import AppLangOptions from "./AppLangOptions";

export default function SideMenu({pkState, navState, setNavState, catalog, appLanguage, setAppLanguage, selected, setRead}) {
    return (
        <>
            {selected === 'settings' && <AppLangOptions appLanguage={appLanguage} setAppLanguage={setAppLanguage} />}
            {selected === 'navigation' && <SideMenuNavigation catalog={catalog} navState={navState} setNavState={setNavState} setRead={setRead} />}
            {selected === 'search' && <SideMenuSearch pkState={pkState} navState={navState} setNavState={setNavState} />}
        </>
    )
}

SideMenu.propTypes = {
    catalog: PropTypes.object.isRequired,
    pkState: PropTypes.object.isRequired,
    navState: PropTypes.object.isRequired,
    setNavState: PropTypes.func.isRequired,
    catalog: PropTypes.object.isRequired,
    appLanguage: PropTypes.string.isRequired,
    setAppLanguage: PropTypes.func.isRequired,
    selected: PropTypes.string.isRequired,
    setRead: PropTypes.func.isRequired,
};
