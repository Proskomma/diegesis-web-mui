import React, {useState} from "react";
//import {useQuery} from "proskomma-react-hooks";
//import PropTypes from "prop-types";
//import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
//import parseReferenceString from "../../components/parseReferenceString";
//import PassageResults from "./PassageResults";
//import BrowsePassageOptions from "./BrowsePassageOptions";
//import "./BrowsePassage.css";
//import InputDisplay from "./InputDisplay";
//import i18n from '../../lib/i18n';
//import AppLangContext from "../../contexts/AppLang";

export default function BrowsePassage({}) {

    const [showOptions, setShowOptions] = useState(false);

console.log("browsePassage");
    return <div> da
                <Box>
                    <Typography>Hola</Typography>
                    <FormGroup >
                        <FormControlLabel control={<Switch color="default" onChange={() => setShowOptions(!showOptions)} />} label="Toggle" />
                    </FormGroup>
                </Box>
                { showOptions && <List>
                    <ListItem disablePadding>
                            <ListItemText primary="Trash" />
                    </ListItem>
                    <ListItem disablePadding>
                            <ListItemText primary="Spam" />
                    </ListItem>
                </List>
            }
            </div>
}

BrowsePassage.propTypes = {
//    pkState: PropTypes.object.isRequired,
//    navState: PropTypes.object.isRequired,
};