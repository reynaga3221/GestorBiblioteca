import React, { useState, useEffect } from "react";
import themeStyles from '../../styles/styles';
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper,TextField, Typography } from '@material-ui/core';
import BookService from '../../services/BookService';
import BooksForm from './BooksForm';
import BookTable from "./BooksTable";

let emptyBook = {
    idBook: 0, title: '', author: '', totalQuantity: '', publishedDate: '2000/08/18'
};

const BooksComponent = ({ classes }) => {

    const [books, setBooks] = useState([]);
    const [currentBook, setCurrentBook] = useState(emptyBook);
    const [isEditing, setIsEditing] = useState(false);
    const bookService = new BookService();

    
    useEffect(() => {
        loadGrid();
    }, []);

    //ABM
    const addOrUpdateBook = () => {

        if (isEditing) {
            bookService.UpdateBook(currentBook).then(res => {
                setCurrentBook(emptyBook);
                setIsEditing(false);
                loadGrid();
                alert("Libro Actualizado");
            }).catch(res => {
                console.error(res);
                alert(res);
            });
        } else {
            bookService.AddBook(currentBook).then(res => {
                setCurrentBook(emptyBook);
                setIsEditing(false);
                loadGrid();
                alert("Libro Agregado");
            }).catch(res => {
                console.error(res);
                alert(res);
            });
        }
        
    };


    const deleteBook = () => {
        console.log("delete");
    };

    //FORM
    const cleanScreen = () => {

        setCurrentBook(emptyBook);
        setIsEditing(false);
    };

    const setSelectedDate = (date) => {
        setCurrentBook({ ...currentBook, publishedDate: date })
        console.log(date);
    };     

    const editSelection = (idBook) => {
        
        bookService.GetBookById(idBook).then(res => {
            setIsEditing(true);
            setCurrentBook(res.data);                      
        }).catch(res => 
            console.log(res)
        );
    };

    //TABLE
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
                        {
                            currentBook.idBook !== 0 ?
                                 'Edición ' + currentBook.title
                                :'Agregar Nuevo Libro' 
                        }
            </Typography>
                <Grid item xs={12}>
                    <Paper elevation={0} className={classes.paper}>
                            <BooksForm
                                book={currentBook}
                                setBook={(book) => setCurrentBook(book)}
                                handleAddBook={addOrUpdateBook}
                                handleSetSelectedDate={setSelectedDate}
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
                                handleEditSelection={editSelection}
                            />
                    </Paper>
                </Grid>
            </Grid>
        </div>
        </>
    )
}

export default withStyles(themeStyles)(BooksComponent);