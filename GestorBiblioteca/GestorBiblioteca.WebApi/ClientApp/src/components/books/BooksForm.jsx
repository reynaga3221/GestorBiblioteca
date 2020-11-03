import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, TextField, Button, Typography } from '@material-ui/core';
import themeStyles from '../../styles/styles';
import DatePicker from "../utility/DatePicker";

const BooksForm = ({ classes, book, setBook, handleSetSelectedDate, handleAddBook, handleCleanBook }) => {

    const validateForm = () => {
        if (book.author !== "" && book.title !== "" && book.publishedDate && book.totalQuantity) {           
            handleAddBook();
        }
        else {
            alert("Complete los datos del libro");
        }

    }

    return (
        <>
            <Grid container justify="flex-end"  item xs={12}>
                <Grid item xs={4}>
                    <TextField value={book.author ? book.author : ''} label="Autor" variant="outlined" size="small" onChange={(e) => setBook({ ...book, author: e.target.value })} style={{ marginBottom: 20, marginRight: 20 }} />
                    <TextField value={book.title ? book.title : ''} label="Titulo" variant="outlined" size="small" onChange={(e) => setBook({ ...book, title: e.target.value })} style={{ marginRight: 20 }} />
                </Grid>
                <Grid item xs={6}>                
                </Grid>            
                <Grid item xs={2}>
                    <Typography variant="h6" gutterBottom>
                       
                        </Typography>
                </Grid>            
            </Grid>
            <Grid item xs={6}>                
                {/*   <TextField value={book.publishedDate ? book.publishedDate : ''} label="Fecha de Publicacion" variant="outlined" size="small" onChange={(e) => setBook({ ...book, publishedDate: e.target.value })} style={{ marginBottom: 20, marginRight: 20 }} />  */}
                <TextField type="number" value={book.totalQuantity ? book.totalQuantity : ''} label="Cantidad" variant="outlined" size="small" onChange={(e) => setBook({ ...book, totalQuantity: e.target.value })} style={{ marginRight: 20 }} />
                <DatePicker selectedDate={book.publishedDate} setSelectedDate={handleSetSelectedDate} />
            </Grid>
            <Grid container justify="flex-end" alignItems="flex-end" item xs={12}>
                <Button color="primary" onClick={validateForm}> Aceptar</Button>
                <Button color="secondary" onClick={handleCleanBook} >Cancelar</Button>
            </Grid>
        </>
    )
}
export default withStyles(themeStyles)(BooksForm);