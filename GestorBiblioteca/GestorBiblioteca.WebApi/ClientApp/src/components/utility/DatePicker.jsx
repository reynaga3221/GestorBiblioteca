import "date-fns";
import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from "@material-ui/pickers";

const DatePicker = ({ selectedDate, setSelectedDate}) => {    

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                style={{marginTop:-10}}
                                
                format="yyyy/MM/dd"
                margin="normal"
                id="date-picker-dialog" 
                label="Fecha de Publicacion"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    "aria-label": "change date"
                }}
            />
        </MuiPickersUtilsProvider>
    );
}

export default DatePicker;
