import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, TextField, Button, Typography } from '@material-ui/core';
import themeStyles from '../../styles/styles';

const LoanForm = ({ client, dni, idBook, setDni, setIdBook, handleAddLoan, loadGrid }) => {

    const validateForm = () => {
        handleAddLoan();
    }
 
    return (
        <>
            <Grid container item xs={12}>


                <Grid item xs={5}>
                    <TextField value={dni} label="dni" variant="outlined" size="small" onChange={event => setDni(event.target.value)} style={{ marginBottom: 20, marginRight: 20 }} />              
                    <Button color="primary" onClick={() =>loadGrid()}>Buscar</Button>
                </Grid>
                <Grid item xs={5}>

                </Grid>
                <Grid item xs={2}>

                    <Typography variant="h6" gutterBottom>
                        {
                            client.idcliente != 0 ? "DNI: " + client.dni + " " + client.apellido + " " + client.nombre : ""
                        }    
                     </Typography>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <TextField value={idBook} label="IdLibro" variant="outlined" size="small" onChange={event => setIdBook(event.target.value)} style={{ marginRight: 20 }} />
                <Button color="primary" onClick={validateForm}>Prestar</Button>
            </Grid>
        </>
    )
}
export default withStyles(themeStyles)(LoanForm);