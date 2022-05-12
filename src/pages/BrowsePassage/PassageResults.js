import {React, useContext} from "react";
import PropTypes from "prop-types";
import Typography from '@mui/material/Typography';
import PassageByVersions from "./PassageByVersions";
import PassageByVerse from "./PassageByVerse";
import PassageByVersion from "./PassageByVersion";
import PassageByBlocks from "./PassageByBlocks";
import i18n from "../../lib/i18n";
import AppLangContext from "../../contexts/AppLang";

export default function PassageResults({reference, parseResult, docSets, displayFlags, displayMode, navState}) {
    const appLang = useContext(AppLangContext);

    const cvArray = docSets[0]?.document?.cv.map(v => v.scopeLabels) || [];

    if (reference === '') {
        return <Typography>{i18n(appLang, 'enter_search_text')}</Typography>
    } else if (!parseResult.parsed) {
        return <Typography>{i18n(appLang, 'error_format')}</Typography>
    } else if (docSets?.filter(ds => ds.document).length === 0) {
        return <Typography>{i18n(appLang, 'error_book')}</Typography>
    } else if (docSets?.filter(ds => ds.document?.cv.length > 0).length === 0) {
        return <Typography>{i18n(appLang, 'error_verse')}</Typography>
    } else if (displayFlags[displayMode].byBlock) {
        return <PassageByBlocks docSets={docSets} displayFlags={displayFlags} displayMode={displayMode} navState={navState} />;
    }   else {    // by Verse
         if (!displayFlags[displayMode].allDocSets && !displayFlags[displayMode].groupVerses){
            return docSets
            .filter(ds => ds.document)
            .map((ds, n) => <PassageByVersion docSet={ds} keyPrefix={n} key={n} />);
        } else if (displayFlags[displayMode].allDocSets && !displayFlags[displayMode].groupVerses) {
            return <PassageByVersions docSets={docSets} />;
        } else if(displayFlags[displayMode].allDocSets && displayFlags[displayMode].groupVerses){
            return <PassageByVerse cvArray={cvArray} docSets={docSets} />;
        } else {
            return null;
        }
    }
}

PassageResults.propTypes = {
    reference: PropTypes.string.isRequired,
    parseResult: PropTypes.object.isRequired,
    docSets: PropTypes.array.isRequired,
    displayFlags: PropTypes.object.isRequired,
    displayMode: PropTypes.string.isRequired,
    navState: PropTypes.object.isRequired,
};
