import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, TextField, Button, Typography } from '@material-ui/core';
import themeStyles from '../../styles/styles';
import DatePicker from "../utility/DatePicker";

const LoanForm = ({ dni, book, setDni, setBook, handleAddLoan, loadGrid }) => {

    const validateForm = () => {
        handleAddLoan();
    }

    return (
        <>
            <Grid container item xs={12}>


                <Grid item xs={5}>
                    <TextField value={dni} label="dni" variant="outlined" size="small" onChange={(e) => setDni(e.target.value)} style={{ marginBottom: 20, marginRight: 20 }} />
                    <TextField value={""} label="Apellido" variant="outlined" size="small" style={{ marginRight: 20 }} />
                    <Button color="primary" onClick={() =>loadGrid()}>Buscar</Button>
                </Grid>
                <Grid item xs={5}>

                </Grid>
                <Grid item xs={2}>

                    <Typography variant="h6" gutterBottom>
                        Dni pepito xxxxxxxx
                        </Typography>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" value={book} label="IdLibro" variant="outlined" size="small" onChange={(e) => setBook(e.target.value)} style={{ marginRight: 20 }} />
                <Button color="primary" >Prestar</Button>
            </Grid>
        </>
    )
}
export default withStyles(themeStyles)(LoanForm);