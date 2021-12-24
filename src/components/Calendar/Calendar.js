import React, { useState } from "react";
import "./Calendar.scss"
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";

function Calendar() {
    const now = new Date()
    const [value, onChange] = useState(new Date());
    console.log(value.target?.changedArgs.values)

    return (
        <div className="dateComponents">
            <CalendarComponent
                onChange={onChange}
                min={now}
                isMultiSelection={true}>
            </CalendarComponent>
            <button className="reserveButton">Reserve</button>
        </div >
    );
}

export default Calendar;