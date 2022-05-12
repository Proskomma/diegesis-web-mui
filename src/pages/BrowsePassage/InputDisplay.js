import React from "react";
import PropTypes from "prop-types";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function InputDisplay({parseR}) {
    return Object.keys(parseR).length === 0 || parseR.parsed ? 
    <CheckCircleOutlineIcon 
    size="large" 
    edge="end" 
    color="light"  
    /> : 
    <HighlightOffIcon 
    size="large" 
    edge="end" 
    color="light" 
    />
}

InputDisplay.propTypes = {
    parseR: PropTypes.object.isRequired,
};