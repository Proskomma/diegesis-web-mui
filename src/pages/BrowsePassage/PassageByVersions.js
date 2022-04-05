import React from "react";
import PropTypes from "prop-types";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import PassageByVersion from "./PassageByVersion";

export default function PassageByVersions({docSets}) {

    return docSets?.filter(ds => ds.document).map(
            (ds, n) => <List key={n}>
                    <ListItem>
                        <ListItemText className="mainContentTitle2" primary={ds.id} />
                    </ListItem>
                    <ListItem>
                        <PassageByVersion docSet={ds} keyPrefix={n} key={n} />
                    </ListItem>
            </List>
        );
}

 PassageByVersions.propTypes = {
     docSets: PropTypes.array.isRequired,
 };
