import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import reservationsServices from "../services/reservationsServices";
import { useEffect, useState } from "react";

const HotelCalendar = () => {

    const [reservations, setReservations] = useState([]);
    
    const events = [
            { title: 'Meeting', start: new Date() }
          ]

    const fetchReservations = async () => {
        try {
            const response = await reservationsServices.getReservations()
            setReservations(response.data)


        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchReservations()
    }, []);

    return <>
        <div>
            <h1>Calendrier</h1>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView='dayGridMonth'
                weekends={false}
                events={events}
                eventContent={renderEventContent}
            />
        </div>
    </>;
}

export default HotelCalendar;