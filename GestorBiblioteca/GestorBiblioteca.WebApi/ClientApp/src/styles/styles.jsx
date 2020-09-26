import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const themeStyles = ({ breakpoints }) => ({
    root: {
        [breakpoints.up("sm")]: {
            padding: 25,
            margin: "auto"
        },
        [breakpoints.up("md")]: {
            background: '#f9f9f9',
        }
    },
    paper: {
        padding: 15
    },
    typography: {
        color: '#1C1C1C',
        letterSpacing: 0,
        fontFamily: 'Montserrat',
        fontSize: '0.9em',
        textAlign: 'left'
    },
});

export default themeStyles;