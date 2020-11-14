import React, { useState, useEffect } from "react";
import themeStyles from '../../styles/styles';
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper, TextField, Typography } from '@material-ui/core';
import LoanBookService from '../../services/LoanBookService';
import ClientsService from '../../services/ClientsService';
import LoanForm from './LoansForm';
import LoanTable from "./LoansTable";
import LoansTable from "./LoansTable";


let emptyClient = {
    idcliente: 0, nombre: '', apellido: '', dni: '', telefono: '', mail: ''
};

const LoansBooksComponent = ({ classes }) => {

    const [loanBooks, setLoanBooks] = useState([]);
    const [idBook, setIdBook] = useState("0");   
    const [client, setClient] = useState(emptyClient);
    const [dni, setDni] = useState("");
    const loanService = new LoanBookService();
    const _clientService = new ClientsService();

    useEffect(() => {

    }, []);

    //ABM
    const addLoan = () => {
       
        loanService.AddLoanBook(client.idcliente, idBook).then(res => {
            
            loadGrid();
            alert("Prestamo Agregado");
        }).catch(res => {
            debugger;
            console.error(res.response.data.message);
            alert(res.response.data.message);
        });
    }


    //TABLE
    const loadGrid = () => {
        loanService.GetAllByDni(dni).then(res => {

            setLoanBooks(res.data);
        }
        ).catch(res => {
            console.log("Error")
        });

        _clientService.GetClientByDni(dni).then(res => {
            console.log(res.data);
            setClient(res.data);
        }
        ).catch(res => {
            console.log("Error")
        });
    }

    return (

        <div className={classes.root}>
            <Grid container spacing={2}>
                <Typography variant="h6" gutterBottom>
                    {
                        'Realizar Prestamo'
                    }
                </Typography>
                <Grid item xs={12}>
                    <Paper elevation={0} className={classes.paper}>
                        <LoanForm
                            client={client}
                            idBook={idBook}
                            setIdBook={setIdBook}
                            handleAddLoan={addLoan}
                            dni={dni}
                            setDni={setDni}
                            loadGrid={loadGrid}
                        ></LoanForm>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                        Lista de Prestamos
                        </Typography>
                    <Paper elevation={0} className={classes.paper}>
                        <LoansTable loanBooks={loanBooks }></LoansTable>
                    </Paper>
                </Grid>
            </Grid>
        </div>

    );
}
export default withStyles(themeStyles)(LoansBooksComponent);