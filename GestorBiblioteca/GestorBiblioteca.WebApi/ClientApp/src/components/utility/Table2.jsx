import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    tableCell: {
        fontWeight:"bold",
    }
});
    
const Table2 = ({ books}) => {
    const classes = useStyles();
    debugger;
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableCell}>Titulo</TableCell>
                        <TableCell className={classes.tableCell} align="right">Autor</TableCell>
                        <TableCell className={classes.tableCell} align="right">Cantidad</TableCell>
                        <TableCell className={classes.tableCell} align="right">Fecha de Publicacion</TableCell>                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {books.map((row) => (
                        <TableRow key={row.idBook}>
                            <TableCell component="th" scope="row">
                                {row.title}
                            </TableCell>
                            <TableCell align="right">{row.author}</TableCell>
                            <TableCell align="right">{row.totalQuantity}</TableCell>
                            <TableCell align="right">{row.publishedDate}</TableCell>                            
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default Table2;