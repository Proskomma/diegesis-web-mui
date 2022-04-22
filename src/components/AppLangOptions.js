import React, {useContext} from "react";
import PropTypes from "prop-types";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import i18n from '../lib/i18n';
import AppLangContext from "../contexts/AppLang";

export default function AppLangOptions({appLanguage, setAppLanguage}) {
    const appLang = useContext(AppLangContext);

    return <><Typography variant="h5">{i18n(appLang, 'settings')}</Typography> 
            <RadioGroup value={appLanguage} onChange={e => setAppLanguage(e.target.value)}>
                <FormControlLabel color="secondary" value="en" control={<Radio />} label="English" />
                <FormControlLabel color="secondary" value="fr" control={<Radio />} label="Français" />
                <FormControlLabel color="secondary" value="es" control={<Radio />} label="Español" />
            </RadioGroup>
        </>
}

AppLangOptions.propTypes = {
    appLanguage: PropTypes.string.isRequired,
    setAppLanguage: PropTypes.func.isRequired,
};