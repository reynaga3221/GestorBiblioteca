import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, TextField, Button, Typography } from '@material-ui/core';
import themeStyles from '../../../styles/styles';
import DatePicker from "../../utility/DatePicker";


const ReturnsForm = ({ client, dni, setDni, loadGrid }) => {

    return (
        <>
            <Grid container item xs={12}>
                <Grid item xs={5}>
                    <TextField value={dni} label="dni" variant="outlined" size="small" onChange={event => setDni(event.target.value)} style={{ marginBottom: 20, marginRight: 20 }} />              
                    <Button color="primary" onClick={() => loadGrid()}>Buscar</Button>
                </Grid>
                <Grid item xs={5}>

                </Grid>                               
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h6" gutterBottom>
                    {
                        client.idcliente != 0 ? "DNI: " + client.dni + " " + client.apellido + " " + client.nombre : ""
                    }
                </Typography>             
            </Grid>

        </>
    );
}
export default withStyles(themeStyles)(ReturnsForm);

