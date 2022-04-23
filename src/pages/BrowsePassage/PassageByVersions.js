import React from "react";
import PropTypes from "prop-types";
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import PassageByVersion from "./PassageByVersion";

export default function PassageByVersions({docSets}) {

    return docSets?.filter(ds => ds.document).map(
            (ds, n) => <List key={n}>
                    <ListItem>
                        <ListItemText><Typography variant="h6">{ds.id}</Typography></ListItemText>
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
