import React from "react";
import PropTypes from "prop-types";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import FormattedParagraphContents from "./FormattedParagraphContents";

export default function FormattedParagraph({block, n}) {
    return <ListItem className={block.scopeLabels[0].split('/')[1]} key={n}>
            <ListItemText primary={<FormattedParagraphContents b={block} />} />
    </ListItem>
}

FormattedParagraph.propTypes = {
    block: PropTypes.object.isRequired,
    n: PropTypes.number.isRequired,
};