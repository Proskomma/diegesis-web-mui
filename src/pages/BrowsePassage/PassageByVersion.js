import React from "react";
import PropTypes from "prop-types";
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function PassageByVersion({docSet, keyPrefix}) {
    const sLO = (sL) => {
        const ret = {};
        sL.forEach(l => {
            const [scopeType, scopeNumber] = l.split("/");
            ret[scopeType] = scopeNumber;
        })
        return ret;
    };

    return <div key={keyPrefix}>

        {docSet.document?.cv.map(
            (v, n2) => <List key={`${keyPrefix}-${n2}`}>
                <ListItem>
                    <ListItemText primary={<><Typography>{`${sLO(v.scopeLabels)["chapter"]}:${sLO(v.scopeLabels)["verses"]}`}</Typography> <Typography>{v.text}</Typography></>} />
                </ListItem>
            </List>
        )
        }
    </div>
}

PassageByVersion.propTypes = {
    docSet: PropTypes.object.isRequired,
    keyPrefix: PropTypes.number.isRequired,
};
