import { useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetailPage() {
    const eventData = useRouteLoaderData('event-detail');

    return (
        <>
            <EventItem event={eventData.event}></EventItem>
        </>
    );
}

export async function loader({ params }) {
    const { eventId } = params;
    const response = await fetch(`http://localhost:8080/events/${eventId}`);
    if (!response.ok) {
        throw new Response(JSON.stringify({ message: 'Event not found' }), { status: 404 });
    }
    return response.json();
}