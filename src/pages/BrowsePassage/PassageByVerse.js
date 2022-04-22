import React from "react";
import PropTypes from "prop-types";
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function PassageByVerse({cvArray, docSets}) {
    return cvArray.map((cv, n) => <List key={n}>
                    <ListItem>
                        <Typography variant="h6">{`${cv[0].split("/")[1]}:${cv[1].split("/")[1]}`}</Typography>
                    </ListItem>
            {docSets.filter(ds => ds.document).map((ds, n2) => <ListItem key={n2} divider>
                <ListItemText><Typography><b>{ds.id}</b>{`: ${ds.document.cv[n].text}`}</Typography></ListItemText>
            </ListItem>)}
        </List>
    )
}

PassageByVerse.propTypes = {
    cvArray: PropTypes.array.isRequired,
    docSets: PropTypes.array.isRequired,
};