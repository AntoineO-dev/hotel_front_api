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

    const renderEventContent = (eventInfo) => {
        return (
          <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
          </>
        )
      }

    const fetchReservations = async () => {
        try {
            const response = await reservationsServices.getReservations()
            const data = response.data.map(reservation => {
                return {
                    title: reservation.id_client,
                    start: reservation.check_in_date,
                    end: reservation.check_out_date
                }
            })


        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchReservations()
    }, []);

    return <>
        <div>
        <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        weekends={true}
        events={events}
        eventContent={renderEventContent}
      />
        </div>
    </>;
}

export default HotelCalendar;