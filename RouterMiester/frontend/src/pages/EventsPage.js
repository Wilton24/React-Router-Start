import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
    const fetchedEvents = useLoaderData();
    return (
        <>
            <EventsList events={fetchedEvents} />
        </>
    );
}

export const loader = async () => {
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        throw new Error('Failed to fetch events');
    }
    const data = await response.json();
    return data.events;
};

export default EventsPage;