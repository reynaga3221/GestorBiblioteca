import React, { useState, useEffect } from "react";
import themeStyles from '../../styles/styles';
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper, TextField, Typography } from '@material-ui/core';
import ClientsService from '../../services/ClientsService';
import ClientsForm from './ClientsForm';
import ClientsTable from "./ClientsTable";

let emptyClient = {
    idcliente: 0, nombre: '', apellido: '', dni: '', telefono: '', mail: ''
};

const ClientsComponent = ({ classes }) => {

    const [Clients, setClients] = useState([]);
    const [currentClient, setCurrentClient] = useState(emptyClient);
    const [isEditing, setIsEditing] = useState(false);
    const ClientService = new ClientsService();


    useEffect(() => {
        loadGrid();
    }, []);

    //ABM
    const addOrUpdateClient = () => {
        debugger;
        if (isEditing) {
            ClientService.UpdateClient(currentClient).then(res => {
                setCurrentClient(emptyClient);
                setIsEditing(false);
                loadGrid();
                alert("Cliente Actualizado");
            }).catch(res => {
                console.error(res);
                alert(res);
            });
        } else {
            ClientService.AddClient(currentClient).then(res => {
                setCurrentClient(emptyClient);
                setIsEditing(false);
                loadGrid();
                alert("Cliente Agregado");
            }).catch(res => {
                console.error(res);
                alert(res);
            });
        }

    };


    const deleteClient = (idcliente) => {
        ClientService.DeleteClient(idcliente).then(res => {
            setCurrentClient(emptyClient);
            setIsEditing(false);
            loadGrid();
            alert("Cliente Eliminado ");
        }).catch(res => {
            console.error(res);
            alert(res);
        });
    };

    //FORM
    const cleanScreen = () => {

        setCurrentClient(emptyClient);
        setIsEditing(false);
    };

    /*const setSelectedDate = (date) => {
        setCurrentBook({ ...currentBook, publishedDate: date })
        console.log(date);
    };*/

    const editSelection = (idClient) => {
        debugger;
        ClientService.GetClientById(idClient).then(res => {
            setIsEditing(true);
            setCurrentClient(res.data);
        }).catch(res =>
            console.log(res)
        );
    };

    //TABLE
    const loadGrid = () => {
        ClientService.GetClients().then(res => {
            console.log(res.data);
            setClients(res.data);
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
                            currentClient.idcliente !== 0 ?
                                'Edicion ' + currentClient.nombre + " " + currentClient.apellido
                                : 'Agregar Nuevo Cliente'
                        }
                    </Typography>
                    <Grid item xs={12}>
                        <Paper elevation={0} className={classes.paper}>
                            <ClientsForm
                                Client={currentClient}
                                setClient={(Client) => setCurrentClient(Client)}
                                handleAddClient={addOrUpdateClient}
                                //handleSetSelectedDate={setSelectedDate}
                                handleCleanClient={cleanScreen}
                            ></ClientsForm>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>
                            Lista de Clientes
                        </Typography>
                        <Paper elevation={0} className={classes.paper}>
                            <ClientsTable
                                clients={Clients}
                                handleDeleteClient={deleteClient}
                                handleEditSelection={editSelection}
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default withStyles(themeStyles)(ClientsComponent);