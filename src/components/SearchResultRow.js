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
            endChapter: parseReference.endChapter,
            verse: parseReference.startVerse,
            endVerse: parseReference.endVerse,
        });
    };

    return <ListItem key={n} >
                    <ListItemText>
                        <Typography variant="h6" onClick={() => searchReference(p.reference)}>{p.reference}</Typography> <Typography>{p.text}</Typography>
                    </ListItemText>
                </ListItem>
}

SearchResultRow.propTypes = {
    p: PropTypes.object.isRequired,
    n: PropTypes.number.isRequired,
    navState: PropTypes.object.isRequired,
    setNavState: PropTypes.func.isRequired,
};
