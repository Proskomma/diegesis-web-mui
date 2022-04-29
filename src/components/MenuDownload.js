import React, {useContext} from "react";
//import PropTypes from "prop-types";
import Typography from '@mui/material/Typography';
import i18n from '../lib/i18n';
import AppLangContext from "../contexts/AppLang";

export default function MenuDownload({}) {
    const appLang = useContext(AppLangContext);

    return <><Typography variant="h5">{i18n(appLang, 'download')}</Typography> 
        </>
}

MenuDownload.propTypes = {

};