import React, { useState } from "react";
import { Calendar } from "react-calendar";
// import 'react-calendar/dist/Calendar.css';
import '../styles/calendar.css';

export default function CalendarComp() {

    const [date, setDate] = useState(new Date());
    const handleChange = (date) => {
        setDate(date);
    }

    return (
        <div className="min-h-screen flex flex-col items-center p-5 bg-[#FEC601]">
            <h1 className="text-3xl font-bold text-center text-wrap my-5 ">Events Calendar</h1>
            <Calendar
                onChange={handleChange}
                value={date}
                className="flex flex-col flex-wrap border-2 border-solid border-black p-5 bg-white shadow-xl shadow-black"
            />

        </div>
    )
}
