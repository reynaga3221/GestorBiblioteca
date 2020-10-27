import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, TextField, Button } from '@material-ui/core';
import themeStyles from '../../styles/styles';
import DatePicker from "../utility/DatePicker";

const LoanForm = ({ dni, Loan, setDni, setLoan, handleAddLoan, idbook}) => {

    const validateForm = () => {
        if (Client.nombre !== "" && Client.apellido !== "" && Client.dni !== "") {           
            handleAddLoan();
        }
        else {
            alert("Complete los datos");
        }
    }

    return (
        <>
            <Grid item xs={6}>
                <TextField value={Client.nombre ? Client.nombre : ''} label="Nombre" variant="outlined" size="small" onChange={(e) => setLoan({ ...Client, nombre: e.target.value })} style={{ marginBottom: 20, marginRight: 20 }} />
                <TextField value={Client.apellido ? Client.apellido : ''} label="Apellido" variant="outlined" size="small" onChange={(e) => setLoan({ ...Client, apellido: e.target.value })} style={{ marginRight: 20 }} />
            </Grid>
            <Grid item xs={6}>                
                {/*   <TextField value={book.publishedDate ? book.publishedDate : ''} label="Fecha de Publicacion" variant="outlined" size="small" onChange={(e) => setBook({ ...book, publishedDate: e.target.value })} style={{ marginBottom: 20, marginRight: 20 }} />  */}
                <TextField type="number" value={Client.dni ? Client.dni : ''} label="DNI" variant="outlined" size="small" onChange={(e) => setLoan({ ...Client, dni: e.target.value })} style={{ marginRight: 20 }} />
            </Grid>
            <Grid container justify="flex-end" alignItems="flex-end" item xs={12}>
                <Button color="primary" onClick={validateForm}> Aceptar</Button>
                <Button color="secondary" onClick={handleCleanClient} >Cancelar</Button>
            </Grid>
        </>
    )
}
export default withStyles(themeStyles)(LoanForm);