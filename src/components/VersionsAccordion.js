import React from "react";
import PropTypes from "prop-types";
import List from '@mui/material/List';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "./VersionsAccordion.css";

export default function VersionsAccordion({docSet, n, catalog, cClick, navState}) {

    return (
        <Accordion key={n} value={docSet.id}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="docSetId"
                id="accordion2-header"
            >
                <Typography className="accordionLabel" color="secondary">{docSet.id}</Typography>
            </AccordionSummary>
            <List slot="content">
                    {docSet.documents?.map((d, n2) => (
                        <Accordion key={n2} value={d.bookCode}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="titles"
                                id="accordion-chapter"
                            >
                                <Typography color="tertiary" className="accordionLabel">{d.toc3 || d.toc2 || d.h || d.toc}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {Object.entries(catalog.docSets[n].documents[n2].versesByChapters).map(
                                        (chapter, key) =>
                                            <Button
                                                key={key}
                                                size="small"
                                                fill="clear"
                                                doc={docSet.id}
                                                book={d.bookCode}
                                                chapter={chapter[0]}
                                                onClick={cClick}
                                            >
                                                {chapter[0]}
                                            </Button>
                                    )}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
            </List>
        </Accordion>
    );
}

VersionsAccordion.propTypes = {
    docSet: PropTypes.object.isRequired,
    n: PropTypes.number.isRequired,
    catalog: PropTypes.object.isRequired,
    cClick: PropTypes.func.isRequired,
    navState: PropTypes.object.isRequired,
};