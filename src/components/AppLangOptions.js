import React from "react";
import PropTypes from "prop-types";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function AppLangOptions({appLanguage, setAppLanguage}) {

    return <RadioGroup value={appLanguage} onChange={e => setAppLanguage(e.target.value)}>
                <FormControlLabel color="secondary" value="en" control={<Radio />} label="English" />
                <FormControlLabel color="secondary" value="fr" control={<Radio />} label="Français" />
                <FormControlLabel color="secondary" value="es" control={<Radio />} label="Español" />
            </RadioGroup>
}

AppLangOptions.propTypes = {
    appLanguage: PropTypes.string.isRequired,
    setAppLanguage: PropTypes.func.isRequired,
};