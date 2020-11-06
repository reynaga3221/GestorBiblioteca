import React, { useState, useEffect } from "react";
import themeStyles from '../../styles/styles';
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper, TextField, Typography, Button} from '@material-ui/core';
import LoanBookService from '../../services/LoanBookService';
import InquirieTable from "./InquirieTable";


const InquirieBooksComponent = ({ classes }) => {

    const [loanBooks, setLoanBooks] = useState([]);
    const [dni, setDni] = useState("");
    const loanService = new LoanBookService();

    useEffect(() => {
        loadGrid();
    }, []);

    //TABLE
    const loadGrid = () => {
        loanService.GetAllDetors().then(res => {

            setLoanBooks(res.data);
        }
        ).catch(res => {
            console.log("Error")
        });

    }

    const loadGridByDni = () => {
        loanService.GetAllDetorsByDni(dni).then(res => {

            setLoanBooks(res.data);
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
                        'Buscar Deudores'
                    }
                </Typography>
                <Grid item xs={12}>
                    <Paper elevation={0} className={classes.paper}>
                        <Grid container item xs={12}>
                            <Grid item xs={5}>
                                <TextField value={dni} label="dni" variant="outlined" size="small" onChange={event => setDni(event.target.value)} style={{ marginBottom: 20, marginRight: 20 }} />
                                <Button color="primary" onClick={() => loadGridByDni()}>Buscar</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                        Lista de Deudores
                        </Typography>
                    <Paper elevation={0} className={classes.paper}>
                        <InquirieTable loanBooks={loanBooks}></InquirieTable>
                    </Paper>
                </Grid>
            </Grid>
        </div>

    );
}
export default withStyles(themeStyles)(InquirieBooksComponent);