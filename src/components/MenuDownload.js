import React, {useState, useContext} from "react";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, IconButton, Typography} from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import i18n from '../lib/i18n';
import AppLangContext from "../contexts/AppLang";

export default function MenuDownload() {
    const appLang = useContext(AppLangContext);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };

    const handleRowClick = (r) => {
        console.log(`Download ${r.id} from ${r.org}`)
    };

    const tableRows = [
        {org: "DCS", lang: 'en', abbr: 'ult', title: "Unfolding Word Literal Translation", id: "dcs", versification: false},
        {org: "Vachan", lang: 'hi', abbr: 'vt', title: "Vachan Translation", id: "vachan", versification: false},
        {org: "eBible", lang: 'en', abbr: 'et', title: "eBible Translation", id: "ebible", versification: true},
        {org: "Other", lang: 'zzz', abbr: 'ot', title: "Other Translation", id: "other", versification: false},
    ];

    return <>
    <Typography variant="h5">{i18n(appLang, 'menu_download')}</Typography>
    <Paper sx={{width: '100%', overflow: 'hidden'}}>
        <TableContainer sx={{maxHeight: 440}}>
            <Table stickyHeader size="small" aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            {i18n(appLang, 'organization')}
                        </TableCell>
                        <TableCell>
                            {i18n(appLang, 'language')}
                        </TableCell>
                        <TableCell>
                            {i18n(appLang, 'abbreviation')}
                        </TableCell>
                        <TableCell>
                            {i18n(appLang, 'title')}
                        </TableCell>
                        <TableCell>
                            {i18n(appLang, 'versification')}
                        </TableCell>
                        <TableCell>
                            {i18n(appLang, 'download_actions')}
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableRows
                        .map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                    <TableCell>
                                        {row.org}
                                    </TableCell>
                                    <TableCell>
                                        {row.lang}
                                    </TableCell>
                                    <TableCell>
                                        {row.abbr}
                                    </TableCell>
                                    <TableCell>
                                        {row.title}
                                    </TableCell>
                                    <TableCell>
                                        {i18n(appLang, row.versification ? 'yes' : 'no') }
                                    </TableCell>
                                    <TableCell>
                                        <IconButton onClick = {() => handleRowClick(row)} >
                                            <DownloadIcon fontSize="small" color="primary" />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            siez="small"
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={tableRows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    </Paper>
    </>
}
