import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import React, {useContext} from "react";
import PropTypes from "prop-types";
import i18n from '../lib/i18n';
import AppLangContext from "../contexts/AppLang";
import VersionsAccordion from './VersionsAccordion';

export default function SideMenuNavigation({catalog, navState, setNavState}) {
    
    const appLang = useContext(AppLangContext);

    const chapterClick = async e => {
        const element = e?.target;
        const docSetId = element?.getAttribute("doc");
        const bookCode = element?.getAttribute("book");
        const chapter = parseInt(element?.getAttribute("chapter"));
        setNavState((prevState) => ({...prevState, docSetId: docSetId, bookCode: bookCode, chapter: chapter}));
    };

    return <List>
        <ListItemText className="headerTitle" primary={`${catalog.nDocuments} ${i18n(appLang, 'books_in')} ${catalog.nDocSets} ${i18n(appLang, 'bibles')}`} />
        <ListItem>
            <Accordion value={navState.docSetId}>
                <AccordionDetails>
                    {catalog.docSets && catalog.docSets.map((ds, n) => <VersionsAccordion
                        docSet={ds}
                        n={n}
                        catalog={catalog}
                        cClick={chapterClick}
                        navState={navState}
                        setNavState={setNavState}
                        key={n}
                    />)}
                </AccordionDetails>
            </Accordion>
        </ListItem>
    </List>
}

SideMenuNavigation.propTypes = {
    navState: PropTypes.object.isRequired,
    setNavState: PropTypes.func.isRequired,
    catalog: PropTypes.object.isRequired,
};
