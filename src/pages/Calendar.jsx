import React, { useEffect, useState } from "react";
import { Calendar } from "react-calendar";
// import 'react-calendar/dist/Calendar.css';
import '../styles/calendar.css';

export default function CalendarComp() {

    const [date, setDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(date);
    const [dateEvents, setDateEvents] = useState(null);


    const handleChange = (date) => {
        setDate(date);
    }
    const handleClick = (date) => {
        setSelectedDate(date);
    }
    const formatDate = (date) => {
        const offset = date.getTimezoneOffset();
        const adjustedDate = new Date(date.getTime() - (offset * 60 * 1000));
        return adjustedDate.toISOString().split('T')[0];
    }

    useEffect(() => {
        const dateWiseEvents = {
            "2024-01-01": "New Year",
            "2024-01-26": "Republic Day",
            "2024-02-14": "Valentine's Day",
            "2024-07-29": "Orientation Day",
            "2024-07-28": "Almost start",
            "2024-07-24": "Fee payment",
            "2024-07-21": "Back to college Day",
        }
        const formattedDate = formatDate(selectedDate);
        setDateEvents(dateWiseEvents[formattedDate]);
    }, [selectedDate, date])

    
    return (
        <div className="min-h-screen flex flex-col items-center p-5 bg-[#FEC601]">
            <h1 className="text-3xl font-bold text-center text-wrap my-5 ">Events Calendar</h1>
            <Calendar
                onChange={handleChange}
                value={date}
                className="flex flex-col flex-wrap border-2 border-solid border-black p-5 bg-white shadow-xl shadow-black"
                onClickDay={handleClick}
            />
            <div>
                <h1 className="text-2xl font-bold text-center text-wrap my-5 ">
                    <p>Date :<span >{selectedDate.toLocaleDateString("en-US")}</span></p>
                </h1>
            </div>
            <div className="flex flex-col flex-wrap border-2 border-solid border-black p-5 bg-white shadow-xl shadow-black">
                <h1 className="font-bold text-2xl text-center">Events</h1>
                {!dateEvents ? <p className="font-semibold">Sorry no events on this day.. :(</p> : <p className="font-semibold text-3xl text-center text-green-700">{dateEvents}!!</p>}
            </div>
        </div >
    )
}
