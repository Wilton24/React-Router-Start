import { useParams } from "react-router-dom";

export default function EventDetailPage() {


    const { eventId } = useParams();
    return <>
        <h1>Event Detail Page</h1>
        Event Details for Event ID: {eventId}
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aliquam expedita eos perferendis? Nostrum, sapiente minima, vitae nesciunt non ratione maxime autem consectetur
        earum quos dicta sit illum minus accusamus quia!</>;
}