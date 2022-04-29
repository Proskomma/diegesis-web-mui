import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import SideMenuNavigation from "./SideMenuNavigation";
import SideMenuSearch from "./SideMenuSearch";
import AppLangOptions from "./AppLangOptions";
import MenuDownload from "./MenuDownload";

export default function SideMenu({pkState, navState, setNavState, catalog, appLanguage, setAppLanguage, selected, setSelected, setRead}) {
    return (
        <>
            <Box display="flex" justifyContent="flex-end">
                    <IconButton 
                        size="large" 
                        onClick={() => setSelected('')}
                        color="primary"
                        >
                        <CloseRoundedIcon fontSize="large" />
                    </IconButton>
            </Box>
            <div className="sidemenu">
                {selected === 'settings' && <AppLangOptions appLanguage={appLanguage} setAppLanguage={setAppLanguage} />}
                {selected === 'navigation' && <SideMenuNavigation catalog={catalog} navState={navState} setNavState={setNavState} setRead={setRead} />}
                {selected === 'search' && <SideMenuSearch pkState={pkState} navState={navState} setNavState={setNavState} />}
                {selected === 'download' && <MenuDownload a="descargas" />}
            </div>
        </>
    )
}

SideMenu.propTypes = {
    pkState: PropTypes.object.isRequired,
    navState: PropTypes.object.isRequired,
    setNavState: PropTypes.func.isRequired,
    catalog: PropTypes.object.isRequired,
    appLanguage: PropTypes.string.isRequired,
    setAppLanguage: PropTypes.func.isRequired,
    selected: PropTypes.string.isRequired,
    setSelected: PropTypes.func.isRequired,
    setRead: PropTypes.func.isRequired,
};
