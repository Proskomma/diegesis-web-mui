import React from "react";
import PropTypes from "prop-types";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import FormattedParagraph from "./FormattedParagraph";

export default function PassageByBlocks({docSets, displayFlags, displayMode, navState}) {
    return  docSets
    .filter((ds) => displayFlags[displayMode].allDocSets || ds.id === navState.docSetId)
    .filter(ds => ds.document)
    .map( (ds, n1) => <List key={n1}>
        {docSets.length > 1 && <ListItem>
                <ListItemText className="mainContentTitle2" primary={ds.id} />
            </ListItem>}
        {ds.document.mainSequence.blocks.map((b, n2) => <FormattedParagraph block={b} n={n2}  key={`${n2}-${n1}`} />)
        }</List>)
     
}   

PassageByBlocks.propTypes = {
    docSets: PropTypes.array.isRequired,
    displayFlags: PropTypes.object.isRequired,
    displayMode: PropTypes.string.isRequired,
    navState: PropTypes.object.isRequired,
};