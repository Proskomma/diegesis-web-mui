import React, {useState} from "react";
//import {useQuery} from "proskomma-react-hooks";
import PropTypes from "prop-types";
//import Toolbar from '@material-ui/core/Toolbar';
//import Box from '@mui/Box';
//import Button from '@material-ui/core/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
//import parseReferenceString from "../../components/parseReferenceString";
//import PassageResults from "./PassageResults";
//import BrowsePassageOptions from "./BrowsePassageOptions";
//import "./BrowsePassage.css";
//import InputDisplay from "./InputDisplay";
//import i18n from '../../lib/i18n';
//import AppLangContext from "../../contexts/AppLang";

export default function BrowsePassage({classes}) {

    const [showOptions, setShowOptions] = useState(false);

console.log("browsePassage");
    return <div className={classes.toolbarMargin}> da
                <Typography>Hola</Typography>
                <FormGroup >
                    <FormControlLabel control={<Switch color="default" onChange={() => setShowOptions(!showOptions)} />} label="Toggle" />
                </FormGroup>
                { showOptions && <List>
                    <ListItemButton>
                        <ListItem disablePadding>
                                <ListItemText primary="Trash" />
                        </ListItem>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItem disablePadding>
                                <ListItemText primary="Spam" />
                        </ListItem>
                    </ListItemButton>
                </List>
            }
            </div>
}

BrowsePassage.propTypes = {
//    pkState: PropTypes.object.isRequired,
//    navState: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
};