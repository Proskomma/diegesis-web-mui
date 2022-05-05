import React, {useState, useContext} from "react";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow} from "@mui/material";
import i18n from '../lib/i18n';
import AppLangContext from "../contexts/AppLang";

export default function MenuDownload({}) {
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

/*    const tableRows = [
        {org: "DCS", lang: `${i18n(appLang, 'language')}`, title: "Unfolding Word Literal Translation", versification: true},
        {org: "Vachan", lang: `${i18n(appLang, 'language')}`, title: "Vachan Translation", versification: true},
        {org: "eBible", lang: `${i18n(appLang, 'language')}`, title: "eBible Translation", versification: true},
        {org: "Other", lang: `${i18n(appLang, 'language')}`, title: "Other Translation", versification: true},
      ]*/
      const columns = [
        {
            id: 'id1',
            label: 'titulo1',
            minWidth: 50,
            align: 'right',
            format: value => value ? "yes" : "no",
        },
        {
            id: 'id2',
            label: 'titulo2',
            minWidth: 50,
            align: 'right',
            format: value => value ? "yes" : "no",
        },
        {
            id: 'id3',
            label: 'titulo3',
            minWidth: 50,
            align: 'right',
            format: value => value ? "yes" : "no",
        }
      ];

    const columna = [{
        org: "DCS", 
        lang: `${i18n(appLang, 'language')}`, 
        title: "Unfolding Word Literal Translation", 
        versification: true
    }, 
    {
        org: "Vachan", 
        lang: `${i18n(appLang, 'language')}`, 
        title: "Vachan Translation", 
        versification: true
    }, 
    {
        org: "eBible", 
        lang: `${i18n(appLang, 'language')}`, 
        title: "eBible Translation", 
        versification: true
    }];
    const rows = ['hola', 'estos', 'son', 'rows'];

    return <Paper sx={{width: '100%', overflow: 'hidden'}}>
    <TableContainer sx={{maxHeight: 440}}>
        <Table stickyHeader size="small" aria-label="sticky table">
            <TableHead>
                <TableRow>
                    {columns.map((column) => (
                        <TableCell
                            key={column.id}
                            align={column.align}
                            style={{minWidth: column.minWidth}}
                        >
                            {column.label}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {columna
                    .map((row) => {
                        return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                {columns.map((column) => {
                                    const value = row[column.id];
                                    return (
                                        <TableCell key={column.id} align={column.align}>
                                            {
                                                column.format &&
                                                typeof value === 'boolean' &&
                                                column.format(value)
                                            }
                                            {
                                                !column.format && value
                                            }
                                        </TableCell>
                                    );
                                })}
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
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
    />
</Paper>
}