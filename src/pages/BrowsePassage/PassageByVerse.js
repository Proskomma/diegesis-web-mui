import React from "react";
import PropTypes from "prop-types";
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function PassageByVerse({cvArray, docSets}) {
    return cvArray.map((cv, n) => <List key={n}>
                    <ListItem>
                        <ListItemText className="mainContentTitle2" primary={`${cv[0].split("/")[1]}:${cv[1].split("/")[1]}`} />
                    </ListItem>
            {docSets.filter(ds => ds.document).map((ds, n2) => <List key={n2}>
                    <ListItem>
                            <ListItemText className="cv" primary={<><Typography className="cv">{ds.id}</Typography> <Typography>{ds.document.cv[n].text}</Typography></>} />
                    </ListItem>
                </List>
            )}
        </List>
    )
}

PassageByVerse.propTypes = {
    cvArray: PropTypes.array.isRequired,
    docSets: PropTypes.array.isRequired,
};