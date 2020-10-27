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

const ClientTable = ({ clients, handleDeleteClient, handleEditSelection }) => {
    const classes = useStyles();
    debugger;
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableCell}>Nombre</TableCell>
                        <TableCell className={classes.tableCell} align="right">Apellido</TableCell>
                        <TableCell className={classes.tableCell} align="right">DNI</TableCell>
                        <TableCell className={classes.tableCell} align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {clients.map((row) => (
                        <TableRow key={row.idcliente}>
                            <TableCell component="th" scope="row">{row.nombre}</TableCell>
                            <TableCell align="right">{row.apellido}</TableCell>
                            <TableCell align="right">{row.dni}</TableCell>
                            <TableCell align="right">
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default ClientTable;