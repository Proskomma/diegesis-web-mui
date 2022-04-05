import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

export default function BrowseBook({}) {

 return <List>
            <ListItem disablePadding>
                    <Typography>Block text</Typography>
            </ListItem>
        </List>
}

BrowseBook.propTypes = {
//    pkState: PropTypes.object.isRequired,
//    navState: PropTypes.object.isRequired,
//    catalog: PropTypes.object.isRequired,
};