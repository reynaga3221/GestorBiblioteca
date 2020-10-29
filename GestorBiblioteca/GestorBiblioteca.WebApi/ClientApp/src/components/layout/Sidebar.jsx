import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ReplyAllIcon from '@material-ui/icons/ReplyAll';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MailIcon from '@material-ui/icons/Mail';
import PeopleIcon from '@material-ui/icons/People';
import { Link } from "react-router-dom";
import BooksComponent from '../books/BooksComponent';
import ClientsComponent from '../clients/ClientsComponent';
import HomeComponent from '../home/HomeComponent';
import ReturnBooksComponent from '../loansBooks/ReturnBooks/ReturnBooksComponent';
import LoansBooksComponent from '../loansBooks/LoansBooksComponent';
import inquirieBooksComponent from '../inquiries/inquirieBooksComponent';
import SendIcon from '@material-ui/icons/Send';
import AssessmentIcon from '@material-ui/icons/Assessment';
import Login from './Login';
const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        background: "blue"
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        background: "#e8eaf6",
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        background: "#e8eaf6",
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(4) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(7) + 1,
        },
    },
    toolbar: {
        minHeight: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    div2: {
        minHeight: 45,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,       
    },
}));

export default function Sidebar() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <Router>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar style={{ paddingLeft: 20, minHeight: 50, boxShadow: '0px  3px 6px #00000029' }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: open,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="subtitle1" noWrap>
                            Modulo Libros
          </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        }),
                    }}
                >
                    <div style={{ minHeight: 50, backgroundColor: "#e8eaf6" }} className={classes.toolbar}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <MenuIcon color="primary" /> : <MenuIcon />}
                        </IconButton>
                        <span style={{ color: "#3f51b5", fontWeight: "bold", fontSize: 16 }} >
                            Gestor Biblioteca
                     </span>
                    </div>
                    <Divider />
                    <List>
                        <Link to='./books'>
                            <ListItem button key={"Libros"}>
                                <ListItemIcon> <MenuBookIcon color="primary" /></ListItemIcon>
                                <ListItemText primary={"Libros"} />
                            </ListItem>
                        </Link>
                        <Link to='./clients'>
                            <ListItem button key={"Clientes"}>
                                <ListItemIcon> <PeopleIcon color="primary" /></ListItemIcon>
                                <ListItemText primary={"Clientes"} />
                            </ListItem>
                        </Link>
                        <Link to='./loans'>
                            <ListItem button key={"Prestamos"}>
                                <ListItemIcon> <SendIcon color="primary" /></ListItemIcon>
                                <ListItemText primary={"Prestamos"} />
                            </ListItem>
                        </Link>
                        <Link to='./returns'>
                            <ListItem button key={"Devoluciones"}>
                                <ListItemIcon> <ReplyAllIcon color="primary" /></ListItemIcon>
                                <ListItemText primary={"Devoluciones"} />
                            </ListItem>
                        </Link>
                        <Link to='./inquirie'>
                            <ListItem button key={"Consultas"}>
                                <ListItemIcon> <AssessmentIcon color="primary" /></ListItemIcon>
                                <ListItemText primary={"Consultas"} />
                            </ListItem>
                        </Link>
                    </List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.div2} />                    
                        <Switch>
                            <Route exact path="/" component={HomeComponent} />
                            <Route exact path="/clients" component={ClientsComponent} />
                            <Route exact path="/books" component={BooksComponent} />
                            <Route exact path="/loans" component={LoansBooksComponent} />
                            <Route exact path="/returns" component={ReturnBooksComponent} />
                            <Route exact path="/inquirie" component={inquirieBooksComponent} />
                        </Switch>
                </main>
            </Router>
        </div>
    );
}
