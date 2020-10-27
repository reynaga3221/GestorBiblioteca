import React, { useState, useEffect } from "react";
import themeStyles from '../../styles/styles';
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper, TextField, Typography } from '@material-ui/core';
import loanService from '../../services/LoanService';
import LoanForm from './LoanForm';
import LoanTable from "./LoanTable";

let emptyLoan = {
    idloan: 0, loanDate: '', returnDate: '', idBook: '', idCliente: ''
};

const LoansBooksComponent = ({ classes }) => {

    const [loanbook, setLoanbook] = useState([]);
    const [currentLoan, setCurrentLoan] = useState(emptyLoan);
    const [isFlag, setIsFlag] = useState(false);
    const loanService = new loanService();
    const [dni, setDni] = useState([""]);

    useEffect(() => {

    }, []);

    //ABM
    const addLoan = () => {
        //debugger;
        loanService.GenerateLoan(currentLoan).then(res => {
            setCurrentLoan(emptyLoan);
            setIsFlag(false);
            loadGrid();
            alert("Prestamo Agregado");
        }).catch(res => {
            console.error(res);
            alert(res);
        });
    }

};

//TABLE
const loadGrid = () => {
    loanService.GetAllByDni(dni).then(res => {
        console.log(res.data);
        setLoanbook(res.data);
    }
    ).catch(res => {
        console.log("Error")
    });
}

return (
   
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper elevation={0} className={classes.paper}>
                        <LoanForm
                            Loan={currentLoan}
                            setLoan={(loan) => setCurrentLoan(loan)}
                            handleAddLoan={addLoan}
                            dni={dni}
                            setDni={setDni}
                        ></LoanForm>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                        Lista de Clientes
                        </Typography>
                    <Paper elevation={0} className={classes.paper}>
                        <LoanTable
                            loans={loans}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </div>

);
}
export default withStyles(themeStyles)(LoansBooksComponent);