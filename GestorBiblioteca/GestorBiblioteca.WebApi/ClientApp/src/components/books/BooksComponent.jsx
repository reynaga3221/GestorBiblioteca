import React, { useState, useEffect } from "react";
import themeStyles from '../../styles/styles';
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper,TextField, Typography } from '@material-ui/core';
import BookService from '../../services/BookService';
import Table2 from '../utility/Table2';
const BooksComponent = ({ classes }) => {

    const [books, setBooks] = useState([]);
    const bookService = new BookService();

    useEffect(() => {
        loadGrid();
    }, []);

    const loadGrid = () => {
        bookService.GetBooks().then(res => {
            console.log(res.data);
            setBooks(res.data);
        }      
        ).catch(res => {
           console.log("Error")
        });
    }

    return (
        <>
        <div className={classes.root}>
            <Grid container spacing={2}>
            <Typography variant="h6" gutterBottom>
                Agregar Nuevo Libro
            </Typography>
                <Grid item xs={12}>
                    <Paper elevation={0} className={classes.paper}>
                        <Grid item xs={6}>
                            <TextField  label="Autor" variant="outlined"  size="small" style={{marginBottom:20,marginRight:20}} />
                            <TextField  label="Titulo" variant="outlined"  size="small"style={{marginRight:20}} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField  label="Editorial" variant="outlined"  size="small"style={{marginBottom:20,marginRight:20}} />
                            <TextField  label="Cantidad" variant="outlined"  size="small" style={{}} />
                        </Grid>
                    </Paper>
                </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>
                            Lista de Libros
                        </Typography>
                    <Paper elevation={0} className={classes.paper}>
                            <Table2 books={books} />
                    </Paper>
                </Grid>
            </Grid>
        </div>
        </>
    )
}

export default withStyles(themeStyles)(BooksComponent);