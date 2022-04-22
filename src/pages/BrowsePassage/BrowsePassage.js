import React, {useState, useEffect, useContext} from "react";
import {useQuery} from "proskomma-react-hooks";
import PropTypes from "prop-types";
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import TuneIcon from '@mui/icons-material/Tune';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import parseReferenceString from "../../components/parseReferenceString";
import PassageResults from "./PassageResults";
import BrowsePassageOptions from "./BrowsePassageOptions";
import "./BrowsePassage.css";
import InputDisplay from "./InputDisplay";
import i18n from '../../lib/i18n';
import AppLangContext from "../../contexts/AppLang";

export default function BrowsePassage({pkState, navState, selected}) {

    const appLang = useContext(AppLangContext);

    const [reference, setReference] = useState('3JN 1');
    const [parsedReference, setParsedReference] = useState('3JN 1');
    const [parseResult, setParseResult] = useState({});
    const [showOptions, setShowOptions] = useState(false);
    const displayFlags = {
        versesForOneVersion: {allDocSets: false, groupVerses: false, byBlock: false},
        versesByVersion: {allDocSets: true, groupVerses: false, byBlock: false},
        versesByVerse: {allDocSets: true, groupVerses: true, byBlock: false},
        blocksForOneVersion: {allDocSets: false, groupVerses: false, byBlock: true},
        blocksByVersion: {allDocSets: true, groupVerses: false, byBlock: true},
    };

    const [displayMode, setDisplayMode] = useState("versesForOneVersion");

    const verbose = true;

    useEffect(
        () => {
            if (selected === 'navigation') {
                setReference(`${navState.bookCode} ${navState.chapter}`);
            } else if (navState.verse === navState.endVerse) {
                setReference(`${navState.bookCode} ${navState.chapter}:${navState.verse}`)
            } else {
                setReference(`${navState.bookCode} ${navState.chapter}:${navState.verse}-${navState.endVerse}`)
            }
        },
        [navState]
    );

    useEffect(
        () => {
            const pr = parseReferenceString(reference);
            setParseResult(pr);
            if (pr.parsed) {
                setParsedReference(pr.original);
            }
        },
        [reference]
    );

    const query = `{
        docSets { 
          id
          document(bookCode:"${parsedReference.split(/\s+/)[0]}") {
          bookCode: header(id: "bookCode")
          cv(chapterVerses:"${parsedReference.split(/\s+/)[1]}") {
            scopeLabels(startsWith:["chapter", "verses"])
            text
          }
          mainSequence {
              blocks(withScriptureCV:"${parsedReference.split(/\s+/)[1]}") {
                  scopeLabels(startsWith: ["blockTag"])
                  text (withScriptureCV:"${parsedReference.split(/\s+/)[1]}")
                  items{type subType payload}
            }
          }
        }
      }
    }`;

    const queryState = useQuery({
        ...pkState,
        query: query,
        verbose,
    });
    const selectedDocSets = queryState.data.docSets?.filter((ds) => displayFlags[displayMode]?.allDocSets || ds.id === navState.docSetId) || [];

    return <div>
                <Toolbar>
                    <IconButton 
                        edge="start" 
                        color="inherit" 
                        size="small" 
                        aria-label="menu" 
                        sx={{ mr: 2 }}
                        onClick={() => setShowOptions(!showOptions)}
                    >
                        <TuneIcon />
                    </IconButton>
                    <Box
                        sx={{
                            display: 'flex',
                            width: 500,
                            maxWidth: '100%',
                        }}
                    >
                        <TextField 
                            fullWidth
                            value={reference}
                            onChange={e => setReference(e.target.value)}
                            label={i18n(appLang, 'search_passage')} 
                            color="primary" 
                            id="search-passage"
                        />
                    </Box>
                    <InputDisplay parseR={parseResult} />
                </Toolbar>
                <FormControl>
                    { showOptions && <BrowsePassageOptions 
                        displayMode={displayMode} 
                        setDisplayMode={setDisplayMode} 
                    /> }
                    <PassageResults
                        reference={reference}
                        parseResult={parseResult}
                        docSets={selectedDocSets}
                        displayFlags={displayFlags}
                        displayMode={displayMode}
                        navState={navState}
                    />
                </FormControl>
            </div>
}

BrowsePassage.propTypes = {
    pkState: PropTypes.object.isRequired,
    navState: PropTypes.object.isRequired,
    selected: PropTypes.string.isRequired,
};