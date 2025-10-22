import { useParams } from "react-router-dom";
import { EventItem } from "../components/EventItem";


export default function EventDetailPage() {


    const { eventId } = useParams();
    return (
        <>
            <EventItem eventId={eventId}></EventItem>
        </>
    );
}


export async function loader({ params }) {
    const { eventId } = params;
    const response = await fetch(`http://localhost:8080/event/${eventId}`);
    if (!response.ok) {
        throw new Response(JSON.stringify({ message: 'Event not found' }), { status: 404 });
    }
    return response.json();
}