import React, {useState, useContext} from "react";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useSearchForPassages } from "proskomma-react-hooks";
import SearchResults from "./SearchResults";
import i18n from '../lib/i18n';
import AppLangContext from "../contexts/AppLang";

export default function SideMenuSearch({pkState, navState, setNavState}) {

    const appLang = useContext(AppLangContext);

    const [searchText, setSearchText] = useState('');
    const [displayMode, setDisplayMode] = useState(false);

    const verbose = true;

    const {
        // stateId: searchStateId,
        // bookCodes,
        passages,
        // passagesBookCodes,
        // dataArray,
        // errors: searchErrors,
    } = useSearchForPassages({
        proskomma: pkState.proskomma,
        stateId: pkState.stateId,
        text: searchText,
        docSetId: navState.docSetId,
        blocks: displayMode,
        tokens: false,
        verbose,
    });

    return <><Typography variant="h5">{i18n(appLang, 'menu_search')}</Typography>
                <List>
                    <ListItem>
                        <Box
                            sx={{
                                display: 'flex',
                                width: 500,
                                maxWidth: '100%',
                            }}
                        >
                            <TextField 
                                fullWidth
                                value={searchText}
                                onChange={e => setSearchText(e.target.value)}
                                label={i18n(appLang, 'search')}
                                id="search"
                            />
                        </Box>
                    </ListItem>
                    <ListItem>
                        <FormGroup>
                            <FormControlLabel control={<Switch color="default" onChange={() => setDisplayMode(!displayMode)} />} label={`${i18n(appLang, 'show_blocks')}`} />
                        </FormGroup>
                    </ListItem>
                    <SearchResults p={passages} searchText={searchText} navState={navState} setNavState={setNavState} />
                </List>
            </>
}

SideMenuSearch.propTypes = {
    pkState: PropTypes.object.isRequired,
    navState: PropTypes.object.isRequired,
    setNavState: PropTypes.func.isRequired,
};