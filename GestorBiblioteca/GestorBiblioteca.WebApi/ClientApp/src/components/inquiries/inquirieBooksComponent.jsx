import React, { useState, useEffect } from "react";
import themeStyles from '../../styles/styles';
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper, TextField, Typography, Button} from '@material-ui/core';
import LoanBookService from '../../services/LoanBookService';
import ClientsService from '../../services/ClientsService';
import InquirieTable from "./InquirieTable";
import BookService from "../../services/BookService";


let emptyClient = {
    idcliente: 0, nombre: '', apellido: '', dni: '', telefono: '', mail: ''
};

/*let emptyBook = {
    idBook: 0, title: '', author: '', totalQuantity: '', publishedDate: '2000/08/18'
};*/

const inquirieBooksComponent = ({ classes }) => {

    const [loanBooks, setLoanBooks] = useState([]);
    const [client, setClient] = useState(emptyClient);
    //const [book, setBook] = useState(emptyBook);
    const [dni, setDni] = useState("");
    const loanService = new LoanBookService();
    const _clientService = new ClientsService();
    //const _bookService = new BookService();

    useEffect(() => {

    }, []);

    //TABLE
    const loadGrid = () => {
        loanService.GetAllByDni().then(res => {

            setLoanBooks(res.data);
        }
        ).catch(res => {
            console.log("Error")
        });

        _clientService.GetAllByDni(dni).then(res => {
            console.log(res.data);
            setClient(res.data);
        }
        ).catch(res => {
            console.log("Error")
        });

        /*_bookService.GetAllDetors(dni).then(res => {
            console.log(res.data);
            setBook(res.data);
        }
        ).catch(res => {
            console.log("Error")
        });*/

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
export default withStyles(themeStyles)(inquirieBooksComponent);