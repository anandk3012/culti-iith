import React, { useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import '../styles/calendar.css';
import EventCard from "../components/EventCard";
import { dateWiseEvents } from '../data/eventData'

export default function CalendarComp() {

    const [date, setDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(date);
    const [dateEvents, setDateEvents] = useState(null);
    const noEventDay = {
        "id": 0,
        "title": "No events available :(",
        "club": "Please select another day"
    }

    const handleChange = (date) => {
        setDate(date);
    }
    const handleClick = (date) => {
        setSelectedDate(date);
        console.log(dateEvents);
    }
    const formatDate = (date) => {
        const offset = date.getTimezoneOffset();
        const adjustedDate = new Date(date.getTime() - (offset * 60 * 1000));
        return adjustedDate.toISOString().split('T')[0];
    }

    useEffect(() => {
        const formattedDate = formatDate(selectedDate);
        setDateEvents(dateWiseEvents[formattedDate]);
    }, [selectedDate, date])


    return (
        <div className=" flex flex-col items-center p-5 bg-[#292927] text-white font-[Montserrat] ">
            <h1 className="text-5xl text-center text-wrap mt-5 font-medium">Calendar</h1>
            <h2 className="text-xl font-light text-center text-wrap mb-5 ">Events Calendar</h2>
            <Calendar
                onChange={handleChange}
                value={date}
                className="flex flex-col flex-wrap border-none p-5 bg-[#3E3E3A] shadow-md shadow-black text-white"
                onClickDay={handleClick}
            />
            <hr className=" w-[90%] md:w-[60%] my-10 mx-auto" />
            <div className="w-full flex flex-col items-center">
                <div className="flex items-center w-[90%] md:w-1/2 text-3xl text-start  mb-5 gap-5">
                    <h1 className="ml-2">Events</h1>
                    {/* <h1 className="">{selectedDate.toLocaleDateString("en-US")}</h1> */}
                </div>
                <div className="flex flex-col flex-wrap gap-5 w-[90%] md:w-1/2 ">
                    {!dateEvents ? <EventCard key={noEventDay.id} event={noEventDay} /> :
                        dateEvents.map((event) => {
                            return <EventCard key={event.id} event={event} />
                        })
                    }

                </div>
            </div>
        </div >
    )
}
