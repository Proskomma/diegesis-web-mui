import React from "react";
import PropTypes from "prop-types";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import parseReferenceString from "./parseReferenceString";

export default function SearchResultRow({p, n, navState, setNavState}) {

    const searchReference = async reference => {

        const parseReference = parseReferenceString(reference);

        if (!parseReference.parsed) {
            return
        }
        setNavState({
            ...navState,
            bookCode: parseReference.bookCode,
            chapter: parseReference.startChapter,
            verse: parseReference.startVerse,
        });
    };

    return <ListItem key={n} >
                    <ListItemText className="hanging">
                        <Typography className="cv" color="tertiary" onClick={() => searchReference(p.reference)}>{p.reference}</Typography> <Typography>{p.text}</Typography>
                    </ListItemText>
                </ListItem>
}

SearchResultRow.propTypes = {
    p: PropTypes.object.isRequired,
    n: PropTypes.number.isRequired,
    navState: PropTypes.object.isRequired,
    setNavState: PropTypes.func.isRequired,
};
