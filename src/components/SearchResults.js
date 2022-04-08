import React, {useContext} from "react";
import PropTypes from "prop-types";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import SearchResultRow from "./SearchResultRow";
import i18n from '../lib/i18n';
import AppLangContext from "../contexts/AppLang";

export default function SearchResults({p, searchText, navState, setNavState}) {

    const appLang = useContext(AppLangContext);

    if (!searchText) {
        return <ListItem>
                   <ListItemText primary={`${i18n(appLang, 'enter_search_text')}`} />
               </ListItem>;
    } else if (p.length < 1) {
        return  <ListItem>
                    <ListItemText primary={`${i18n(appLang, 'no_text_found')}`} />
                </ListItem>;
    } else {
        return p.map((p, n) => <SearchResultRow p={p} n={n} key={n} navState={navState} setNavState={setNavState} />)
    }
}

SearchResults.propTypes = {
    p: PropTypes.array.isRequired,
    searchText: PropTypes.string.isRequired,
    navState: PropTypes.object.isRequired,
    setNavState: PropTypes.func.isRequired,
};