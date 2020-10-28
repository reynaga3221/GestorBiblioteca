import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    tableCell: {
        fontWeight: "bold",
    }
});

const LoansTable = ({ loanBooks }) => {
    const classes = useStyles();
    debugger;
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableCell}>ID</TableCell>
                        <TableCell className={classes.tableCell} align="right">Titulo</TableCell>
                        <TableCell className={classes.tableCell} align="right">Autor</TableCell>
                        <TableCell className={classes.tableCell} align="right">Editorial</TableCell>
                        <TableCell className={classes.tableCell} align="right">Fecha de prestamo</TableCell>
                        <TableCell className={classes.tableCell} align="right">Fecha de devolucion</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {loanBooks.map((row) => (
                        <TableRow key={row.idLoan}>
                            <TableCell component="th" scope="row">{row.idLoan}</TableCell>
                            <TableCell align="right">{row.book.title}</TableCell>
                            <TableCell align="right">{row.book.author}</TableCell>
                            <TableCell align="right">{row.loanDate}</TableCell>
                            <TableCell align="right">{row.returnDate}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default LoansTable;