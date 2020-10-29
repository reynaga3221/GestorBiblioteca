import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, Chip } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    tableCell: {
        fontWeight: "bold",
    }
});

const ReturnsTable = ({ loanBooks, handleReturnBook }) => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableCell}>Id Prestamo</TableCell>
                        <TableCell className={classes.tableCell} align="right">Titulo</TableCell>
                        <TableCell className={classes.tableCell} align="right">Autor</TableCell>
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
                            {
                                row.returnDate == "" ?
                                    <TableCell align="right"> <Button color="primary">
                                        <Chip
                                            label="Devolver"
                                            clickable
                                            color="secondary"
                                            onClick={() => handleReturnBook(row.idLoan,row.book.idBook)}
                                            icon={<DoneIcon />}
                                        />
                                    </Button> </TableCell>
                                   :
                                    <TableCell align="right">{row.returnDate}</TableCell>
                            }

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default ReturnsTable;