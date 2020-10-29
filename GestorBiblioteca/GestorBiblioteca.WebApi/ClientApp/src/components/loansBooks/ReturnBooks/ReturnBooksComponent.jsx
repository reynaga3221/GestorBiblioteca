import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper, TextField, Typography } from '@material-ui/core';
import themeStyles from '../../../styles/styles';
import LoanBookService from '../../../services/LoanBookService';
import ClientsService from '../../../services/ClientsService';
import ReturnsForm from './ReturnsForm';
import ReturnsTable from './ReturnsTable';

let emptyClient = {
    idcliente: 0, nombre: '', apellido: '', dni: '', telefono: '', mail: ''
};


const LoansBooksComponent = ({ classes }) =>
{
    const [loanBooks, setLoanBooks] = useState([]);
    const [idBook, setIdBook] = useState("");
    const [client, setClient] = useState(emptyClient);
    const [dni, setDni] = useState("");
    const loanService = new LoanBookService();
    const _clientService = new ClientsService();

    const loadGrid = () => {
        loanService.GetAllByDni(dni).then(res => {
            setLoanBooks(res.data);
        }
        ).catch(res => {
            console.log("Error")
        });

        _clientService.GetClientByDni(dni).then(res => {          
            setClient(res.data);
        }
        ).catch(res => {
            console.log("Error")
        });
    }

    const updateLoan = (idLoan,idBook) => {
        loanService.UpdateLoanBook(idLoan, client.idcliente, idBook).then(res => {
            loadGrid();
            alert("Devolucion Exitosa");
        }).catch(res => {
            console.error(res);
            alert(res);
        });
    }

    return (
        <div className={classes.root}>
        <Grid container spacing={2}>
            <Typography variant="h6" gutterBottom>
                {
                    'Devolucion de Libros'
                }
            </Typography>
            <Grid item xs={12}>
                <Paper elevation={0} className={classes.paper}>
                        <ReturnsForm
                            client={client}                      
                            dni={dni}
                            setDni={setDni}
                            loadGrid={loadGrid}
                        ></ReturnsForm>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                    Lista de Prestamos
                        </Typography>
                <Paper elevation={0} className={classes.paper}>
                        <ReturnsTable loanBooks={loanBooks} handleReturnBook={updateLoan}> </ReturnsTable>
                </Paper>
            </Grid>
        </Grid>
    </div>);
}

export default withStyles(themeStyles)(LoansBooksComponent);