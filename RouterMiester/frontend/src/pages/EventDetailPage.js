import { useParams, useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetailPage() {

    const { eventId } = useParams();
    const data = useLoaderData();

    // const eventismo = {
    //     id: "e1",
    //     title: "A dummy event",
    //     date: "2023-02-22",
    //     image: "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
    //     description: "Join this amazing event and connect with fellow developers."
    // };

    console.log(data);

    return (
        <>
            <EventItem event={data.event}></EventItem>
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