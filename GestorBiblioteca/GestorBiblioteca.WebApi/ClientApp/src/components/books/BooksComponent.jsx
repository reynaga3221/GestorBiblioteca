import React, { useState, useEffect } from "react";
import themeStyles from '../../styles/styles';
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper,TextField, Typography } from '@material-ui/core';

const BooksComponent = ({ classes }) => {

    const [books, setBooks] = useState([]);
    //const bookService = new BookService();

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
                            <TextField id="outlined-basic" label="Autor" variant="outlined"  size="small" style={{marginBottom:20,marginRight:20}} />
                            <TextField id="outlined-basic" label="Titulo" variant="outlined"  size="small"style={{marginRight:20}} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField id="outlined-basic" label="Editorial" variant="outlined"  size="small"style={{marginBottom:20,marginRight:20}} />
                            <TextField id="outlined-basic" label="Cantidad" variant="outlined"  size="small" style={{}} />
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={0} className={classes.paper}>
                      asdsad
                    </Paper>
                </Grid>
            </Grid>
        </div>
        </>
    )
}

export default withStyles(themeStyles)(BooksComponent);