import React, {useState} from 'react';
//import PropTypes from "prop-types";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
//import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
//import Paper from '@material-ui/core/Paper';
import BrowsePassage from "../pages/BrowsePassage/BrowsePassage";
import BrowseBook from "../pages/BrowseBook/BrowseBook";


export default function Browse({}) {

    const [showPassage, setShowPassage] = useState(false);

 return <>
        <AppBar position="fixed" >
            <Toolbar>
                <FormGroup >
                    <FormControlLabel control={<Switch color="default" onChange={() => setShowPassage(!showPassage)} />} label="Toggle" />
                </FormGroup>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Toolbar
                </Typography>
            </Toolbar>
        </AppBar>
        <main> 
            { showPassage ? <BrowsePassage /> : <BrowseBook />} 
        </main>
 </>
}

Browse.propTypes = {
//    pkState: PropTypes.object.isRequired,
//    navState: PropTypes.object.isRequired,
//    catalog: PropTypes.object.isRequired,
};