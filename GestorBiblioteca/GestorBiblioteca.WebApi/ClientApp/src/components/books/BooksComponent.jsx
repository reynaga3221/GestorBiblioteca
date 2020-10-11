import React, { useState, useEffect } from "react";
import themeStyles from '../../styles/styles';
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper,TextField, Typography } from '@material-ui/core';
import BookService from '../../services/BookService';
import BooksForm from './BooksForm';
import BookTable from "./BooksTable";

let emptyBook = {
    idBook: '', title: '', author: '', totalQuantity: '', publishedDate: ''
};

const BooksComponent = ({ classes }) => {

    const [books, setBooks] = useState([]);
    const [currentBook, setCurrentBook] = useState(emptyBook);
    const bookService = new BookService();



    const cleanScreen = () => {
        
        setCurrentBook(emptyBook);      
    };

    const addOrUpdateBook = () => {
        console.log("add");
    };

    const setFormUpdate = () => {
        console.log("lleno formualrio");
    };

    const deleteBook = () => {
        console.log("delete");
    };

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
                            <BooksForm
                                book={currentBook}
                                setBook={(book) => setCurrentBook(book)}
                                handleAddBook={addOrUpdateBook}
                                handleCleanBook={cleanScreen}                              
                            ></BooksForm>
                    </Paper>
                </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>
                            Lista de Libros
                        </Typography>
                    <Paper elevation={0} className={classes.paper}>
                            <BookTable
                                books={books}
                                handleDeleteBook={deleteBook}
                                handleUpdateBook={setFormUpdate}
                            />
                    </Paper>
                </Grid>
            </Grid>
        </div>
        </>
    )
}

export default withStyles(themeStyles)(BooksComponent);