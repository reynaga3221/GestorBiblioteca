import React, { useState, useEffect } from "react";
import themeStyles from '../../styles/styles';
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper, TextField, Typography } from '@material-ui/core';
import LoanBookService from '../../services/LoanBookService';
import LoanForm from './LoansForm';
import LoanTable from "./LoansTable";

const LoansBooksComponent = ({ classes }) => {

    const [loanBooks, setLoanBooks] = useState([]);
    const [book, setBook] = useState("");
    const [isFlag, setIsFlag] = useState(false);
    const loanService = new LoanBookService();
    const [dni, setDni] = useState([""]);

    useEffect(() => {

    }, []);

    //ABM
    const addLoan = () => {
        //debugger;
        //loanService.GenerateLoan(currentLoan).then(res => {
        //    setIsFlag(false);
        //    loadGrid();
        //    alert("Prestamo Agregado");
        //}).catch(res => {
        //    console.error(res);
        //    alert(res);
        //});
    }


//TABLE
const loadGrid = () => {
    loanService.GetAllByDni(dni).then(res => {
        console.log(res.data);
        setLoanBooks(res.data);
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
                        book={book}
                        setBook={setBook}
                        handleAddLoan={addLoan}
                        dni={dni}
                        setDni={setDni}
                        loadGrid={loadGrid}
                        ></LoanForm>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                        Lista de Clientes
                        </Typography>
                    <Paper elevation={0} className={classes.paper}>
                        <LoanTable
                        loanBooks={loanBooks}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </div>

);
}
export default withStyles(themeStyles)(LoansBooksComponent);