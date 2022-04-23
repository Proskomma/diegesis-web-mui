import React, {useState, useContext} from "react";
import PropTypes from "prop-types";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import i18n from "../../lib/i18n";
import AppLangContext from "../../contexts/AppLang";

export default function BrowsePassageOptions({displayMode, setDisplayMode}) {

    const appLang = useContext(AppLangContext);

    const [showAllBibles, setShowAllBibles] = useState(false);

    return <div className="bibleOptions"> <FormControlLabel value={showAllBibles} control={<Switch color="default" onChange={() => setShowAllBibles(!showAllBibles)} />} label={i18n(appLang, 'show_all_bibles')} />
            <RadioGroup value={displayMode} onChange={e => setDisplayMode(e.target.value)}>
                {!showAllBibles && <FormControlLabel color="secondary" value="versesForOneVersion" control={<Radio />} label={i18n(appLang, 'show_verses')} />}
                {showAllBibles && <FormControlLabel color="secondary" value="versesByVersion" control={<Radio />} label={i18n(appLang, 'group_version_show_verses')} />}
                {showAllBibles && <FormControlLabel color="secondary" value="versesByVerse" control={<Radio />} label={i18n(appLang, 'group_verse')} />}
                {!showAllBibles && <FormControlLabel color="secondary" value="blocksForOneVersion" control={<Radio />} label={i18n(appLang, 'show_paragraphs')} />}
                {showAllBibles && <FormControlLabel color="secondary" value="blocksByVersion" control={<Radio />} label={i18n(appLang, 'group_version_show_paragraphs')} />}
            </RadioGroup>
        </div>
}

BrowsePassageOptions.propTypes = {
    displayMode: PropTypes.string.isRequired,
    setDisplayMode: PropTypes.func.isRequired,
};
