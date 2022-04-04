import React, {useState} from 'react';
import PropTypes from "prop-types";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
//import Grid from '@material-ui/core/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
//import Paper from '@material-ui/core/Paper';
import BrowsePassage from "../pages/BrowsePassage/BrowsePassage";
import BrowseBook from "../pages/BrowseBook/BrowseBook";


export default function Browse({classes}) {

    const [showPassage, setShowPassage] = useState(false);

    /*
                   <FormGroup >
                    <FormControlLabel control={<Switch color="default" onChange={() => setShowPassage(!showPassage)} />} label="Toggle" />
                </FormGroup>
     */
 return <>
        <AppBar position="fixed" >
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                 <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Toolbar
                </Typography>
                <Typography>Right?</Typography>
            </Toolbar>
        </AppBar>
        <main style={{marginTop:"75px"}}>
            { showPassage ? <BrowsePassage classes={classes} /> : <BrowseBook />}
        </main>
 </>
}

Browse.propTypes = {
    classes: PropTypes.object.isRequired,
//    pkState: PropTypes.object.isRequired,
//    navState: PropTypes.object.isRequired,
//    catalog: PropTypes.object.isRequired,
};
