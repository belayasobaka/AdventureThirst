import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Button from "@/app/components/Button";
import {DemoItem} from "@mui/x-date-pickers/internals/demo";

export default function BasicDateCalendar() {
    const [value, setvalue] = React.useState(new Date());
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar disablePast={true}
            />
            <div></div>
        </LocalizationProvider>
    );
}
